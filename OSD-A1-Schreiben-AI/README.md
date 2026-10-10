# DE-MAX Tutin | ÖSD A1 Schreiben AI

Mobilni trener za pisanje mejlova, na osnovu korisnikove prezentacije **ÖSD pripreme A1**. Izvorni redosled obuhvata 33 dostupna zadatka, numerisana kao u prezentaciji (nedostaju 6. i 14.). Učenik piše **15–30 reči**; kada server radi, veštačka inteligencija ispravlja greške, daje model odgovora i dodeljuje **0–10 bodova**.

**GitHub Pages:** https://nemackidemax13-oss.github.io/Biografije-A1/OSD-A1-Schreiben-AI/

## Status
- `index.html` — postavljen; sva 33 naslova i po tri izvorna pitanja su ugrađeni u stranicu; telefon/računar.
- `config.js` — postavljen, trenutno prazna adresa servera.
- `worker.js` — postavljen izvorni kod za Cloudflare AI server; **još nije objavljen kao Worker**.
- Originalne slike iz PPTX nisu uploadovane u GitHub. Ova online verzija prikazuje njihove teme i pitanja tekstualno.

## Aktivacija preko Replit-a (preporučeno ako već imate Replit nalog)

1. U Replit-u napravite Node.js repl ili preko Replit aplikacije povezane sa ChatGPT-om importujte GitHub repo `nemackidemax13-oss/Biografije-A1`.
2. U Replit-u kao radni folder koristite `OSD-A1-Schreiben-AI` i kao komandu za pokretanje `cd OSD-A1-Schreiben-AI && npm start` (ili iz tog foldera `npm start`). Potreban je Node.js 20+.
3. Na https://console.groq.com/keys napravite Groq API ključ. U Replit-ovom meniju **Secrets** dodajte `GROQ_API_KEY` sa vrednošću ključa. Ključ NIKADA ne stavljajte na GitHub ili u HTML aplikaciju.
4. Pokrenite serversku aplikaciju. Ruta `/health` prikazuje `{"status":"online","groqConfigured":true}` ako je ključ pravilno unet. Ovo je samo potvrda konfiguracije, ne potvrda da je AI ocenjivanje uspešno.
5. Objavite backend kao Replit Deployment (javna HTTPS adresa sa Replit-a, često `.replit.app`), tako da ostane dostupan učenicima. Trošak hostinga zavisi od plana i izabranog deployment-a; samo postojanje Replit naloga ne garantuje besplatan hosting.
6. Javnu HTTPS adresu dodajte u `config.js`: `window.DEMAX_API_URL = "https://javni-backend.replit.app";`. Svi učenici onda otvaraju GitHub Pages i mogu da pozovu backend.

`server.mjs` je Node server, a `worker.js` sadrži istu logiku AI ocenjivanja i kompatibilan je sa Replit wrapper-om. Ne morate ništa instalirati iz npm paketa.

**Bezbednost:** Server dozvoljava CORS sa GitHub Pages domena i ima jednostavno ograničenje zahteva po IP adresi, ali to nije potpuna zaštita od zloupotrebe javnog API-ja. Pre šire javne upotrebe preporučeni su ozbiljniji rate limiting, praćenje potrošnje i limiti naloga.

## Alternativa: Cloudflare Worker

## Kako se aktivira AI bez objavljivanja tajnog ključa

1. Na https://console.groq.com/keys otvorite svoj Groq nalog i izaberite **Create API Key**. Nema potrebe da ključ šaljete u poruci ili objavljujete na GitHub-u.
2. Na https://dash.cloudflare.com/ otvorite **Workers & Pages → Create Worker** (besplatni plan ako je dostupan).
3. Kopirajte kod iz `worker.js` u editor Worker-a i izaberite **Deploy**.
4. U Cloudflare Worker-u otvorite **Settings → Variables and Secrets → Add → Secret**. Kao naziv upišite `GROQ_API_KEY`, a kao vrednost dodajte Groq ključ. Sačuvajte i objavite.
5. Cloudflare prikazuje javnu Worker adresu oblika `https://naziv-worker-a.nalog.workers.dev`. Tu **javnu** adresu upišite u `config.js` kao `window.DEMAX_API_URL = "https://...workers.dev";` i sačuvajte na GitHub-u. U aplikaciji nastavnik može alternativno da koristi dugme **AI podešavanja** da privremeno sačuva ovu javnu adresu u pregledaču.

Posle toga učenici otvaraju GitHub Pages i koriste AI proveru. **Na GitHub nikada ne stavljati GROQ_API_KEY**.

Model u `worker.js` je `openai/gpt-oss-120b` preko Groq servisa. Besplatna kvota zavisi od naloga; kada se dosegne, aplikacija javlja grešku i ne izmišlja rezultat. Za javnu masovnu upotrebu dodatno podesite rate limiting/abuse protection na Cloudflare-u: CORS ograničenje samo po sebi nije sigurnosna zaštita.

## Ocena (DE-MAX vežba, nije zvanična ÖSD ocena)
- 3 sadržajne stavke po 0–2 boda = do 6.
- Gramatika, pravopis, razumljivost = do 3.
- Završni pozdrav = do 1.
- AI uvažava različite gramatički ispravne odgovore.

## Napomena o originalnim slikama
Originalne slike 33 postavke nalaze se u prethodno napravljenom lokalnom ZIP paketu, u folderu `aufgaben/`. Da bi se pojavile na GitHub-u, treba dodati taj folder (33 `.webp` fajla) i omogućiti prikaz slika u stranici. Tekstualne postavke ostaju upotrebljive bez njih.
