# DE-MAX A2 — Cloudflare AI Worker

Frontend: https://nemackidemax13-oss.github.io/Biografije-A1/A2-USMENI-SIMULACIJA/

Ovaj folder ima frontend `index.html` i Cloudflare backend `cloudflare-worker.js`. **Ne unosite OpenAI API ključ u GitHub.**

## Najjednostavnije preko Cloudflare dashboard-a
1. Otvorite https://dash.cloudflare.com/ -> Workers & Pages -> Create -> Worker.
2. Naziv: `demax-a2-usmeni`. Kod Workera zamenite sadržajem fajla `cloudflare-worker.js` i kliknite Deploy.
3. Worker -> Settings -> Variables and Secrets -> Add -> **Secret**; Name: `OPENAI_API_KEY`; Value: svoj OpenAI API ključ; Deploy.
4. Posetite `https://demax-a2-usmeni.nemackidemax13.workers.dev/api/a2-usmeni`. Očekivano: `{"ok":true,"configured":true,...}` ako je subdomain `nemackidemax13`.
5. Ponovo otvorite A2 GitHub aplikaciju — pri učitavanju automatski pokušava da poveže ovaj endpoint.
6. Ako je Cloudflare subdomain drugi ili je Worker drugačije imenovan, u aplikaciji otvorite `AI provera · povezivanje`, upišite **svoju stvarnu** `https://...workers.dev/api/a2-usmeni` adresu i sačuvajte.

Ukoliko pravite Worker ručnim kopiranjem, **uključite i ograničenje broja zahteva** pre šire distribucije javnog linka. CORS nije zaštita od zahteva koje šalju drugi serveri.

## Preporučeno objavljivanje pomoću Wrangler-a
Iz foldera `A2-USMENI-SIMULACIJA` (sa instaliranim Node.js):

```bash
npx wrangler login
npx wrangler deploy -c wrangler.jsonc
npx wrangler secret put OPENAI_API_KEY -c wrangler.jsonc
```

Konfiguracija uključuje lokalno Cloudflare rate-limiting pravilo do približno 20 zahteva/minut po IP-u/Cloudflare lokaciji. Taj limit nije apsolutan: za strogi troškovni limit koristite dodatne zaštite/autentifikaciju. U OpenAI platformi podesite odgovarajući budžet i pratite potrošnju.

Možete promeniti model preko obične Cloudflare varijable `OPENAI_MODEL` (podrazumevano `gpt-6-luna`); ključ mora ostati **Secret**.

## Endpoint
- GET `/api/a2-usmeni` — status, da li je ključ podešen.
- POST `/api/a2-usmeni` — JSON sa `level:"A2"` i `type:"evaluate"` ili `type:"generate_questions"`.
- Dozvoljeni browser origin je `https://nemackidemax13-oss.github.io`.
- Mikrofon aplikacije nastavlja da koristi postojeći A1 transcribe Worker; ovaj Worker služi za AI pitanja i ocenjivanje.

Napomena o privatnosti: AI provera šalje tekst kandidatovog odgovora preko Cloudflare Workera u OpenAI API. Rezultat pregleda se čuva lokalno u aplikaciji; ne dodajte lične podatke u tekst odgovora.
