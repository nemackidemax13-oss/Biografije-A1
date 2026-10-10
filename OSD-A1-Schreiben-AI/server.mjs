// Replit / Node.js 20+ wrapper for the DE-MAX Groq grading Worker.
// Put GROQ_API_KEY in Replit Secrets, never in this file or GitHub.
import http from 'node:http';
import worker from './worker.js';

const port=Number(process.env.PORT || 3000);
const rate=new Map();
const limit=Number(process.env.MAX_CHECKS_PER_HOUR || 20);

const send=(res,status,payload)=>{
  res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});
  res.end(JSON.stringify(payload));
};
function rateLimited(req){
  const forwarded=req.headers['x-forwarded-for'];
  const key=(typeof forwarded==='string' ? forwarded.split(',')[0].trim() : req.socket.remoteAddress)||'unknown';
  const now=Date.now();
  if(rate.size>5000)for(const [k,v] of rate)if(v.end<now)rate.delete(k);
  const current=rate.get(key);
  if(!current||current.end<now){rate.set(key,{count:1,end:now+3600000});return false;}
  if(current.count>=limit)return true;
  current.count++;
  return false;
}
const server=http.createServer(async(req,res)=>{
  if(req.method==='GET' && (req.url==='/'||req.url==='/health')){
    send(res,200,{status:'online',groqConfigured:Boolean(process.env.GROQ_API_KEY)});
    return;
  }
  if(!['POST','OPTIONS'].includes(req.method)){send(res,405,{ok:false,error:'Nepodržan zahtev.'});return;}
  if(req.method==='POST'&&rateLimited(req)){send(res,429,{ok:false,error:'Privremeni limit provera je dostignut. Pokušaj kasnije.'});return;}
  try{
    const chunks=[];let size=0;
    for await(const chunk of req){
      size+=chunk.length;
      if(size>8192){send(res,413,{ok:false,error:'Tekst je predugačak.'});return;}
      chunks.push(chunk);
    }
    const url=new URL(req.url||'/', 'https://localhost');
    const request=new Request(url,{method:req.method,headers:req.headers,...(req.method==='POST'?{body:Buffer.concat(chunks)}:{})});
    const response=await worker.fetch(request,{GROQ_API_KEY:process.env.GROQ_API_KEY,GROQ_MODEL:process.env.GROQ_MODEL});
    const headers={};response.headers.forEach((value,key)=>{headers[key]=value;});
    res.writeHead(response.status,headers);
    res.end(Buffer.from(await response.arrayBuffer()));
  }catch(error){
    console.error('Backend error:',error?.message||error);
    if(!res.headersSent)send(res,500,{ok:false,error:'Došlo je do greške u AI serveru.'});
    else res.end();
  }
});
server.listen(port,'0.0.0.0',()=>console.log('DE-MAX Schreiben AI backend sluša port '+port));
