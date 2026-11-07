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
 if(request.method==="GET"&&new URL(request.url).searchParams.get("check")==="1")return respond({ok:true,version:"20261107-opis-svi-koraci-v42",mode:"DEMAX_STRICT_TEMPLATES",introFix:true});
 if(request.method!=="POST")return respond({error:"Samo POST zahtev."},405);
 if(!env.OPENAI_API_KEY)return respond({error:"OPENAI_API_KEY nije podešen na Worker-u."},503);
 try{
 const raw=await request.text();if(raw.length>9000000)return respond({error:"Slika je prevelika. Izaberi manju fotografiju."},413);
 const parsed=JSON.parse(raw);
 const image=parsed.image;
 if(typeof image!=="string"||!/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(image))return respond({error:"Neispravan format slike."},400);
 const instructions=`Ti si DE-MAX A1 stručnjak za usmeni ispit ÖSD/Goethe. Analiziraš KONKRETNU sliku i strogo koristiš originalnu bazu DE-MAX A1 šablona sa stranice /A1-OPIS-SLIKE-9-KORAKA/index.html (shared.js) i originalne dijaloge iz DE_MAX_A1_DIJALOZI_40_TELEFON.html. Dobijaš vizuelne nalaze iz prethodne analize i katalog originalnih nemačkih rečenica. Svaka nemačka rečenica u odgovoru MORA biti identično napisana kao neka rečenica iz katalogizovanog polja bankSentences ILI jedan od fiksnih gramatičkih A1 šablona ispod. Nijednu slobodno izmišljenu rečenicu ne vraćaj! Ne prepisuj ono što nije vidljivo na fotografiji: nikakav izmišljeni čovek, dete, događaj, razgovor, boja odeće, starost, osmeh, sat, brada ili nakit. Kada nisi siguran, izostavi neproveren detalj. Ne preteruj i ne ponavljaj rečenice. Nemački mora biti nivo A1: jednostavne, kratke rečenice.

OBAVEZAN REDOSLED IZ ORIGINALNE BAZE 9 KORAKA: steps ima 10 elemenata, za prve 9:
1. OPIS OSOBA: počni sa 'Auf diesem Bild sehe ich zwei Personen, einen Mann und eine Frau.' SAMO ako ima tačno jednog muškarca i jednu ženu. U drugim slučajevima izaberi tačan odobren početni šablon 'Auf diesem Bild sehe ich ...' ili originalnu rečenicu 'Auf dem Bild sehe ich ...' iz banke (server normalizuje). Prebroj sve osobe, bez izmišljanja.
2. RAZGOVOR OSOBA: ako se očigledno obraćaju jedno drugom, koristi originalni bank šablon 'Die Personen sprechen über etwas, vielleicht über ...', a temu biraj isključivo na osnovu scene, npr. hrana, knjige, cveće, kupovina. To je samo pretpostavka, ne sigurna činjenica. Ako ne razgovaraju, izaberi samo stvarno vidljivu radnju iz baze.
3. MESTO OSOBA: izaberi najbližu rečenicu iz 'places' baze, npr. 'Die Personen sind in der Bäckerei.' ili 'Ich denke, die Personen sind in der Bäckerei.' (server dozvoljava taj fiksni obrazac). Mesto mora biti potkrepljeno prizorom, a ne profesijom nagađanom iz odeće. Za jednu osobu 'Ich denke, der Mann/die Frau/das Kind ist ...' ako postoji odgovarajući šablon.
4. IZGLED OBE OSOBE DETALJNO: prvo muškarca, zatim ženu, pa dete ako se vidi. Za svaku osobu kojoj se jasno vide osobine biraj što više odgovarajućih A1 rečenica iz banke: visina, stas, lice, oči, naočare, brada i brkovi muškarca, izraz lica i položaj. Ne preskači ženu kad su vidljivi detalji žene. Predlošci uključuju 'Der Mann ist groß.', 'Die Frau ist schlank.', 'Der Mann hat einen Bart.', 'Die Frau hat braune Augen.', 'Der Mann trägt eine Brille.'. Nijedan detalj ne tvrdi ako se ne vidi.
5. ODEĆA: za muškarca, ženu i dete posebno; svaki stvarno vidljiv komad, boja i pravilni član/padež; odobreni A1 šabloni: 'Der Mann trägt eine blaue Jacke.', 'Die Frau trägt ein rotes Kleid.', 'Das Kind trägt schwarze Schuhe.'. Samo ako se vidi.
6. KOSA: za svakog posebno 'Der Mann hat kurze schwarze Haare.', 'Die Frau hat lange blonde Haare.', 'Das Kind hat lockige braune Haare.' ili tačan drugi fiksni oblik; dužina, boja, kovrdžava/ravna, samo kada se vidi.
7. GODINE: za svaku osobu samo jedna približna procena, npr. 'Ich denke, der Mann ist ungefähr 35 Jahre alt.', 'Ich denke, die Frau ist ungefähr 30 Jahre alt.', 'Ich denke, das Kind ist ungefähr 7 Jahre alt.' ili bez 'Ich denke'. Broj odgovara približnom izgledu, ne predstavlja se kao sigurna činjenica.
8. DETALJI SLIKE: odaberi iz BANK extra/start/closing relevantne rečenice o predmetima u rukama, satovima, nakitu, izrazima lica, osmehu, smehu, životinjama, pozadini, levo/desno, unutrašnjem prostoru ili vidljivim vremenskim prilikama i godišnjem dobu SAMO kad je očigledno. Za smeh: 'Beide Personen lachen.' samo kad se obe osobe jasno smeju; za osmeh: 'Beide Personen lächeln.' kad se osmehuju.
9. ZAVRŠNI DEO – OPIS NA KRAJU: nakon 8. koraka prvo 1–2 rečenice iz baze o onome što ZAISTA vidiš u POZADINI u obliku 'Im Hintergrund sehe ich noch ...', koristeći tačan postojeći tekst iz baze ili samo strogo dozvoljene gramatičke šablone; zatim ako su NAPOLJU i vreme je jasno vidljivo, koristi postojeću 'Das Wetter ist sonnig.' / 'Das Wetter ist schön.' / 'Es regnet.' / 'Es ist bewölkt.' (ne tvrdi vreme unutra); zatim ako se ZAISTA VIDI kupovina ili plaćanje, primeni odobreni 'Ich denke, die Personen kaufen Brot.' / 'Ich denke, die Frau kauft Blumen.' / 'Ich denke, der Mann kauft Schuhe.' sa pravim predmetom koji je vidljiv. Ako nema kupovine nemoj pisati da kupuju. Zatim eventualno 1–2 prikladne originalne closing rečenice za stvarnu situaciju iz baze. Poslednja rečenica UVEK 'Das war meine Bildbeschreibung.'. Ne ponavljaj isto iz koraka 8. Server proverava svaki opis sa fotografijom i premešta relevantne rečenice o pozadini i vremenu u korak 9.
10. MOJ OPIS: ostavi prazan, server sklapa identične rečenice iz koraka 1–9.

FIKSNI DODATNI A1 ŠABLONI: dopušteni su samo postojeći početni izrazi 'Auf diesem Bild sehe ich ...', gramatički ispravne rečenice oblika 'Der Mann/Die Frau/Das Kind trägt [odevni predmet i boja]' iz kataloga, '... hat [dužina/boja] Haare.', '... hat [boja] Augen.', '... ist ungefähr [broj] Jahre alt.', 'Ich denke, ... ist ungefähr ... Jahre alt.', 'Der Mann hat einen Bart/Schnurrbart.', i očigledne mimike; to su sistemski unapred generisane dozvoljene varijante. 9. korak dodatno koristi SAMO sistemski dozvoljene fiksne oblike 'Im Hintergrund sehe ich noch ...' i 'Ich denke, die Personen/der Mann/die Frau kauft/kaufen ...', kada su pouzdano potvrđeni vizuelnom analizom, uz tačan prevod; vreme se uzima iz originalnih weather/closing rečenica. NEMOJ slobodno kombinovati nepovezane rečenice, dodavati još jedan nepoznat predmet niti slobodno pisati nove nemačke rečenice.

PRAVILA KVALITETA: pre pisanja u sebi proveri koliko osoba je prisutno, pripadnost odeće, položaj na slici, lice i kosu svake osobe, mesto i objekte. Opisi detaljno kada je slika jasna: 18–35 kratkih rečenica je moguće, ali broj nije cilj. Ako slika nema dovoljno informacija, napiši manje. Izbor scena sceneNumber je najviše 1–40, i to jedna od originalnih 40 situacija, ako postoji odgovarajuća. Ne piši nove dijaloge: izabrani originalni dijalog već postoji i server ga uzima iz baze. Za DODATNU POUZDANOST, pored steps obavezno vrati i stepSentenceIds: objekat sa ključevima "0"..."8" gde je vrednost niz indeksa i iz kataloga context.bankSentences; svaki i mora biti doslovno ID odgovarajuće vidljive rečenice iz DE-MAX baze, nikada tekst koji nisi video. Koraci 4, 5, 6, 7 i 8 treba da imaju rečenice kada su detalji na slici vidljivi. Primenjivaće se i strukturirani vizuelni podaci iz prvog prolaza. Možeš predložiti dialogueIndices kao rastući niz 10 ili 12 CELOBROJNIH indeksa originalnih replika iz context.dialogueOptions za scenu: izaberi replike koje logično idu od pozdrava do oproštaja, očuvaj redosled i smenjivanje A/B. Ako nema odgovarajuće scene, ostavi niz prazan.
Odgovori SAMO JSON objektom {steps:[tačno 10 objekata {de,sr:""}],description:"",sceneNumber:broj ili null,sceneName:"",dialogueIndices:[indeksi]}. Nema drugog teksta.`;
 // Data comes from the two exact DE-MAX sources selected by the teacher.
 // "index.html" loads the photo-description BANK from ./shared.js.
 // The 40-dialogue phone page loads DATA_01/02 and DODATNE_01/02.
 const fullScenes=Array.isArray(parsed.scenes)?parsed.scenes.filter(x=>Number.isInteger(Number(x?.n))&&Number(x.n)>=1&&Number(x.n)<=40).slice(0,40).map(x=>({
  n:Number(x.n),sr:String(x.sr||"").slice(0,100),de:String(x.de||"").slice(0,100),roles:String(x.roles||"").slice(0,120),
  dialog:Array.isArray(x.dialog)?x.dialog.slice(0,45).filter(p=>p?.de&&p?.sr).map(p=>({de:String(p.de).slice(0,250),sr:String(p.sr).slice(0,280)})):[],
  extra:Array.isArray(x.extra)?x.extra.slice(0,100).filter(p=>p?.de&&p?.sr).map(p=>({de:String(p.de).slice(0,250),sr:String(p.sr).slice(0,280)})):[]
 })):[];
 const bankExamples=Array.isArray(parsed.bankExamples)?parsed.bankExamples.slice(0,1400).filter(x=>x&&x.de&&x.sr).map(x=>({
  cat:String(x.cat||"").slice(0,25),de:String(x.de).slice(0,250),sr:String(x.sr).slice(0,280),
  personGroup:String(x.personGroup||"").slice(0,40),
  sceneDetailIds:Array.isArray(x.sceneDetailIds)?x.sceneDetailIds.slice(0,15).map(String):[],
  closingSceneIds:Array.isArray(x.closingSceneIds)?x.closingSceneIds.slice(0,15).map(String):[],
  closingIndoor:!!x.closingIndoor,closingEnding:!!x.closingEnding
 })):[];
 if(!bankExamples.length||!fullScenes.length)
  return respond({error:"Nije učitana originalna DE-MAX baza opisa i 40 dijaloga. Osveži stranicu i pokušaj ponovo."},422);
 const sceneLabels=fullScenes.map(s=>({n:s.n,sr:s.sr,de:s.de,roles:s.roles}));
 // Phase 1: visual recognition alone, WITHOUT suggesting arbitrary sentences.
 const visionSystem="Prepoznaj samo ono što se STVARNO VIDI na fotografiji za nemački A1 usmeni ispit. Odgovori ISKLJUČIVO JSON objektom sa sledećim poljima: sceneNumber (broj iz 40 ponuđenih situacija ili null), people (niz za svaku vidljivu osobu, od leve ka desnoj; svaka ima kind: 'Mann'|'Frau'|'Kind'|'unsicher', stature: 'groß'|'klein'|'schlank'|'sportlich'|null, position: 'links'|'rechts'|'Mitte'|null, posture: 'steht'|'sitzt'|null, glasses:boolean|null, beard:'kurzen'|'langen'|'grauen'|'schwarzen'|'braunen'|null samo kod muškarca, moustache:boolean|null samo kod muškarca, faceShape:'oval'|'rund'|null, eyeColor:'blau'|'braun'|'grün'|'grau'|null SAMO AKO JE ZAISTA JASNO, clothes:[{item:'Jacke'|'Hose'|'Jeans'|'Bluse'|'Kleid'|'T-Shirt'|'Hemd'|'Pullover'|'Mantel'|'Rock'|'Anzug'|'Schuhe'|'Stiefel'|'Turnschuhe'|'Sandalen'|'Mütze'|'Schal'|'Hut'|'Arbeitskleidung'|'Schürze'|'Handschuhe'|'Brille'|'Kittel'|'Sakko'|'Uniform',color:'schwarz'|'weiß'|'blau'|'rot'|'grün'|'gelb'|'grau'|'braun'|'rosa'|'beig'|'orangefarben'|'lila'|null}] (do 5 stvari koje se stvarno vide), hair:{length:'kurze'|'lange'|'mittellange'|'lockige'|'glatte'|null,color:'schwarze'|'braune'|'blonde'|'graue'|'weiße'|'rote'|'dunkelbraune'|'hellbraune'|null}|null, ageApprox:ceo broj 2..90 ili null, expression:'lächelt'|'lacht'|null, watch:boolean|null, earrings:boolean|null, necklace:boolean|null, appearance:'kratko samo vidljivo na srpskom', clothesNote:'kratko na srpskom', hairNote:'kratko na srpskom'}), backgroundObjects (niz SAMO jasnih objekata: 'Tisch','Stuhl','Fenster','Baum','Bäume','Blumen','Auto','Brot','Regal','Tür','Straße','Sonne','Buch','Hund','Katze','Wasser'; prazno ako nije jasno), visualFacts:[kratke činjenice na srpskom], interaction:'jasna radnja na srpskom'|null, indoor:boolean|null, weather:'sunny'|'rainy'|'cloudy'|null. NE IZMISLJAJ boje očiju, kosu, sat, garderobu, broj godina ili bilo šta što nije dovoljno jasno. Ako osoba nije sigurno muško/žensko, koristi kind:'unsicher' (bez izmišljanja pola). backgroundObjects sadrži SAMO predmete koji su zaista u POZADINI, ne u rukama ili prvom planu; ako se pozadina ne vidi, backgroundObjects:[]; ako je kosa prekrivena hair:null. DODAJ shopping:{visible:boolean,subject:'personen'|'mann'|'frau'|'kind'|null,item:'Brot'|'Obst'|'Gemüse'|'Blumen'|'Kleidung'|'Schuhe'|'Medikamente'|'Bücher'|'Fleisch'|'Lebensmittel'|'Fahrkarten'|null}; shopping.visible postavi true SAMO ako postoji jasan čin kupovine ili plaćanja na fotografiji, ne samo zato što ljudi stoje u prodavnici. subject:'personen' samo ako obe osobe zaista kupuju, inače pojedinačno. item isključivo ako je to što kupuju jasno vidljivo; ako nije, shopping.item=null. indoor:false SAMO kad su stvarno napolju, a weather definisi SAMO ako to dokazuje slika.";
 let observation={sceneNumber:null,people:[],visualFacts:[]};
 try{
  const vi=await fetch("https://api.openai.com/v1/chat/completions",{
   method:"POST",headers:{"Authorization":"Bearer "+env.OPENAI_API_KEY,"Content-Type":"application/json"},
   body:JSON.stringify({
    model:env.OPENAI_MODEL||"gpt-4.1-mini",temperature:0,max_tokens:2600,response_format:{type:"json_object"},
    messages:[{role:"system",content:visionSystem},{role:"user",content:[{type:"text",text:"Prepoznaj prizor. Katalog originalnih DE-MAX situacija (1-40): "+JSON.stringify(sceneLabels)},{type:"image_url",image_url:{url:image,detail:"high"}}]}]
   })
  });
  const vdata=await vi.json();
  if(vi.ok)observation=JSON.parse(vdata.choices?.[0]?.message?.content||"{}");
 }catch(_){/* Keep working with the original image in phase 2. */}
 const matched=fullScenes.find(s=>s.n===Number(observation.sceneNumber))||null;
 // The original 9-step database marks location-relevant examples with sceneDetailIds/closingSceneIds.
 const sceneKeyMap=[null,"priroda","pekara","radionica","stan","kuhinja","butik","apoteka","mesara","biblioteka","skola","kafic","basta","supermarket","suma","hotel","knjizara","cvecara","voz","cekaonica","soba","fitnes","biro","doktor",null,"park","obucara","auto","autobus","bioskop","stan","reka","stanica","plaza","aerodrom","more","jezero","pijaca","ulica","hotel","kasa"];
 const sceneKey=matched?sceneKeyMap[matched.n]:"";
 const general=bankExamples.filter(x=>!x.sceneDetailIds.length&&!x.closingSceneIds.length);
 const sceneSpecific=sceneKey?bankExamples.filter(x=>x.sceneDetailIds.includes(sceneKey)||x.closingSceneIds.includes(sceneKey)):[];
 const unique=new Map();
 for(const x of [...general,...sceneSpecific])unique.set(x.de,x);
 // Full bank remains available for exact validation, but context is restricted to relevant visual-scene patterns.
 const shortlist=[...unique.values()].slice(0,850);
 const sourceScene=matched;
 const dialogueOptions=sourceScene?sourceScene.dialog.map((x,i)=>({i,de:x.de})): [];
 const context=JSON.stringify({
  visualObservations:observation,
  selectedScene:matched?{n:matched.n,sr:matched.sr,de:matched.de,roles:matched.roles}:null,
  bankSentences:shortlist.map((x,i)=>({i,de:x.de,cat:x.cat})),
  dialogueOptions
 });
 const api=await fetch("https://api.openai.com/v1/chat/completions",{
  method:"POST",headers:{"Authorization":"Bearer "+env.OPENAI_API_KEY,"Content-Type":"application/json"},
  body:JSON.stringify({
   model:env.OPENAI_MODEL||"gpt-4.1-mini",temperature:0,response_format:{type:"json_object"},max_tokens:5500,
   messages:[{role:"system",content:instructions},{role:"user",content:[{type:"text",text:"Koristi SAMO DE-MAX banku i odobrene šablone prema REALNOJ SLICI. Redosled 1 osoba, 2 razgovor, 3 mesto, 4 izgled obe osobe, 5 odeća, 6 kosa, 7 godine, 8 detalji, 9 završne. Relevantni podaci originalnih baza: "+context},{type:"image_url",image_url:{url:image,detail:"high"}}]}]
  })
 });
 const data=await api.json();
 if(!api.ok)return respond({error:"AI servis: "+(data.error?.message||"greška "+api.status)},502);
 let result;
 try{result=JSON.parse(data.choices?.[0]?.message?.content||"{}")}
 catch(_){return respond({error:"AI odgovor nema ispravan format, pokušaj ponovo."},502)}
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
  put("Ich denke, die Personen sind "+match[1]+".","Mislim da su osobe "+tr[1]+".");
  for(const actor of actors)
   put("Ich denke, "+actor.lo+" ist "+match[1]+".","Mislim da je "+actor.srGen+" "+tr[1]+".");
 }
 put("Das war meine Bildbeschreibung.","To je bio moj opis slike.");

 // Common A1 visual objects: permitted fixed sentence patterns; only selected
 // after the vision model explicitly confirms each object is visible.
 const backgroundTemplates=[
  ["Tisch","Auf dem Bild sehe ich einen Tisch.","Na slici vidim sto."],
  ["Stuhl","Auf dem Bild sehe ich einen Stuhl.","Na slici vidim stolicu."],
  ["Fenster","Auf dem Bild sehe ich ein Fenster.","Na slici vidim prozor."],
  ["Baum","Auf dem Bild sehe ich einen Baum.","Na slici vidim drvo."],
  ["Bäume","Auf dem Bild sehe ich Bäume.","Na slici vidim drveće."],
  ["Blumen","Auf dem Bild sehe ich Blumen.","Na slici vidim cveće."],
  ["Auto","Auf dem Bild sehe ich ein Auto.","Na slici vidim automobil."],
  ["Brot","Auf dem Bild sehe ich Brot.","Na slici vidim hleb."],
  ["Regal","Auf dem Bild sehe ich ein Regal.","Na slici vidim policu."],
  ["Tür","Auf dem Bild sehe ich eine Tür.","Na slici vidim vrata."],
  ["Straße","Auf dem Bild sehe ich eine Straße.","Na slici vidim ulicu."],
  ["Sonne","Auf dem Bild sehe ich die Sonne.","Na slici vidim sunce."],
  ["Buch","Auf dem Bild sehe ich ein Buch.","Na slici vidim knjigu."],
  ["Hund","Auf dem Bild sehe ich einen Hund.","Na slici vidim psa."],
  ["Katze","Auf dem Bild sehe ich eine Katze.","Na slici vidim mačku."],
  ["Wasser","Auf dem Bild sehe ich Wasser.","Na slici vidim vodu."]
 ];
 for(const [,de,sr] of backgroundTemplates)put(de,sr);
 // Teacher's FINAL (step 9) template: only confirmed objects in BACKGROUND.
 const backgroundClosing=[
  ["Tisch","einen Tisch","sto"],["Stuhl","einen Stuhl","stolicu"],
  ["Fenster","ein Fenster","prozor"],["Baum","einen Baum","drvo"],
  ["Bäume","viele Bäume","mnogo drveća"],["Blumen","Blumen","cveće"],
  ["Auto","ein Auto","automobil"],["Brot","Brot","hleb"],
  ["Regal","ein Regal","policu"],["Tür","eine Tür","vrata"],
  ["Straße","eine Straße","ulicu"],["Sonne","die Sonne","sunce"],
  ["Buch","ein Buch","knjigu"],["Hund","einen Hund","psa"],
  ["Katze","eine Katze","mačku"],["Wasser","Wasser","vodu"]
 ];
 for(const [,noun,srNoun] of backgroundClosing)
  put("Im Hintergrund sehe ich noch "+noun+".","U pozadini vidim još "+srNoun+".");
 // These buying statements are *fixed exam templates*, never generated freeform.
 const shoppingNouns=[
  ["Brot","Brot","hleb"],["Obst","Obst","voće"],
  ["Gemüse","Gemüse","povrće"],["Blumen","Blumen","cveće"],
  ["Kleidung","Kleidung","odeću"],["Schuhe","Schuhe","obuću"],
  ["Medikamente","Medikamente","lekove"],["Bücher","Bücher","knjige"],
  ["Fleisch","Fleisch","meso"],["Lebensmittel","Lebensmittel","namirnice"],
  ["Fahrkarten","Fahrkarten","karte"]
 ];
 const shoppingActors=[
  ["personen","die Personen","kaufen","Mislim da osobe kupuju"],
  ["mann","der Mann","kauft","Mislim da muškarac kupuje"],
  ["frau","die Frau","kauft","Mislim da žena kupuje"],
  ["kind","das Kind","kauft","Mislim da dete kupuje"]
 ];
 for(const [,deNoun,srNoun] of shoppingNouns)
  for(const [,person,verb,sr] of shoppingActors)
   put("Ich denke, "+person+" "+verb+" "+deNoun+".",sr+" "+srNoun+".");

 // Hair without a reliably visible color/length remains an allowed A1 sentence.
 for(const actor of actors){
  for(const [dLength,sLength] of [["kurze","kratku"],["lange","dugu"],["mittellange","srednje dugu"],["lockige","kovrdžavu"],["glatte","ravnu"]])
   put(actor.de+" hat "+dLength+" Haare.",actor.sr+" ima "+sLength+" kosu.");
  for(const [dColor,sColor] of hairColors)
   put(actor.de+" hat "+dColor+" Haare.",actor.sr+" ima "+sColor+" kosu.");
 }

 const segment=value=>{
  const s=norm(value);
  if(!s)return [];
  return s.split(/(?<=[.!?])\s+(?=[A-ZÄÖÜ„"0-9])/u).map(x=>norm(x)).filter(Boolean);
 };
 const seen=new Set();let rejected=0;
 const selectedIds=result.stepSentenceIds||{};
 const chosen=result.steps.map((raw,i)=>{
  const lines=[];
  const ids=Array.isArray(selectedIds)?selectedIds[i]:selectedIds[String(i)];
  const validIds=(Array.isArray(ids)?ids:[]).filter(x=>Number.isInteger(x)&&x>=0&&x<shortlist.length);
  const candidates=[
   ...segment(raw?.de),
   ...validIds.map(id=>shortlist[id]?.de).filter(Boolean)
  ];
  for(const phrase of candidates){
   const exact=allowed.get(norm(phrase));
   if(!exact){rejected++;continue;}
   if(seen.has(exact.de))continue;
   seen.add(exact.de);lines.push({...exact});
  }
  return {de:lines.map(x=>x.de).join(" "),sr:lines.map(x=>x.sr).join(" "),lines};
 });
 // Deterministic rescue for sections 4-8: extract ONLY photographed details
 // already listed by the independent vision pass, never invent facts.
 const append=(stepIndex,de)=>{
  const exact=allowed.get(norm(de));
  if(!exact||seen.has(exact.de))return false;
  const step=chosen[stepIndex];
  step.lines.push({...exact});seen.add(exact.de);
  step.de=step.lines.map(x=>x.de).join(" ");
  step.sr=step.lines.map(x=>x.sr).join(" ");
  return true;
 };
 const peopleObserved=Array.isArray(observation.people)?observation.people.slice(0,8):[];
 const legalColor=new Set(colors.map(x=>x.de));
 const legalGarment=new Map(garments.map(x=>[x[0],x[1]]));
 const legalHairColor=new Set(hairColors.map(x=>x[0]));
 const legalHairLength=new Set(hairForms.map(x=>x[0]));
 const legalEyes=new Set(eyes.map(x=>x[0]));
 const observedActors=peopleObserved.map(o=>({
  info:o,
  actor:actors.find(a=>a.de===(o?.kind==="Mann"?"Der Mann":o?.kind==="Frau"?"Die Frau":o?.kind==="Kind"?"Das Kind":""))
 })).filter(x=>x.actor);
 for(const {info,actor} of observedActors){
  // Section 4: appearance — include BOTH people if visible.
  const stature=String(info.stature||"");
  if(["groß","klein","schlank","sportlich"].includes(stature))
   append(3,actor.de+" ist "+stature+".");
  if(info.glasses===true)append(3,actor.de+" trägt eine Brille.");
  const face=String(info.faceShape||"");
  if(face==="oval"||face==="rund")
   append(3,actor.de+" hat ein "+(face==="oval"?"ovales":"rundes")+" Gesicht.");
  const eye=String(info.eyeColor||"");
  if(["blau","braun","grün","grau"].includes(eye))
   append(3,actor.de+" hat "+({blau:"blaue",braun:"braune",grün:"grüne",grau:"graue"})[eye]+" Augen.");
  if(actor.de==="Der Mann"){
   if(info.moustache===true)append(3,"Der Mann hat einen Schnurrbart.");
   if(["kurzen","langen","grauen","schwarzen","braunen"].includes(info.beard))
    append(3,"Der Mann hat einen "+info.beard+" Bart.");
  }
  if(["steht","sitzt"].includes(info.posture)&&["links","rechts","Mitte"].includes(info.position))
   append(3,actor.de+" "+info.posture+" "+(info.position==="Mitte"?"in der Mitte":info.position)+".");
  // Section 5: clothing — each visible garment, its color if confidently known.
  for(const garment of (Array.isArray(info.clothes)?info.clothes.slice(0,6):[])){
   const noun=String(garment?.item||"");
   if(!legalGarment.has(noun))continue;
   const gen=legalGarment.get(noun),color=String(garment.color||"");
   const art={m:"einen",f:"eine",n:"ein",p:""}[gen];
   const prefix=art?art+" ":"";
   const suffix={m:"en",f:"e",n:"es",p:"e"}[gen];
   const colorItem=colors.find(x=>x.de===color);
   const adj=colorItem?(colorItem.invariable?color:color+suffix)+" ":"";
   const withColor=actor.de+" trägt "+prefix+adj+noun+".";
   const alreadyDescribed=chosen[4].lines.some(x=>x.de.startsWith(actor.de+" trägt ")&&x.de.endsWith(" "+noun+"."));
   if(!alreadyDescribed)append(4,withColor)||(!alreadyDescribed&&append(4,actor.de+" trägt "+prefix+noun+"."));
  }
  // Section 6: hair, in order man/woman/child, with visible length and color.
  const hair=info.hair&&typeof info.hair==="object"?info.hair:null;
  const form=String(hair?.length||"");
  const shade=String(hair?.color||"");
  const hasHair=chosen[5].lines.some(x=>x.de.startsWith(actor.de+" hat ")&&x.de.includes(" Haare."));
  if(!hasHair&&legalHairLength.has(form)&&legalHairColor.has(shade))
   append(5,actor.de+" hat "+form+" "+shade+" Haare.");
  else if(!hasHair&&legalHairLength.has(form))append(5,actor.de+" hat "+form+" Haare.");
  else if(!hasHair&&legalHairColor.has(shade))append(5,actor.de+" hat "+shade+" Haare.");
  // Section 7: approximate age, NEVER an exact biographical claim.
  const age=Number(info.ageApprox);
  const hasAge=chosen[6].lines.some(x=>x.de.includes(actor.lo+" ist ungefähr "));
  if(!hasAge&&Number.isInteger(age)&&age>=2&&age<=90)
   append(6,"Ich denke, "+actor.lo+" ist ungefähr "+age+" Jahre alt.");
  // Section 8: accessories and visible expressions.
  if(info.watch===true)append(7,actor.de+" trägt eine Armbanduhr.");
  if(info.earrings===true&&actor.de==="Die Frau")append(7,"Die Frau trägt Ohrringe.");
  if(info.necklace===true&&actor.de==="Die Frau")append(7,"Die Frau trägt eine Halskette.");
  if(info.expression==="lächelt")append(7,actor.de+" lächelt.");
  if(info.expression==="lacht")append(7,actor.de+" lacht.");
 }
 // Environment in section 8, but ONLY when confirmed by photo recognition.
 const visibleObjs=new Set(Array.isArray(observation.backgroundObjects)?observation.backgroundObjects:[]);
 for(const [word,de] of backgroundTemplates)
  if(visibleObjs.has(word))append(7,de);
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
 // The exam ending has three photographic parts BEFORE the closing sentence:
 // (1) true background, (2) weather outdoors, (3) observed purchases.
 // Use original bank phrases first; systematic variants only when vision confirms.
 const finalStep=chosen[8];
 const weatherPhrases=/^(?:Das Wetter ist |Es regnet(?: stark)?\.|Es ist bewölkt\.|Es ist sonnig\.)/;
 const isFinalDetail=de=>/^Im Hintergrund sehe ich /.test(de)||weatherPhrases.test(de)||/^Ich denke, (?:die Personen|der Mann|die Frau|das Kind) kauf(?:en|t) /.test(de);
 // Put such phrases in step 9, even when a language-model step chose step 8.
 for(let i=0;i<8;i++){
  const moved=chosen[i].lines.filter(x=>isFinalDetail(x.de));
  if(!moved.length)continue;
  chosen[i].lines=chosen[i].lines.filter(x=>!isFinalDetail(x.de));
  chosen[i].de=chosen[i].lines.map(x=>x.de).join(" ");
  chosen[i].sr=chosen[i].lines.map(x=>x.sr).join(" ");
  for(const x of moved)if(!finalStep.lines.some(y=>y.de===x.de))finalStep.lines.push(x);
 }
 // Reject any ready-made weather/purchase statement that contradicts or
 // exceeds what the independent vision pass actually established.
 const confirmedOutside=observation.indoor===false;
 const confirmedWeather=String(observation.weather||"");
 const weatherMatches=de=>confirmedOutside&&(
  confirmedWeather==="sunny"&&/^(?:Das Wetter ist sonnig\.|Das Wetter ist schön\.|Es ist sonnig\.)$/.test(de)||
  confirmedWeather==="rainy"&&/^Es regnet\.$/.test(de)||
  confirmedWeather==="cloudy"&&/^Es ist bewölkt\.$/.test(de)
 );
 const observedShopping=observation.shopping&&typeof observation.shopping==="object"?observation.shopping:null;
 const confirmedBuy=observedShopping?.visible===true?
  (shoppingActors.find(x=>x[0]===observedShopping.subject)&&shoppingNouns.find(x=>x[0]===observedShopping.item)):false;
 const verifiedPurchase=confirmedBuy?
  "Ich denke, "+shoppingActors.find(x=>x[0]===observedShopping.subject)[1]+" "+
  shoppingActors.find(x=>x[0]===observedShopping.subject)[2]+" "+
  shoppingNouns.find(x=>x[0]===observedShopping.item)[1]+".":"";
 finalStep.lines=finalStep.lines.filter(x=>
  (!weatherPhrases.test(x.de)||weatherMatches(x.de))&&
  (!/^Ich denke, (?:die Personen|der Mann|die Frau|das Kind) kauf(?:en|t) /.test(x.de)||x.de===verifiedPurchase)
 );
 finalStep.de=finalStep.lines.map(x=>x.de).join(" ");
 finalStep.sr=finalStep.lines.map(x=>x.sr).join(" ");
 const observedBackground=new Set(Array.isArray(observation.backgroundObjects)?observation.backgroundObjects:[]);
 let backgroundAdds=0;
 for(const [name,noun] of backgroundClosing){
  if(observedBackground.has(name)&&backgroundAdds<2&&append(8,"Im Hintergrund sehe ich noch "+noun+"."))
   backgroundAdds++;
 }
 const outside=observation.indoor===false;
 const weather=String(observation.weather||"");
 // Only weather supported by the photo: original closing/weather bank sentences.
 if(outside&&["sunny","rainy","cloudy"].includes(weather)){
  const existingWeather=finalStep.lines.some(x=>weatherPhrases.test(x.de));
  if(!existingWeather){
   const sentence=weather==="sunny"?"Das Wetter ist sonnig.":
     weather==="rainy"?"Es regnet.":"Es ist bewölkt.";
   append(8,sentence);
  }
 }
 // The image must show buying, and the buyer AND product must be identifiable.
 const shopping=observation.shopping&&typeof observation.shopping==="object"?observation.shopping:null;
 if(shopping?.visible===true){
  const buyer=shoppingActors.find(x=>x[0]===shopping.subject);
  const item=shoppingNouns.find(x=>x[0]===shopping.item);
  if(buyer&&item)append(8,"Ich denke, "+buyer[1]+" "+buyer[2]+" "+item[1]+".");
 }
 // Final ordered display: background -> weather -> possible purchase -> other
 // scene-specific closing phrases -> the required closing line (added below).
 const finalWeight=de=>/^Im Hintergrund sehe ich /.test(de)?0:
  weatherPhrases.test(de)?1:
  /^Ich denke, (?:die Personen|der Mann|die Frau|das Kind) kauf(?:en|t) /.test(de)?2:3;
 finalStep.lines.sort((a,b)=>finalWeight(a.de)-finalWeight(b.de));
 finalStep.de=finalStep.lines.map(x=>x.de).join(" ");
 finalStep.sr=finalStep.lines.map(x=>x.sr).join(" ");

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

 // Never synthesize a dialogue: every line must be an ORIGINAL pairing from the
 // 40-scene phone dialogue database. Includes the teacher's additional expressions.
 const selectedScene=matched;
 const rawDialogue=selectedScene?.dialog||[];
 const candidate=Array.isArray(result.dialogueIndices)?result.dialogueIndices.map(Number):[];
 const good=candidate.length>=10&&candidate.length<=12&&candidate.length%2===0&&
   new Set(candidate).size===candidate.length&&candidate[0]===0&&
   candidate.every((v,i)=>Number.isInteger(v)&&v>=0&&v<rawDialogue.length&&v%2===i%2&&(i===0||v>candidate[i-1]));
 const indices=good?candidate:(rawDialogue.length>=12?
   [...Array.from({length:10},(_,i)=>i),rawDialogue.length-2,rawDialogue.length-1]:
   Array.from({length:Math.min(rawDialogue.length,12)},(_,i)=>i));
 const dialogue=indices.map((ix,i)=>({
  speaker:i%2?"B":"A",
  de:String(rawDialogue[ix]?.de||"").trim(),
  sr:String(rawDialogue[ix]?.sr||"").trim()
 })).filter(x=>x.de&&x.sr);
 return respond({
  steps:chosen,
  description:summary.de,
  sceneNumber:selectedScene?Number(selectedScene.n):null,
  sceneName:selectedScene?String(selectedScene.sr||""):String(result.sceneName||""),
  dialogue,
  sourceMode:"Originalna DE-MAX A1 9-koraka baza + telefonski dijalozi 40 situacija",
  filteredSentences:rejected
 });

 }catch(e){return respond({error:"Greška u obradi zahteva: "+e.message},500)}
}};
