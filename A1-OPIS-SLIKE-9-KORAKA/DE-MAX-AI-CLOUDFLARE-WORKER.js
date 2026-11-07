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
 const instructions=`Ti si profesor nemačkog A1 za DE-MAX Tutin. Analiziraj KONKRETNU fotografiju pedantno i napiši precizan, bogat, ali početnički jednostavan opis. Koristi priložene postojeće DE-MAX rečenice bankExamples kao rečnik primera: ako odgovaraju vidljivom prizoru, PREUZMI doslovno nemačku rečenicu i njen srpski prevod; u suprotnom pravilno sastavi A1 rečenicu. Obavezno razlikuj SVE vidljive ljude pojedinačno: der Mann, die Frau, das Kind, više osoba, dečak/devojčica samo ako je jasno; ne izmišljaj nikoga. Detaljno pokrij ovih tačno 10 koraka istim redom: 1. OPIS OSOBA: koliko osoba, muškarac/žena/dete, ko stoji ili sedi i gde; 2. RAZGOVOR I RADNJA: šta osoba radi i šta je predmet razgovora samo kao pretpostavka ako to nije vidljivo, koristi 'Vielleicht sprechen sie über ...'; 3. MESTO I PROSTOR: imenuj lokaciju, enterijer ili eksterijer, neposrednu okolinu, nameštaj, predmete, ispred/iza/levo/desno kada se vide; 4. IZGLED: za svaku osobu ponaosob opisati visinu/građu i uočljive osobine, samo ono što se vidi; 5. ODEĆA: za svakog posebno artikli i precizne BOJE, npr. Der Mann trägt eine blaue Jacke. Die Frau trägt ein rotes Kleid. Das Kind trägt weiße Schuhe. Ako se detalj ne vidi, izostavi ga; 6. KOSA: za svakog posebno dužina, boja, ravna/kovrdžava, eventualno pletenica ili podignuta kosa, samo kad je vidljivo; 7. GODINE: za svaku osobu približna starost, eksplicitno 'ungefähr ... Jahre alt', ne tvrdi tačan uzrast; 8. DETALJI: izrazi lica, naočare, nakit, torba, sat, obuća, predmeti u rukama, životinje, okruženje koji su vidljivi; 9. ZAVRŠNE REČENICE: 2–3 smislene jednostavne rečenice vezane za scenu, moguć cilj osobe uz 'Ich denke ...' i završetak 'Das war meine Bildbeschreibung.'; 10. MOJ OPIS SLIKE: prirodan povezan rezime istih detalja. Za korake 1–9 koristi 2–4 kratke rečenice po potrebi, više tamo gde ima više osoba, ali bez dupliranja i bez dugih složenih rečenica. Ne ponavljaj generičko 'Die Personen sind sympathisch' bez očiglednog osnova. NIKADA ne tvrdi nevidljiv dijalog, bolest ili profesiju kao činjenicu. Za osobu koju nije moguće dovoljno videti izostavi taj detalj. Ako nema ljudi prilagodi korake predmetima i prostoru, ne izmišljaj muškarca, ženu ili dete. U svakom koraku vrati tačan srpski prevod na latinici za sve nemačke rečenice. Uči A1 gramatiku, rodove, padeže, pridevske nastavke, boje, opis mesta, 'er/sie/es'. Obavezno odaberi sceneNumber među priloženim scenes koji najbolje odgovara vizuelnoj situaciji, ili null kada nema podudaranja. Pripremi dijalog od 10–12 KRATKIH A1 replika naizmenično A i B, od pozdrava do pozdrava za rastanak, sa prevodom, primer mogućeg razgovora a ne činjenični razgovor sa slike. Vrati jedino JSON objekat {steps:[tačno 10 objekata {de,sr}],description:"povezan nemački A1 opis koji sadrži sve ključne vidljive detalje",sceneNumber:broj ili null,sceneName:"naziv",dialogue:[{speaker:"A" ili "B",de:"...",sr:"..."}]}. Bez markdown-a.`;
 const scenes=Array.isArray(parsed.scenes)?parsed.scenes.slice(0,50).map(x=>({n:Number(x.n),sr:String(x.sr||"").slice(0,90),de:String(x.de||"").slice(0,90)})):[];
 const bankExamples=Array.isArray(parsed.bankExamples)?parsed.bankExamples.slice(0,180).map(x=>({de:String(x.de||"").slice(0,180),sr:String(x.sr||"").slice(0,180)})):[];
 const context=JSON.stringify({scenes,bankExamples});
 const api=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Authorization":"Bearer "+env.OPENAI_API_KEY,"Content-Type":"application/json"},body:JSON.stringify({model:env.OPENAI_MODEL||"gpt-4.1-mini",temperature:.35,response_format:{type:"json_object"},max_tokens:4200,messages:[{role:"system",content:instructions},{role:"user",content:[{type:"text",text:"Opiši ovu sliku po koracima i izaberi odgovarajući dijalog. Podaci iz postojećih DE-MAX baza: "+context},{type:"image_url",image_url:{url:image,detail:"high"}}]}]})});
 const data=await api.json();
 if(!api.ok)return respond({error:"AI servis: "+(data.error?.message||"greška "+api.status)},502);
 const result=JSON.parse(data.choices?.[0]?.message?.content||"{}");
 if(!Array.isArray(result.steps)||result.steps.length!==10||typeof result.description!=="string")return respond({error:"AI nije vratio očekivani format. Pokušaj ponovo."},502);
 return respond({steps:result.steps.slice(0,10),description:result.description,sceneNumber:Number.isInteger(Number(result.sceneNumber))&&Number(result.sceneNumber)>0?Number(result.sceneNumber):null,sceneName:String(result.sceneName||""),dialogue:Array.isArray(result.dialogue)?result.dialogue.slice(0,12):[]});
 }catch(e){return respond({error:"Greška u obradi zahteva: "+e.message},500)}
}};
