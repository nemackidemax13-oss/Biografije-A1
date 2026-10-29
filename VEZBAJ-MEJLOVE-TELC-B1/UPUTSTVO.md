# DE-MAX Tutin — TELC B1 pisanje mejlova (20 zadataka)

## 1. Nova B1 aplikacija

**Link za učenike:**

https://nemackidemax13-oss.github.io/Biografije-A1/VEZBAJ-MEJLOVE-TELC-B1/iframe.html?v=telc-b1-20261029

Postojeća A2 aplikacija i njen Worker nisu izmenjeni.

U ovoj mapi:
- `iframe.html`: mobilna i desktop aplikacija; bez Google Drive integracije; čuva nacrte u lokalnom pregledaču; pravi lokalni TXT.
- `tasks.json`: svih 20 postavki i po četiri pitanja prepisanih iz korisnikovog PDF-a. Zadatak 18 sadrži ponovljenu Marianne temu sa strane 16.
- `CLOUDFLARE_TELC_B1_WORKER.js`: kompletan zaseban AI sistem za B1 zadatke, sa rubrikom i detaljnim uputstvima.

## 2. Jednokratno uključivanje AI provere u Cloudflare

1. Otvorite https://dash.cloudflare.com/ pa **Workers & Pages**.
2. Izaberite **Create application / Create Worker**, zadajte ime **b1mejlovi**. To je bitno jer ga je B1 aplikacija već podešena da poziva.
3. Otvorite fajl **CLOUDFLARE_TELC_B1_WORKER.js** na GitHub-u (Raw) i kopirajte ceo sadržaj sa **Ctrl+A, Ctrl+C**.
4. U Cloudflare Worker editoru zamenite početni kod sa **Ctrl+A, Ctrl+V**; kliknite **Deploy**.
5. U **Settings → Variables and Secrets** dodajte novu tajnu:
   - Ime: `OPENAI_API_KEY`
   - Tip: **Secret**
   - Vrednost: vaš OpenAI API ključ. **Nemojte** ga unositi u HTML, javni GitHub ili poruke.
6. Po želji u Worker podešavanjima dodajte promenljivu `OPENAI_MODEL`, podrazumevano `gpt-4.1-mini`.
7. Testirajte https://b1mejlovi.nemackidemax13.workers.dev/api/status i očekujte `{"service":"DE-MAX TELC B1","online":true,"configured":true,"tasks":20,...}`.
8. Otvorite B1 link, odaberite mejl, napišite odgovor, kliknite **AI proveri mejl**. Ako je Worker već aktivan, ocena dolazi preko zasebne rute `POST /api/check-b1-email`.

A1/A2 Cloudflare Workere **ne dirajte**. Nema potrebe da menjate njihov kôd.

## 3. Tačna uputstva AI ocenjivanja

Worker u promenljivoj `INSTRUCTIONS` ima punu bazu pravila:

1. Čita pun tekst primljenog mejla, situaciju i sva 4 Leitpunkte.
2. Razume da svaki zadatak može imati poseban kontekst (datum, poziv, uslovi, svrha, lični odnosi). Ne sme da menja činjenice.
3. I. **Berücksichtigung der Leitpunkte**: 4 obrađene tačke = 5, 3 = 3, 2 = 1, 0–1 = 0.
4. II. **Kommunikative Gestaltung**: 0/1/3/5 za uvod, redosled, povezanost, registarsku prikladnost, datum/anredu i pozdrav.
5. III. **Formale Richtigkeit**: 0/1/3/5 za gramatiku, pravopis, morfologiju, red reči i razumljivost.
6. Ukupan rezultat = (I + II + III) × 3, najviše 45.
7. Analiza pojedinačnih tačaka, konkretne greške sa ispravkama, gramatički ispravljena verzija korisnikovog mejla i novi primer B1 odgovora.
8. Učenikov odgovor tretira kao podatke, ne kao instrukcije AI sistemu.
9. Nema automatskog pravila nula bodova za manje od 26 reči; to nije pravilo TELC B1. Fokus je na sadržaju.
10. Procena je **vežbačka**, nikako zvanična ocena telc ispitivača.

## 4. Lokalne kopije / privatnost

Nacrti se čuvaju isključivo u `localStorage` na istom uređaju i pregledaču. Dugme **Sačuvaj TXT** snima pojedinačan mejl lokalno. Za AI analizu tekst odgovora privremeno ide preko Cloudflare Workera u OpenAI API; u kodu se odgovori trajno ne upisuju u dodatnu bazu. Nema Google Drive povezivanja.

## 5. Ugradnja u De-Max aplikaciju

Postavite ovo kao iframe:

```html
<iframe src="https://nemackidemax13-oss.github.io/Biografije-A1/VEZBAJ-MEJLOVE-TELC-B1/iframe.html?v=telc-b1-20261029" style="width:100%;height:100dvh;border:0" loading="lazy" title="TELC B1 pisanje mejlova"></iframe>
```

Ako se prikaz ugrađuje u aplikaciju, dozvolite redovan mrežni pristup i da iframe može da otvori GitHub Pages i B1 Cloudflare Worker. Mikrofon nije potreban.

## 6. Važno

GitHub Pages link počinje da radi nakon što GitHub objavi nove commitove; rutama javnog Wordera se ne pristupa pre Cloudflare deploy-a. Ovo je zasebna aplikacija.