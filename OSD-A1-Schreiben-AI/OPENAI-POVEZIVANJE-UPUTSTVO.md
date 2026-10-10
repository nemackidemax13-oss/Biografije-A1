# DE-MAX TUTIN — POVEZIVANJE 35 MEJLOVA SA OPENAI API-JEM

**Link za ucenike (ostaje isti):**
https://nemackidemax13-oss.github.io/Biografije-A1/OSD-A1-Schreiben-AI/

Korisnici pisu mejlove na GitHub Pages. Cloudflare Worker prima tekst i preko zasticenog OpenAI API kljuca vraca ocenu i ispravljeni mejl. Replit nije potreban.

## 1 — Kreiraj OpenAI API kljuc

1. Otvori https://platform.openai.com/api-keys
2. Izaberi Create new secret key, napravi nov kljuc za DE-MAX.
3. Proveri Billing: https://platform.openai.com/settings/organization/billing/overview
4. API je **posebno placanje**; ChatGPT Plus ne ukljucuje API. Postavi mali budzet/limit i prati potrosnju.
5. NIKADA ne salji kljuc u razgovor ili javni GitHub kod.

## 2 — Besplatan Cloudflare Workers hosting

1. Otvori https://dash.cloudflare.com i prijavi se.
2. Idi u **Workers & Pages** -> **Create** -> **Worker** (nazivi opcija mogu malo da se razlikuju).
3. Izaberi **Start with Hello World** ili prazni Worker, npr. `demax-a1-openai`.
4. Klikni **Deploy** da kreiras Worker, a zatim **Edit code**.
5. Otvori ceo kod na adresi:
   https://github.com/nemackidemax13-oss/Biografije-A1/blob/main/OSD-A1-Schreiben-AI/openai-cloudflare-worker.js
6. Klikni **Raw**, kopiraj SVE, i zameni sav podrazumevani kod u Cloudflare editoru.
7. Klikni **Deploy** / **Save and deploy**.

Cloudflare Workers Free ima svoj dnevni limit zahteva; pozivi OpenAI modelu se placaju zasebno.

## 3 — Sacuvaj OpenAI kljuc SAMO u Cloudflare Secrets

1. U tvom Worker-u otvori **Settings** -> **Variables and Secrets** -> **Add**.
2. **Type**: Secret
3. **Name**: `OPENAI_API_KEY`
4. **Value**: tvoj novi OpenAI API kljuc (samo tamo)
5. Sacuvaj i klikni **Deploy** za promenu.

Opcionalno: obična (ne tajna) promenljiva `OPENAI_MODEL` = `gpt-4.1-mini`.
Bez promene modela Worker sam koristi gpt-4.1-mini.

## 4 — Proveri da li je Worker aktivan

Cloudflare ce dodeliti javni URL, npr.:
`https://demax-a1-openai.tvoje-ime.workers.dev`

Otvoriti:
`https://demax-a1-openai.tvoje-ime.workers.dev/health`

Ocekivani odgovor:
```json
{"status":"ok","openaiConfigured":true,"tasks":35,"provider":"OpenAI"}
```
Ovo potvrdjuje da je kljuc prepoznat — pravi AI odgovor se dokazuje tek slanjem jednog mejla.

## 5 — Povezi postojeci GitHub link

U GitHub repozitorijumu otvori:
https://github.com/nemackidemax13-oss/Biografije-A1/blob/main/OSD-A1-Schreiben-AI/config.js

Upisi svoju PRAVU javnu Cloudflare URL adresu (bez /health ili /api/check-email):

```js
window.DEMAX_API_URL = "https://demax-a1-openai.tvoje-ime.workers.dev";
```

Klikni **Commit changes**.
Zatim koristi ISTI GitHub link:
https://nemackidemax13-oss.github.io/Biografije-A1/OSD-A1-Schreiben-AI/?v=mobile-10

Ili posalji samo **workers.dev URL**, bez API kljuca, da ga direktno povezem u config.js.

## 6 — Prva provera

Napisi najmanje 15 reci i klikni Proveri mejl. Trebalo bi da dobijes:
- Bodove 0–10, posebno za 3 pitanja, gramatiku, formu i duzinu.
- Ispravljen mejl na nemackom.
- Komentar na srpskom latinicom.
- Npr. "Ich kann Sport spielen" -> "Ich kann Sport machen".

## Vazna ogranicenja i bezbednost

- API nije besplatan kao ChatGPT Plus. Naplacuje se po tokenima. Cene: https://openai.com/api/pricing/
- Cloudflare Workers Free ima zasebne limite, ali nije potrebno platiti Replit.
- Worker odbija zahteve sa drugih browser Origin domena i ima osnovne limite po IP-u, ali to nije potpuna zastita od zloupotrebe niti globalno ogranicenje troskova.
- **Obavezno** u OpenAI podesavanjima postavi budzet, prati potrosnju, i po potrebi dodaj Cloudflare Rate Limiting / Turnstile pre nego sto veliki broj ucenika koristi aplikaciju.
- Ako korisnici unose licne podatke u mejlove, oni se salju OpenAI API-ju; izbegavati nepotrebne podatke.
- Ovo nije zvanicna ÖSD ocena.
- Pri promeni sadrzaja tasks.json, Cloudflare automatski preuzima osvezenu bazu u roku od najvise oko 1 sata, jer koristi javni GitHub izvor sa kesiranjem.
