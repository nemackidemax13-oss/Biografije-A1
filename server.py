"""Replit HTTP host for De-Max A1 – Opis slike.
Pure Python standard library: no pip install, build step, or tokens needed.
The AI analysis still uses the Cloudflare Worker URL configured in AI.html.
"""
import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parent
APP = "/A1-OPIS-SLIKE-9-KORAKA/AI.html"

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self):
        path = unquote(urlsplit(self.path).path)
        if path in ("/", "/index.html"):
            self.send_response(302)
            self.send_header("Location", APP)
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            return
        if path == "/health":
            body = b"De-Max A1 Replit server OK"
            self.send_response(200)
            self.send_header("Content-Type", "text/plain; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        super().do_GET()

    def end_headers(self):
        self.send_header("X-Content-Type-Options", "nosniff")
        super().end_headers()

if __name__ == "__main__":
    port = int(os.environ.get("PORT", "3000"))
    print(f"De-Max A1: http://0.0.0.0:{port}{APP}", flush=True)
    ThreadingHTTPServer(("0.0.0.0", port), Handler).serve_forever()
