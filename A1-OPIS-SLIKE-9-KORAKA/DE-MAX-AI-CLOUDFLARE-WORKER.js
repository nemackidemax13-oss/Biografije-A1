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
 if(request.method==="GET"&&new URL(request.url).searchParams.get("check")==="1")return respond({ok:true,version:"20261107-detaljan-izgled-v37",mode:"DEMAX_STRICT_TEMPLATES",introFix:true});
 if(request.method!=="POST")return respond({error:"Samo POST zahtev."},405);
 if(!env.OPENAI_API_KEY)return respond({error:"OPENAI_API_KEY nije podešen na Worker-u."},503);
 try{
 const raw=await request.text();if(raw.length>5500000)return respond({error:"Slika je prevelika."},413);
 const parsed=JSON.parse(raw);
 const image=parsed.image;
 if(typeof image!=="string"||!/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(image))return respond({error:"Neispravan format slike."},400);
 const instructions=`Ti si stručni DE-MAX A1 sistem za OPIS STVARNE FOTOGRAFIJE. Tvoj jedini cilj je da pravilno izabereš već postojeće NEMAČKE REČENICE iz date DE-MAX bankExamples baze ili strogo dozvoljenih A1 ŠABLONA navedenih dole. Ne smeš slobodno izmišljati nove rečenice niti izmišljati objekte, odeću, boje, radnje, godine, razgovor, mesto ili ljude kojih nema na slici. Worker će SVAKU rečenicu proveriti i odbaciti sve što nije iz banke ili dozvoljenog šablona. Ne piši dugačke složene rečenice; samo jednu proverljivu informaciju po rečenici. NIKADA ne dodaj detalj samo da bi opis bio duži. Ne mešaj osobine muškarca, žene i deteta.

VRATI steps niz od TAČNO 10 objekata {de:"nemačke rečenice tog koraka",sr:""}. Polje de sadrži jednu ili više celih kratkih nemačkih rečenica, sa tačkom i razmakom između njih. Ako vidljivih činjenica nema, de može biti prazno (izuzev prvog i završnog koraka). Sve iz steps 1–9 predstavljaju povezani opis, redosled je presudan. Korak 10 je samo pregled, server ga automatski pravi. Za svaku banku koristi DOSLOVNE nemačke rečenice, bez promene reči, reda i gramatičkog oblika. Polje sr može biti prazno jer server srpski prevod UZIMA DIREKTNO IZ BAZE I ODOBRENIH ŠABLONA.

1. OPIS OSOBA: OBAVEZNO napiši jednu POTPUNU, zasebnu prvu rečenicu tačno iz ponuđenih 'Auf diesem Bild sehe ich ...' primera, bez menjanja teksta. Ako koristiš izraz iz baze 'Auf dem Bild sehe ich ...', server će ga sam prevesti u 'Auf diesem Bild sehe ich ...'. ZAISTA prebroj vidljive osobe. Ako su tačno muškarac i žena, obavezno počni 'Auf diesem Bild sehe ich zwei Personen, einen Mann und eine Frau.'. Ako je drugačije, počni odgovarajućim šablonom 'Auf diesem Bild sehe ich ...' npr. 'Auf diesem Bild sehe ich einen Mann.' / 'Auf diesem Bild sehe ich eine Frau.' / 'Auf diesem Bild sehe ich ein Kind.' / 'Auf diesem Bild sehe ich zwei Männer.' / 'Auf diesem Bild sehe ich zwei Frauen.' / 'Auf diesem Bild sehe ich zwei Kinder.' / 'Auf diesem Bild sehe ich einen Mann und ein Kind.' / 'Auf diesem Bild sehe ich eine Frau und ein Kind.' / 'Auf diesem Bild sehe ich einen Mann, eine Frau und ein Kind.' / 'Auf diesem Bild sehe ich mehrere Personen.'. Iz baze ubaci pozicije i šta se vidi kada odgovara.
2. MESTO: odmah posle uvoda: 'Ich denke, die Personen sind ...' ili sigurno 'Die Personen sind ...' koristeći isključivo TAČNU rečenicu iz DE-MAX kategorije places (mesto mora odgovarati slici!). Za jednu osobu koristi odobreni singular 'Ich denke, der Mann ist ...' / 'Ich denke, die Frau ist ...' / 'Ich denke, das Kind ist ...' prema istom mestu.
3. RAZGOVOR I RADNJA: samo ako izgleda da osobe pričaju, iz DE-MAX banke izaberi tačno 'Die Personen sprechen über etwas, vielleicht über ...' sa temom koja prati vidljive predmete/radnju. Razgovor je hipoteza, ne činjenica. Ako ne pričaju, opisuj njihove vidljive radnje iz baze bez te fraze. Ne pretpostavljaj ko je lekar/prodavac bez očiglednih oznaka.
4. IZGLED OBE OSOBE DETALJNO: ovaj korak je centralni deo opisa! Ako na slici ima muškarac i žena, obavezno najpre opiši muškarca i ZATIM ženu, svakoga POSEBNO, nikada samo muškarca ili samo ženu kada su osobine oboje dovoljno vidljive. Počni 'Der Mann ist ...' pa navedi 3–6 različitih, jasnih detalja muškarca: stas, krupnoća/građa, mlad/stariji izgled, oblik lica, oči ako se dobro vide, naočare, brkove, bradu, mimiku i položaj levo/desno. Zatim 'Die Frau ist ...' i na isti način 3–6 posebnih, vidljivih detalja žene: stas, građa, lice, oči, naočare, izraz lica, položaj. Ako postoji dete, isto pravilo i za 'Das Kind ist ...'. Kad osobina nije vidljiva, jednostavno je preskoči i NE dopunjavaj izmišljenom rečenicom. Ne pripisuj bradu/brkove ženi ili detetu. Iz bankExamples uzmi 'Der Mann ist groß.', 'Die Frau ist klein.', 'Der Mann hat einen Bart.', 'Die Frau sieht glücklich aus.' samo kada slika to zaista podržava. Iz dozvoljenih šablona koristi 'Der Mann hat blaue Augen.', 'Die Frau hat ein rundes Gesicht.', 'Der Mann trägt eine Brille.', 'Der Mann hat einen kurzen Bart.' SAMO ako se jasno razaznaje. Završni tekst neka ima pun opis OBE osobe pre sledećeg koraka. ODEĆU, KOSU I GODINE nemoj unositi u korak 4 jer za to postoje naredni posebni koraci.
5. ODEĆA: odmah posle izgleda, i PRE kose i godina, opiši odevne predmete za OBE osobe: prvo sve jasno vidljive komade muškarca, potom žene, zatim deteta ako postoji. Ne preskači jednu osobu kada je njena odeća vidljiva. Koristi po JEDAN artikl po nemačkoj rečenici, u stilu 'Der Mann trägt eine blaue Jacke.', 'Die Frau trägt ein rotes Kleid.', 'Das Kind trägt schwarze Schuhe.'. Dozvoljene su samo te gramatičke konstrukcije i odevni predmeti: Jacke, Hose, Jeans, Bluse, Kleid, T-Shirt, Hemd, Pullover, Mantel, Rock, Anzug, Schuhe, Stiefel, Turnschuhe, Sandalen, Mütze, Schal, Hut, Arbeitskleidung, Schürze, Handschuhe, Brille, Kittel, Sakko, Uniform. Boje: schwarz, weiß, blau, rot, grün, gelb, grau, braun, rosa, beige (deklinira se kao beig-), orangefarben (narandžasta), lila. Navedi boju ako se VIDI, a inače samo odevni predmet.
6. KOSA: tek NAKON detaljnog izgleda i odeće opiši kosu SVAKOG ko ima vidljivu kosu: prvo muškarca, pa ženu, pa dete. Za svakog upotrebi 'Der Mann hat kurze schwarze Haare.', 'Die Frau hat lange blonde Haare.', 'Das Kind hat lockige braune Haare.' itd. Obrati pažnju na boju schwarz, braun, blond, grau, weiß, rot, dunkelbraun, hellbraun, dužinu kurze / lange / mittellange i izgled lockige / glatte. Ako se dužina ne vidi, koristi pojedinačnu dozvoljenu rečenicu samo o boji. Nikad ne pripisuj kosu ako je prekrivena.
7. GODINE: tek POSLE kose, u odvojenom koraku, navedi po jednu približnu starost svake prisutne osobe, prvo muškarca, pa žene, pa deteta: 'Ich denke, der Mann ist ungefähr 35 Jahre alt.' ili 'Der Mann ist ungefähr 35 Jahre alt.', zatim 'Ich denke, die Frau ist ungefähr 30 Jahre alt.' i 'Ich denke, das Kind ist ungefähr 7 Jahre alt.'; broj promeni prema približnom izgledu. Ne predstavljaj procenu kao činjenicu i ne koristi dve različite godine za istu osobu.
8. DETALJI I POZADINA: tek POSLE kose i godina dodaj što više dodatnih VIDLJIVIH DETALJA (ručni sat, minđuše, nakit, torba, predmeti u rukama, geste, vidljivi osmesi, sto, stolice, police, drveće, vozila, prozori, boja prostora) i ono što je levo/desno/iza/u prvom planu. Iz bankExamples (extra, closing, start) biraj isključivo detalje koji su na konkretnoj fotografiji. Ako su napolju, vreme i godišnje doba navedi samo kada su jasni znaci, a ako su unutra, opiši prostor. Ako se vidi osmeh 'Der Mann lächelt.', 'Die Frau lächelt.', 'Das Kind lächelt.' ili 'Beide Personen lächeln.'. Ako je očigledan smeh 'Ich denke, der Mann lacht.', 'Ich denke, die Frau lacht.', 'Ich denke, das Kind lacht.' ili 'Beide Personen lachen.'. Ne tumači osmeh kao siguran smeh.
9. ZAVRŠNE REČENICE: TEK NA KRAJU, posle svih osoba, kose, godina i detalja/pozadine, dodaj nekoliko smislenih rečenica iz DE-MAX closing baze koje odgovaraju baš toj slici i kao poslednju obavezno 'Das war meine Bildbeschreibung.'. Ne ubacuj novi opis lica, odeće, kose ili godina u završne rečenice.
10. MOJ OPIS: može ostati prazan jer se automatski gradi iz proverenih prvih devet koraka.

Opis neka bude vrlo detaljan ako se detalji stvarno vide: cilj je oko 25–40 kratkih A1 rečenica za jasnu sliku sa dve osobe i dovoljno detalja, obavezno prikaz obe osobe u koracima 4–7 kada se detalji vide, više ako je više vidljivih detalja, ali nikad ne dodavati izmišljene činjenice zbog brojke. U SVAKOM koraku samo odobrene rečenice iz bankExamples ili eksplicitnih A1 obrazaca. Bez dugih kombinovanih rečenica. Izaberi sceneNumber iz liste scenes na osnovu slike (ili null ako nijedna situacija nije prikladna); DE-MAX dijalog server preuzima direktno iz originalne scene i zato NIKAKAV izmišljeni dijalog ne treba pisati.

Odgovori ISKLJUČIVO ispravnim JSON objektom {steps:[tačno 10 objekata {de,sr}],description:"",sceneNumber:broj ili null,sceneName:""}. Ne uključuj dialogue.`;
 // Original DE-MAX dialogue bank from the student app, not invented examples.
 const pair=x=>({de:String(x?.de||"").slice(0,150),sr:String(x?.sr||"").slice(0,170)});
 const scenes=Array.isArray(parsed.scenes)?parsed.scenes.slice(0,50).map(x=>({n:Number(x.n),sr:String(x.sr||"").slice(0,90),de:String(x.de||"").slice(0,90),roles:String(x.roles||"").slice(0,100)})):[];
 const bankExamples=Array.isArray(parsed.bankExamples)?parsed.bankExamples.slice(0,650).map(x=>({
  cat:String(x.cat||"").slice(0,25),de:String(x.de||"").slice(0,180),sr:String(x.sr||"").slice(0,180)
 })):[];
 const context=JSON.stringify({scenes,bankExamples});
 const api=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Authorization":"Bearer "+env.OPENAI_API_KEY,"Content-Type":"application/json"},body:JSON.stringify({model:env.OPENAI_MODEL||"gpt-4.1-mini",temperature:.12,response_format:{type:"json_object"},max_tokens:5000,messages:[{role:"system",content:instructions},{role:"user",content:[{type:"text",text:"Opiši ovu sliku po koracima i izaberi odgovarajući dijalog. Podaci iz postojećih DE-MAX baza: "+context},{type:"image_url",image_url:{url:image,detail:"high"}}]}]})});
 const data=await api.json();
 if(!api.ok)return respond({error:"AI servis: "+(data.error?.message||"greška "+api.status)},502);

 const result=JSON.parse(data.choices?.[0]?.message?.content||"{}");
 if(!Array.isArray(result.steps)||result.steps.length!==10)
  return respond({error:"AI nije vratio svih 10 koraka. Pokušaj ponovo."},502);

 // Trusted DE-MAX picture bank + fixed A1 language templates ONLY.
 // No unchecked AI-written sentence is ever returned to the learner.
 const allowed=new Map();
 const norm=s=>String(s||"").normalize("NFC").replace(/\s+/g," ").trim();
 const put=(de,sr)=>{const key=norm(de);if(key&&sr&&!allowed.has(key))allowed.set(key,{de:key,sr:String(sr).trim()})};
 for(const x of bankExamples)put(x.de,x.sr);

 const actors=[
  {de:"Der Mann",lo:"der Mann",sr:"Muškarac",srGen:"muškarac"},
  {de:"Die Frau",lo:"die Frau",sr:"Žena",srGen:"žena"},
  {de:"Das Kind",lo:"das Kind",sr:"Dete",srGen:"dete"}
 ];
 const intro=[
  ["Auf diesem Bild sehe ich einen Mann.","Na ovoj slici vidim jednog muškarca."],
  ["Auf diesem Bild sehe ich eine Frau.","Na ovoj slici vidim jednu ženu."],
  ["Auf diesem Bild sehe ich ein Kind.","Na ovoj slici vidim jedno dete."],
  ["Auf diesem Bild sehe ich zwei Personen, einen Mann und eine Frau.","Na ovoj slici vidim dve osobe, jednog muškarca i jednu ženu."],
  ["Auf diesem Bild sehe ich zwei Männer.","Na ovoj slici vidim dva muškarca."],
  ["Auf diesem Bild sehe ich zwei Frauen.","Na ovoj slici vidim dve žene."],
  ["Auf diesem Bild sehe ich zwei Kinder.","Na ovoj slici vidim dvoje dece."],
  ["Auf diesem Bild sehe ich einen Mann und ein Kind.","Na ovoj slici vidim muškarca i dete."],
  ["Auf diesem Bild sehe ich eine Frau und ein Kind.","Na ovoj slici vidim ženu i dete."],
  ["Auf diesem Bild sehe ich einen Mann, eine Frau und ein Kind.","Na ovoj slici vidim muškarca, ženu i dete."],
  ["Auf diesem Bild sehe ich drei Personen.","Na ovoj slici vidim tri osobe."],
  ["Auf diesem Bild sehe ich zwei Personen.","Na ovoj slici vidim dve osobe."],
  ["Auf diesem Bild sehe ich vier Personen.","Na ovoj slici vidim četiri osobe."],
  ["Auf diesem Bild sehe ich mehrere Personen.","Na ovoj slici vidim više osoba."],
  ["Auf diesem Bild sehe ich keine Personen.","Na ovoj slici ne vidim osobe."]
 ];
 intro.forEach(p=>put(p[0],p[1]));
 put("Auf diesem Bild sehe ich eine Szene.","Na ovoj slici vidim jedan prizor.");
 const allowedIntros=new Set(intro.map(x=>x[0]));
 // Colors with their correctly declined Serbian accusative adjective forms.
 const colors=[
  {de:"schwarz",m:"crni",f:"crnu",n:"crno",p:"crne"},
  {de:"weiß",m:"beli",f:"belu",n:"belo",p:"bele"},
  {de:"blau",m:"plavi",f:"plavu",n:"plavo",p:"plave"},
  {de:"rot",m:"crveni",f:"crvenu",n:"crveno",p:"crvene"},
  {de:"grün",m:"zeleni",f:"zelenu",n:"zeleno",p:"zelene"},
  {de:"gelb",m:"žuti",f:"žutu",n:"žuto",p:"žute"},
  {de:"grau",m:"sivi",f:"sivu",n:"sivo",p:"sive"},
  {de:"braun",m:"smeđi",f:"smeđu",n:"smeđe",p:"smeđe"},
  {de:"rosa",m:"roze",f:"roze",n:"roze",p:"roze",invariable:true},
  {de:"beig",m:"bež",f:"bež",n:"bež",p:"bež"},
  {de:"orangefarben",m:"narandžasti",f:"narandžastu",n:"narandžasto",p:"narandžaste"},
  {de:"lila",m:"ljubičasti",f:"ljubičastu",n:"ljubičasto",p:"ljubičaste",invariable:true}
 ];
 const garments=[
  ["Jacke","f","jaknu","f"],["Hose","f","pantalone","p"],["Jeans","f","farmerke","p"],
  ["Bluse","f","bluzu","f"],["Kleid","n","haljinu","f"],["T-Shirt","n","majicu","f"],
  ["Hemd","n","košulju","f"],["Pullover","m","džemper","m"],["Mantel","m","kaput","m"],
  ["Rock","m","suknju","f"],["Anzug","m","odelo","n"],["Schuhe","p","cipele","p"],
  ["Stiefel","p","čizme","p"],["Turnschuhe","p","patike","p"],["Sandalen","p","sandale","p"],
  ["Mütze","f","kapu","f"],["Schal","m","šal","m"],["Hut","m","šešir","m"],
  ["Arbeitskleidung","f","radnu odeću","f"],["Schürze","f","kecelju","f"],
  ["Handschuhe","p","rukavice","p"],["Brille","f","naočare","p"],["Kittel","m","mantil","m"],["Sakko","n","sako","m"],["Uniform","f","uniformu","f"]
 ];
 const article={m:"einen",f:"eine",n:"ein",p:""};
 const adjEnding={m:"en",f:"e",n:"es",p:"e"};
 for(const actor of actors){
  for(const [noun,g,srN,srG] of garments){
   const prefix=article[g]?article[g]+" ":"";
   put(actor.de+" trägt "+prefix+noun+".",actor.sr+" nosi "+srN+".");
   for(const color of colors){
    const adjective=color.invariable?color.de:color.de+adjEnding[g];
    const de=actor.de+" trägt "+prefix+adjective+" "+noun+".";
    const sr=actor.sr+" nosi "+color[srG]+" "+srN+".";
    put(de,sr);
   }
  }
 }
 const hairColors=[
  ["schwarze","crnu"],["braune","smeđu"],["blonde","plavu"],["graue","sedu"],
  ["weiße","belu"],["rote","crvenu"],["dunkelbraune","tamnobraon"],
  ["hellbraune","svetlosmeđu"]
 ];
 const hairForms=[
  ["kurze","kratku"],["lange","dugu"],["mittellange","srednje dugu"],
  ["lockige","kovrdžavu"],["glatte","ravnu"]
 ];
 const eyes=[
  ["blaue","plave"],["braune","smeđe"],["grüne","zelene"],
  ["graue","sive"],["schwarze","crne"]
 ];

 // Approved, grammatically fixed A1 appearance and orientation templates.
 const personTraits=[
  ["ist groß","je visok","je visoka","je visoko"],
  ["ist klein","je nizak","je niska","je nisko"],
  ["ist schlank","je vitak","je vitka","je vitko"],
  ["ist sportlich","je sportski građen","je sportski građena","je sportski građeno"],
  ["sieht jung aus","izgleda mlado","izgleda mlado","izgleda mlado"],
  ["sieht älter aus","izgleda starije","izgleda starije","izgleda starije"]
 ];
 const personSides=[
  ["steht links","stoji levo"],["steht rechts","stoji desno"],
  ["sitzt links","sedi levo"],["sitzt rechts","sedi desno"],
  ["steht in der Mitte","stoji u sredini"],["sitzt in der Mitte","sedi u sredini"]
 ];
 for(const [actorIndex,actor] of actors.entries()){
  for(const trait of personTraits)put(actor.de+" "+trait[0]+".",actor.sr+" "+trait[actorIndex+1]+".");
  for(const [de,sr] of personSides)put(actor.de+" "+de+".",actor.sr+" "+sr+".");
  put(actor.de+" trägt eine Brille.",actor.sr+" nosi naočare.");
 }
 for(const [de,sr] of [
  ["Der Mann hat einen kurzen Bart.","Muškarac ima kratku bradu."],
  ["Der Mann hat einen langen Bart.","Muškarac ima dugu bradu."],
  ["Der Mann hat einen grauen Bart.","Muškarac ima sedu bradu."],
  ["Der Mann hat einen schwarzen Bart.","Muškarac ima crnu bradu."],
  ["Der Mann hat einen braunen Bart.","Muškarac ima smeđu bradu."],
  ["Der Mann hat einen Schnurrbart.","Muškarac ima brkove."],
  ["Der Mann ist glatzköpfig.","Muškarac je ćelav."]
 ])put(de,sr);

 for(const actor of actors){
  for(const [deEye,srEye] of eyes)put(actor.de+" hat "+deEye+" Augen.",actor.sr+" ima "+srEye+" oči.");
  for(const [dColor,sColor] of hairColors)
   for(const [dForm,sForm] of hairForms)
    put(actor.de+" hat "+dForm+" "+dColor+" Haare.",actor.sr+" ima "+sForm+" "+sColor+" kosu.");
  for(const [deShape,srShape] of [["ovales","ovalno"],["rundes","okruglo"]])
   put(actor.de+" hat ein "+deShape+" Gesicht.",actor.sr+" ima "+srShape+" lice.");
  for(let age=2;age<=90;age++){
   const de=actor.lo+" ist ungefähr "+age+" Jahre alt.";
   put(actor.de+" ist ungefähr "+age+" Jahre alt.",actor.sr+" ima otprilike "+age+" godina.");
   put("Ich denke, "+de,"Mislim da "+actor.srGen+" ima otprilike "+age+" godina.");
  }
  put(actor.de+" lächelt.",actor.sr+" se osmehuje.");
  put(actor.de+" lacht.",actor.sr+" se smeje.");
  put("Ich denke, "+actor.lo+" lacht.","Mislim da se "+actor.srGen+" smeje.");
 }
 put("Beide Personen lachen.","Obe osobe se smeju.");
 put("Beide Personen lächeln.","Obe osobe se osmehuju.");

 // Convert already-authored plural location patterns to user-approved singular.
 for(const entry of bankExamples.filter(x=>x.cat==="places")){
  const match=norm(entry.de).match(/^Die Personen sind (.+)\.$/);
  const tr=norm(entry.sr).match(/^Osobe su (.+)\.$/);
  if(!match||!tr)continue;
  for(const actor of actors)
   put("Ich denke, "+actor.lo+" ist "+match[1]+".","Mislim da je "+actor.srGen+" "+tr[1]+".");
 }
 put("Das war meine Bildbeschreibung.","To je bio moj opis slike.");

 const segment=value=>{
  const s=norm(value);
  if(!s)return [];
  return s.split(/(?<=[.!?])\s+(?=[A-ZÄÖÜ„"0-9])/u).map(x=>norm(x)).filter(Boolean);
 };
 const seen=new Set();let rejected=0;
 const chosen=result.steps.map((raw,i)=>{
  const lines=[];
  for(const s of segment(raw?.de)){
   const exact=allowed.get(s);
   if(!exact){rejected++;continue;}
   if(seen.has(exact.de)){continue;}
   seen.add(exact.de);lines.push({...exact});
  }
  return {de:lines.map(x=>x.de).join(" "),sr:lines.map(x=>x.sr).join(" "),lines};
 });
 // DE-MAX bank normally starts "Auf dem Bild sehe ich ...",
 // while the classroom template uses "Auf diesem Bild sehe ich ...".
 // Convert a recognized equivalent rather than rejecting a correct picture description.
 const introAliases=new Map([
  ["Auf dem Bild sehe ich einen Mann und eine Frau.","Auf diesem Bild sehe ich zwei Personen, einen Mann und eine Frau."],
  ["Auf dem Bild sehe ich eine Frau und einen Mann.","Auf diesem Bild sehe ich zwei Personen, einen Mann und eine Frau."],
  ["Auf dem Bild sehe ich zwei Personen, einen Mann und eine Frau.","Auf diesem Bild sehe ich zwei Personen, einen Mann und eine Frau."],
  ["Auf diesem Bild sehe ich einen Mann und eine Frau.","Auf diesem Bild sehe ich zwei Personen, einen Mann und eine Frau."],
  ["Auf dem Bild sehe ich einen Mann, eine Frau und ein Kind.","Auf diesem Bild sehe ich einen Mann, eine Frau und ein Kind."]
 ]);
 const opening=(s)=>{
  const text=norm(s).replace(/^[•\-–]\s*/,"");
  if(allowedIntros.has(text))return allowed.get(text);
  const alias=introAliases.get(text);
  if(alias)return allowed.get(alias);
  const switched=text.replace(/^Auf dem Bild sehe ich /,"Auf diesem Bild sehe ich ");
  if(allowedIntros.has(switched))return allowed.get(switched);
  return null;
 };
 const openingRaw=[...segment(result.steps[0]?.de),...segment(result.description)];
 const openings=openingRaw.map(opening).filter(Boolean);
 const detailed=openings.find(x=>x.de==="Auf diesem Bild sehe ich zwei Personen, einen Mann und eine Frau.");
 let first=detailed||openings[0]||chosen[0].lines.find(x=>allowedIntros.has(x.de));
 if(!first){
  // If the model cannot reliably count people, do NOT invent a man or woman.
  // This neutral sentence is also a pre-approved template.
  first=allowed.get("Auf diesem Bild sehe ich eine Szene.");
 }
 chosen[0].lines=[{...first},...chosen[0].lines.filter(x=>!allowedIntros.has(x.de)&&!/^Auf dem Bild sehe ich /.test(x.de))];
 chosen[0].de=chosen[0].lines.map(x=>x.de).join(" ");
 chosen[0].sr=chosen[0].lines.map(x=>x.sr).join(" ");
 const ending="Das war meine Bildbeschreibung.";
 for(const step of chosen){
  step.lines=step.lines.filter(x=>x.de!==ending);
  step.de=step.lines.map(x=>x.de).join(" ");
  step.sr=step.lines.map(x=>x.sr).join(" ");
 }
 const endLine=allowed.get(ending);
 chosen[8].lines.push({...endLine});
 chosen[8].de=chosen[8].lines.map(x=>x.de).join(" ");
 chosen[8].sr=chosen[8].lines.map(x=>x.sr).join(" ");
 const allLines=chosen.slice(0,9).flatMap(s=>s.lines);
 // A short or unclear photo may have fewer than nine supported sentences;
 // return all verified content rather than fail the whole exercise.
 if(allLines.length<3)return respond({error:"Fotografija nema dovoljno jasno prepoznatih detalja. Pokušaj sa jasnijom slikom.",rejected},502);
 const summary={de:allLines.map(x=>x.de).join(" "),sr:allLines.map(x=>x.sr).join(" "),lines:allLines};
 chosen[9]=summary;

 // Strictly source dialogue from the selected original DE-MAX scene.
 const selectedScene=Array.isArray(parsed.scenes)?
  parsed.scenes.find(s=>Number(s.n)===Number(result.sceneNumber)):null;
 const rawDialogue=Array.isArray(selectedScene?.dialog)?
  selectedScene.dialog.filter(x=>x&&x.de&&x.sr):[];
 const chosenDialogue=rawDialogue.length>12?
  [...rawDialogue.slice(0,10),...rawDialogue.slice(-2)]:rawDialogue.slice(0,12);
 const dialogue=chosenDialogue.map((x,i)=>({
  speaker:i%2?"B":"A",
  de:String(x.de).trim(),
  sr:String(x.sr).trim()
 }));
 return respond({
  steps:chosen,
  description:summary.de,
  sceneNumber:selectedScene?Number(selectedScene.n):null,
  sceneName:selectedScene?String(selectedScene.sr||""):String(result.sceneName||""),
  dialogue,
  sourceMode:"DE-MAX baza i potvrđeni A1 šabloni",
  filteredSentences:rejected
 });

 }catch(e){return respond({error:"Greška u obradi zahteva: "+e.message},500)}
}};
