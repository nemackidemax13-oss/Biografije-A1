// DE-MAX AI opis slike — Cloudflare Worker
// Secrets (Cloudflare Worker > Settings > Variables and Secrets):
// OPENAI_API_KEY = your private API key (SECRET; never add it to GitHub)
// Optionally set ALLOWED_ORIGIN = https://nemackidemax13-oss.github.io
const HEADERS={"Content-Type":"application/json","Cache-Control":"no-store"};
export default {async fetch(request,env){
 const origin=request.headers.get("Origin")||"";
 const defaultAllowed=["https://nemackidemax13-oss.github.io"];
 const extra=String(env.ALLOWED_ORIGINS||env.ALLOWED_ORIGIN||"").split(",").map(s=>s.trim()).filter(Boolean);
 const allowedOrigins=[...defaultAllowed,...extra];
 const replitOrigin=/^https:\/\/[a-z0-9-]+(?:\.[a-z0-9-]+)*\.(?:replit\.dev|replit\.app|repl\.co)$/i.test(origin);
 const originAllowed=!origin||allowedOrigins.includes(origin)||replitOrigin;
 const cors={"Access-Control-Allow-Origin":originAllowed?(origin||allowedOrigins[0]):allowedOrigins[0],"Access-Control-Allow-Methods":"POST, OPTIONS","Access-Control-Allow-Headers":"Content-Type","Access-Control-Max-Age":"86400","Vary":"Origin"};
 if(request.method==="OPTIONS")return new Response(null,{status:originAllowed?204:403,headers:cors});
 const respond=(body,status=200)=>new Response(JSON.stringify(body),{status,headers:{...HEADERS,...cors}});
 if(!originAllowed)return respond({error:"Origin nije dozvoljen. Dodaj domen u ALLOWED_ORIGINS."},403);
 if(request.method!=="POST")return respond({error:"Samo POST zahtev."},405);
 if(!env.OPENAI_API_KEY)return respond({error:"OPENAI_API_KEY nije podešen na Worker-u."},503);
 try{
 const raw=await request.text();if(raw.length>5500000)return respond({error:"Slika je prevelika."},413);
 const parsed=JSON.parse(raw);
 const image=parsed.image;
 if(typeof image!=="string"||!/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(image))return respond({error:"Neispravan format slike."},400);
 const instructions=`Ti si profesor nemačkog jezika DE-MAX Tutin. Pogledaj SLIKU i koristi pravila baze DE-MAX A1 OPIS SLIKE u TAČNOM redosledu: 1 Opis osoba na slici, 2 Razgovor osoba, 3 Mesto osoba na slici, 4 Izgled osoba na slici, 5 Odeća osoba na slici, 6 Kosa osoba na slici, 7 Godine osoba na slici, 8 Detalji na slici, 9 Završne rečenice, 10 Moj opis slike. Na svakom koraku napiši najviše 1–3 kratke, smislene nemačke A1 rečenice i doslovan prevod na srpski latinicom. Baza primera (DE / SR) data je u korisničkom zahtevu kao bankExamples; KADA JE REČENICA IZ BAZE PRIKLADNA I ISTINITA za sliku, koristi njen identičan nemački tekst i prevod, bez izmišljanja detalja. Kada baza nema prikladnu rečenicu, sastavi novu. Za situaciju odaberi JEDAN broj (sceneNumber) iz liste DE-MAX dijaloga scenes u korisničkom zahtevu koji najbolje odgovara sadržaju slike; ako nema dobrog podudaranja, vrati null. Pripremi i posebno originalan KRATAK A1 dijalog učenika za istu situaciju: 10 ili 12 REPLIKA, naizmenično A i B, prvi je pozdrav, poslednji oproštaj, svaka replika {speaker,de,sr}, nemačke kratke A1 rečenice uz veran prevod, ne tvrdi da fotografija dokazuje izgovorene reči (to je vežba mogućeg razgovora). Za vizuelno neodređene detalje koristi vielleicht, ungefähr, ich denke, a za stvari koje se ne vide napiši kratko da nisu vidljive; ne pripisuj zdravstvene simptome samo na osnovu fotografije. Ako nema osoba, ne izmišljaj osobe. Izgled odeće, frizure i mesto uskladi sa slikom. Vrati JEDAN JSON objekat sa: steps: niz od TAČNO 10 {de,sr}, description: povezan A1 nemački tekst sastavljen iz odgovarajućih koraka 1–9 (oko 55–95 reči), sceneNumber: broj ili null, sceneName: kratak naziv, dialogue: niz od 10–12 {speaker,de,sr}. Bez dodatnog teksta.`;
 const scenes=Array.isArray(parsed.scenes)?parsed.scenes.slice(0,50).map(x=>({n:Number(x.n),sr:String(x.sr||"").slice(0,90),de:String(x.de||"").slice(0,90)})):[];
 const bankExamples=Array.isArray(parsed.bankExamples)?parsed.bankExamples.slice(0,130).map(x=>({de:String(x.de||"").slice(0,180),sr:String(x.sr||"").slice(0,180)})):[];
 const context=JSON.stringify({scenes,bankExamples});
 const api=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Authorization":"Bearer "+env.OPENAI_API_KEY,"Content-Type":"application/json"},body:JSON.stringify({model:env.OPENAI_MODEL||"gpt-4.1-mini",temperature:.35,response_format:{type:"json_object"},max_tokens:3300,messages:[{role:"system",content:instructions},{role:"user",content:[{type:"text",text:"Opiši ovu sliku po koracima i izaberi odgovarajući dijalog. Podaci iz postojećih DE-MAX baza: "+context},{type:"image_url",image_url:{url:image,detail:"high"}}]}]})});
 const data=await api.json();
 if(!api.ok)return respond({error:"AI servis: "+(data.error?.message||"greška "+api.status)},502);
 const result=JSON.parse(data.choices?.[0]?.message?.content||"{}");
 if(!Array.isArray(result.steps)||result.steps.length!==10||typeof result.description!=="string")return respond({error:"AI nije vratio očekivani format. Pokušaj ponovo."},502);
 return respond({steps:result.steps.slice(0,10),description:result.description,sceneNumber:Number.isInteger(Number(result.sceneNumber))&&Number(result.sceneNumber)>0?Number(result.sceneNumber):null,sceneName:String(result.sceneName||""),dialogue:Array.isArray(result.dialogue)?result.dialogue.slice(0,12):[]});
 }catch(e){return respond({error:"Greška u obradi zahteva: "+e.message},500)}
}};
