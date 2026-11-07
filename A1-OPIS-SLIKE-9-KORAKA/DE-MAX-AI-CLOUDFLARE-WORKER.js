// DE-MAX AI opis slike — Cloudflare Worker
// Secrets (Cloudflare Worker > Settings > Variables and Secrets):
// OPENAI_API_KEY = your private API key (SECRET; never add it to GitHub)
// Optionally set ALLOWED_ORIGIN = https://nemackidemax13-oss.github.io
const HEADERS={"Content-Type":"application/json","Cache-Control":"no-store"};
export default {async fetch(request,env){
 const origin=request.headers.get("Origin")||"";
 const allowed=env.ALLOWED_ORIGIN||"https://nemackidemax13-oss.github.io";
 const cors={"Access-Control-Allow-Origin":allowed,"Access-Control-Allow-Methods":"POST, OPTIONS","Access-Control-Allow-Headers":"Content-Type","Vary":"Origin"};
 if(request.method==="OPTIONS")return new Response(null,{status:204,headers:cors});
 const respond=(body,status=200)=>new Response(JSON.stringify(body),{status,headers:{...HEADERS,...cors}});
 if(origin && origin!==allowed)return respond({error:"Origin nije dozvoljen."},403);
 if(request.method!=="POST")return respond({error:"Samo POST zahtev."},405);
 if(!env.OPENAI_API_KEY)return respond({error:"OPENAI_API_KEY nije podešen na Worker-u."},503);
 try{
 const raw=await request.text();if(raw.length>5500000)return respond({error:"Slika je prevelika."},413);
 const parsed=JSON.parse(raw);
 const image=parsed.image;
 if(typeof image!=="string"||!/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(image))return respond({error:"Neispravan format slike."},400);
 const instructions=`Ti si stručni profesor nemačkog A1 nivoa za DE-MAX. Analiziraj fotografiju i sastavi KRATAK, PRIRODAN i GRAMATIČKI TAČAN opis na nemačkom po 10 koraka: 1. Opis osoba, 2. Razgovor/radnja, 3. Mesto, 4. Izgled, 5. Odeća, 6. Kosa, 7. Godine, 8. Ostali detalji, 9. Završne rečenice, 10. Moj opis. Vrati JSON sa steps kao niz tačno 10 objekata {de,sr} i description kao jedan povezan nemački A1 opis (oko 60-100 reči). U svakom koraku 1-2 jednostavne nemačke rečenice i njihove verne prevode na srpski latinicom. U delu 10 uključi sažet tekst. Ne izmišljaj ono što ne vidiš: za nejasne detalje koristi "Ich denke, ..." ili "Vielleicht ...", za nepoznate godine "ungefähr". Ako na slici nema ljudi, to jasno reci i prilagodi ostale korake situaciji; ne izmišljaj osobe. Koristi ispravan rod, članove, padeže i prirodnu A1 gramatiku. Bez dodatnog teksta van JSON-a.`;
 const api=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Authorization":"Bearer "+env.OPENAI_API_KEY,"Content-Type":"application/json"},body:JSON.stringify({model:env.OPENAI_MODEL||"gpt-4.1-mini",temperature:.35,response_format:{type:"json_object"},max_tokens:1800,messages:[{role:"system",content:instructions},{role:"user",content:[{type:"text",text:"Opiši ovu sliku prema šablonu."},{type:"image_url",image_url:{url:image,detail:"high"}}]}]})});
 const data=await api.json();
 if(!api.ok)return respond({error:"AI servis: "+(data.error?.message||"greška "+api.status)},502);
 const result=JSON.parse(data.choices?.[0]?.message?.content||"{}");
 if(!Array.isArray(result.steps)||typeof result.description!=="string")return respond({error:"AI nije vratio očekivani format. Pokušaj ponovo."},502);
 return respond({steps:result.steps.slice(0,10),description:result.description});
 }catch(e){return respond({error:"Greška u obradi zahteva: "+e.message},500)}
}};
