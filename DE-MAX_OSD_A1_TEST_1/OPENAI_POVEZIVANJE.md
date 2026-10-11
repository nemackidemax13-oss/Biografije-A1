# DE-MAX A1 — OpenAI provera mejla (Rafaela)

Izvor: originalni zadatak „Schreiben, Aufgabe 2“ iz ÖSD A1 testa. GitHub Pages je statičan i ne čuva bezbedno API ključeve. Zato je potreban server za proveru mejla.

1. Na Replit-u napravi **Node.js** aplikaciju (Node 20+).
2. Prekopiraj sadržaj fajla `REPLIT_OPENAI_MAIL_SERVER.mjs` u Replit. Pokreni sa `node REPLIT_OPENAI_MAIL_SERVER.mjs`.
3. U **Replit Secrets** dodaj ključ pod nazivom `OPENAI_API_KEY`. Ne ubacuj ga u GitHub, frontend HTML, URL ni u razgovor.
4. Objavi Replit aplikaciju kao HTTPS servis i proveri da adresa `https://TVOJ-SERVER/health` vraća `{"ok":true}`.
5. U GitHub fajlu `DE-MAX_OSD_A1_TEST_1/index.html`, nađi `const RAFAELA_CHECK_ENDPOINT='';` i postavi `https://TVOJ-SERVER/api/rafaela-review`.
6. Ažuriraj GitHub Pages i proveri tri uneta odgovora. Bodovi 0–10 se upisuju u rezultate tek kada server zaista vrati uspešnu AI procenu.

**Važno:** Postavi projektni budžet i ograničenja potrošnje OpenAI API-ja. Server ima osnovno ograničenje zahteva po IP adresi, ali to nije zamena za naprednu zaštitu od zloupotrebe. Ponašanje studentskih browsera, CORS i mrežne okolnosti mogu zahtevati dodatnu konfiguraciju.

API ključ za OpenAI plaća se odvojeno od pretplate na ChatGPT.
