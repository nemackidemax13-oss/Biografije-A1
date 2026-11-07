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
 const instructions=`Ti si profesor nemačkog jezika na nivou A1 za DE-MAX Tutin. Isporuči detaljan, ali prirodan i GRAMATIČKI TAČAN opis STVARNO VIDLJIVE fotografije, u tačno 10 koraka. Obavezno se oslanjaj na DE-MAX bazu rečenica bankExamples koju dobijaš u korisničkom zahtevu. KADA IZ BAZE POSTOJI ODGOVARAJUĆA ISTINITA REČENICA, upotrebi njen identičan nemački tekst i odgovarajući srpski prevod. Ako baza nema korisnikovu obaveznu strukturu (npr. 'Auf diesem Bild...', procenu godina ili boju očiju), dozvoljeno je sastaviti samo KRATKU A1 rečenicu od korisnikovog šablona i činjenica koje se vide, nikada izmišljati činjenice, dodatne radnje, identitet, zanimanje, osećanja ili razgovor. Ne ponavljaj opšte neodređene tvrdnje. Redosled u steps[0..9] je obavezan, a opis na ekranu sastavlja se od steps[0..8].
1. OPIS OSOBA: počni tačno šablonom 'Auf diesem Bild sehe ich zwei Personen, einen Mann und eine Frau.' SAMO ako zaista vidiš upravo jednog muškarca i jednu ženu. Za drugačiji broj i sastav upotrebi gramatički ispravan A1 oblik 'Auf diesem Bild sehe ich ...': jednog muškarca, dve žene, jedno dete, muškarca i dete, više ljudi itd. NIKADA ne izmišljaj osobe. Dodaj šta osobe jasno rade, sede ili stoje.
2. MESTO: odmah posle broja osoba upotrebi 'Ich denke, die Personen sind ...' i na osnovu fotografije tačno mesto: im Park, im Supermarkt, in der Bäckerei, beim Arzt, in der Küche, im Restaurant, am Bahnhof, in der Schule, im Freien itd. Izaberi JEDNO konkretno najverovatnije mesto iz DE-MAX baze 'places', samo ako scena to podržava; za očiglednu lokaciju možeš 'Die Personen sind ...'. Za samo jednu osobu koristi 'Ich denke, der Mann / die Frau / das Kind ist ...', a ne množinu.
3. RAZGOVOR I RADNJA: kada vidiš osobe kako međusobno razgovaraju, koristi korisnikov obrazac 'Die Personen sprechen über etwas, vielleicht über ...' i jednu temu koja odgovara PRIKAZANOJ radnji i predmetima. Za razgovor biraj iz DE-MAX 'start' primera. Npr. ako je u pekari i gledaju hleb, '... vielleicht über das Brot'; ako gledaju auto, '... vielleicht über das Auto'. Obavezno reči 'vielleicht' ili 'ich denke' kad samo pretpostavljaš temu; fotografija ne snima zvuk. Ako osobe NE deluju kao da razgovaraju, ne tvrdi da razgovaraju, nego opiši šta zaista rade; ako je samo jedna osoba, ne izmišljaj sagovornika.
4. DETALJAN IZGLED SVAKOG: zasebno i dosledno opiši muškarca 'Der Mann ist ...', ženu 'Die Frau ist ...' i dete 'Das Kind ist ...' kada su na fotografiji. Uključi šta se VIDI: visok/nizak, krupniji/vitak, lice (Gesicht), izraz lica, oči SAMO ako se boja i izgled zaista razaznaju, bradu (Bart), brkove (Schnurrbart), naočare (Brille), ručni sat (Armbanduhr) SAMO ako se vidi. Ne navodi da nema bradu, sat ili naočare ako ti detalji nisu dovoljno vidljivi. Izgled opisuj bez neprimerenih procena i bez nagađanja o identitetu.
5. ODEĆA: za svakog posebno 'Der Mann trägt ...', 'Die Frau trägt ...', 'Das Kind trägt ...'. Navedite tačne vidljive odevne predmete i BOJE (jakna, majica, košulja, pantalone, haljina, suknja, cipele, obuća, radno odelo). Za dve osobe nemoj pomešati odeću. Upotrebi tačan rod, padež i pridevske nastavke: 'Der Mann trägt eine blaue Jacke.' / 'Die Frau trägt ein rotes Kleid.'. Izostavi nevidljivu odeću. Ako su prisutna deca, opiši njihovu odeću na isti način.
6. KOSA: posebno za svaku vidljivu osobu: 'Der Mann hat kurze schwarze Haare.', 'Die Frau hat lange blonde Haare.', 'Das Kind hat lockige braune Haare.' samo kad je uočljivo. Kosa može biti kratka, duga, ravna, kovrdžava, smeđa, crna, plava, seda; ćelavost samo ako se vidi. Ne mešaj kosu muškarca, žene i deteta.
7. GODINE: za SVAKU prisutnu osobu koristi procenu, nikad preciznu tvrdnju. DVE dozvoljene konstrukcije: 'Ich denke, der Mann ist ungefähr 35 Jahre alt.' ILI 'Der Mann ist ungefähr 35 Jahre alt.'; analogno 'Ich denke, die Frau ist ungefähr 30 Jahre alt.' ILI 'Die Frau ist ungefähr 30 Jahre alt.'; 'Ich denke, das Kind ist ungefähr 7 Jahre alt.' ILI 'Das Kind ist ungefähr 7 Jahre alt.'. Za svaku osobu upotrebi SAMO jednu od dve konstrukcije, ne obe. Broj prilagodi približno izgledu, bez lažne sigurnosti. Ako se uopšte ne može proceniti, preskoči tu osobu.
8. VIDljIVI DETALJI I POZADINA: reci šta se još vidi iza/ispred osoba (im Hintergrund, links, rechts), nameštaj, prodavnica, cveće, kola, predmeti u rukama, životinje. Ako su napolju i fotografija jasno prikazuje, reci kakvo je vreme 'Das Wetter ist sonnig.' ili 'Es regnet.' i eventualno godišnje doba SAMO kad postoje očigledni znaci; inače izostavi godišnje doba. Ako su unutra, opiši prostoriju, boje, stolove, stolice, prozore i druge vidljive predmete. Za osmeh koristi 'Der Mann lächelt.' / 'Die Frau lächelt.' i kada su obe osobe nasmejane 'Beide Personen lächeln.'; 'Ich denke, der Mann lacht.' / 'Ich denke, die Frau lacht.' i 'Beide Personen lachen.' koristi samo kad je jasno da se zapravo smeju, a ne samo osmehuju. Isto pravilo primeni na dete 'Das Kind lächelt.' ili 'Das Kind lacht.'.
9. ZAVRŠNE REČENICE: koristi odgovarajuće završne rečenice iz DE-MAX 'closing' baze vezane za mesto i situaciju. Ako ciljevi ljudi nisu sigurni, samo 'Ich denke, ...' ili 'Vielleicht ...'. Završetak uvek 'Das war meine Bildbeschreibung.' i nemoj gomilati nepovezane završne rečenice.
10. MOJ OPIS SLIKE: vrati sažet pregled istih činjenica, bez novih detalja. Aplikacija zapravo automatski sastavlja kompletan opis iz steps[0..8], zato korak 10 ne sme sadržati drugačije tvrdnje.
Opšta pravila: NEMAČKI A1, kratke rečenice, logična i gramatička pravilnost, dovoljno detalja za prisutne osobe, ali nikakve izmišljene informacije. Koristi stvarnu bazu pre slobodnog generisanja. Ne koristi bezrazložne pretpostavke o bolesti, profesiji, porodičnom odnosu, godišnjem dobu, razgovoru ili godinama kao sigurnim činjenicama. Ako su samo predmeti/životinje, prilagodi opis njima bez izmišljanja ljudi. U svakom koraku vrati de i prevod sr (srpska latinica) u istoj temi; zaseban precizan prevod se potom priprema u drugom prolazu.
DIJALOZI: Na osnovu fotografije izaberi sceneNumber iz ponuđenih scena, ili null ako nema podudaranja. Koristi originalne DE-MAX dijaloge iz polja scenes[n].dialog, extra i roles. Neka dijalog ima 10–12 kratkih, naizmeničnih replika A/B, počinje pozdravom i završava se oproštajem. Prioritet su originalne replike i njihovi prevodi iz baze, a nove replike samo kad su nužne za logičnu vezu. Dijalog predstavlja MOGUĆU vežbu u toj situaciji, ne razgovor koji se sigurno čuje na fotografiji.
Vrati samo jedan valjan JSON objekat sa keys steps (niz tačno 10 objekata {de,sr}), description (spojen nemački tekst zasnovan na steps 1–9), sceneNumber (broj ili null), sceneName, dialogue (10–12 objekata {speaker,de,sr}). Bez markdown-a, bez dodatnog objašnjenja.`;
 // Original DE-MAX dialogue bank from the student app, not invented examples.
 const pair=x=>({de:String(x?.de||"").slice(0,150),sr:String(x?.sr||"").slice(0,170)});
 const scenes=Array.isArray(parsed.scenes)?parsed.scenes.slice(0,50).map(x=>({
  n:Number(x.n),sr:String(x.sr||"").slice(0,90),de:String(x.de||"").slice(0,90),roles:String(x.roles||"").slice(0,100),
  dialog:Array.isArray(x.dialog)?x.dialog.slice(0,6).map(pair):[],
  extra:Array.isArray(x.extra)?x.extra.slice(0,3).map(pair):[]
 })):[];
 const bankExamples=Array.isArray(parsed.bankExamples)?parsed.bankExamples.slice(0,180).map(x=>({
  cat:String(x.cat||"").slice(0,25),de:String(x.de||"").slice(0,180),sr:String(x.sr||"").slice(0,180)
 })):[];
 const context=JSON.stringify({scenes,bankExamples});
 const api=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Authorization":"Bearer "+env.OPENAI_API_KEY,"Content-Type":"application/json"},body:JSON.stringify({model:env.OPENAI_MODEL||"gpt-4.1-mini",temperature:.35,response_format:{type:"json_object"},max_tokens:5600,messages:[{role:"system",content:instructions},{role:"user",content:[{type:"text",text:"Opiši ovu sliku po koracima i izaberi odgovarajući dijalog. Podaci iz postojećih DE-MAX baza: "+context},{type:"image_url",image_url:{url:image,detail:"high"}}]}]})});
 const data=await api.json();
 if(!api.ok)return respond({error:"AI servis: "+(data.error?.message||"greška "+api.status)},502);
 const result=JSON.parse(data.choices?.[0]?.message?.content||"{}");
 if(!Array.isArray(result.steps)||result.steps.length!==10||typeof result.description!=="string")return respond({error:"AI nije vratio očekivani format opisa. Pokušaj ponovo."},502);

 // Always translate the FINAL German sentences, rather than trusting a loosely
 // aligned paragraph translation from the picture-description model.
 const splitGerman=value=>{
  const s=String(value||"").trim();
  if(!s)return [];
  return s.split(/(?<=[.!?])\s+(?=[A-ZÄÖÜ„"0-9])/u).map(x=>x.trim()).filter(Boolean);
 };
 const rawSteps=result.steps.slice(0,10);
 const rawDialogue=Array.isArray(result.dialogue)?result.dialogue.slice(0,12):[];
 const germanSteps=rawSteps.map((s,i)=>({
  index:i,lines:splitGerman(s.de).map((de,j)=>({key:"s"+i+"-"+j,de}))
 }));
 const germanDialogue=rawDialogue.map((s,i)=>({key:"d"+i,de:String(s.de||"").trim()})).filter(x=>x.de);
 const originals=[...germanSteps.flatMap(x=>x.lines),...germanDialogue];
 if(!originals.length)return respond({error:"AI nije napisao nemačke rečenice za prevod."},502);

 const translateInstructions="Ti si iskusan profesionalni prevodilac nemački → srpski (latinica). Ovo je drugi, nezavisan prolaz za tačnost prevoda DE-MAX A1. PREVEDI ISKLJUČIVO NEMAČKI TEKST IZ SVAKOG POLJA de, doslovno i gramatički prirodno, NA SRPSKI LATINICOM. Ne oslanjaj se na pretpostavke o slici, nemoj dodavati ili izostavljati imena osoba, brojeve, boje, odeću, mesta, negaciju ili radnje. Naročito razlikuj Mann=muškarac/čovek, Frau=žena, Kind=dete, trägt=nosi, hat=ima, ungefähr=otprilike, vielleicht=možda, ich denke=mislim. Svaku ulaznu rečenicu prevedi JEDNOM i sačuvaj identični key. Ne spajaj, ne menjaj redosled, ne prepisuj nemački u prevod. Odgovori ISKLJUČIVO validnim JSON objektom sa poljem translations: niz objekata {key,sr}. Jedan prevod za svaki ulazni key, ni manje ni više.";
 const translationResponse=await fetch("https://api.openai.com/v1/chat/completions",{
  method:"POST",
  headers:{"Authorization":"Bearer "+env.OPENAI_API_KEY,"Content-Type":"application/json"},
  body:JSON.stringify({
   model:env.OPENAI_TRANSLATION_MODEL||env.OPENAI_MODEL||"gpt-4.1-mini",
   temperature:0,
   response_format:{type:"json_object"},
   max_tokens:4500,
   messages:[
    {role:"system",content:translateInstructions},
    {role:"user",content:JSON.stringify({sentences:originals})}
   ]
  })
 });
 const translationData=await translationResponse.json();
 if(!translationResponse.ok)return respond({error:"AI prevod nije uspeo: "+(translationData.error?.message||translationResponse.status)},502);
 let translationResult;
 try{translationResult=JSON.parse(translationData.choices?.[0]?.message?.content||"{}")}
 catch(_){return respond({error:"Prevod nije vraćen kao ispravan JSON. Pokušaj ponovo."},502)}
 const translations=Array.isArray(translationResult.translations)?translationResult.translations:[];
 const translationMap=new Map(translations.map(x=>[String(x.key||""),String(x.sr||"").trim()]));
 if(translations.length!==originals.length||translationMap.size!==originals.length||
    originals.some(x=>!translationMap.get(x.key))){
  return respond({error:"Prevod nije usklađen sa svim nemačkim rečenicama. Pokušaj ponovo."},502);
 }
 const translatedSteps=germanSteps.map((step,i)=>{
  const lines=step.lines.map(line=>({de:line.de,sr:translationMap.get(line.key)}));
  return {de:lines.map(x=>x.de).join(" "),sr:lines.map(x=>x.sr).join(" "),lines};
 });
 const translatedDialogue=rawDialogue.map((line,i)=>({
  speaker:String(line.speaker||(i%2?"B":"A")),
  de:String(line.de||"").trim(),
  sr:translationMap.get("d"+i)||String(line.sr||"").trim()
 }));
 return respond({
  steps:translatedSteps,
  description:translatedSteps.slice(0,9).flatMap(x=>x.lines.map(l=>l.de)).join(" "),
  sceneNumber:Number.isInteger(Number(result.sceneNumber))&&Number(result.sceneNumber)>0?Number(result.sceneNumber):null,
  sceneName:String(result.sceneName||""),
  dialogue:translatedDialogue
 });

 }catch(e){return respond({error:"Greška u obradi zahteva: "+e.message},500)}
}};
