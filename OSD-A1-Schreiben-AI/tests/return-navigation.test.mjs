import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const script = html.match(/<script id="demax-exercise-return">([\s\S]*?)<\/script>/)[1];
const course = 'https://de-max-a-1-aplikacija.replit.app/course/a1-priprema';

function setup({ depth = 0, length = 6, launched = true, referrer = '', embedded = false } = {}) {
  const timers = new Map(), listeners = new Map(), jumps = [], redirects = [];
  const links = [0, 1].map(() => ({ addEventListener(name, callback) { this[name] = callback; } }));
  const location = {
    search: `?demax_celina=20&demax_vezba=90${launched ? '&demax_return=1' : ''}`,
    href: 'https://biografije-a1.pages.dev/OSD-A1-Schreiben-AI/',
    replace(url) { redirects.push(url); },
  };
  const history = {
    state: { demaxReturnDepth: depth }, length,
    replaceState(state) { this.state = state; },
    go(delta) { jumps.push(delta); },
  };
  const window = {
    addEventListener(name, callback) { listeners.set(name, callback); },
    removeEventListener(name) { listeners.delete(name); },
    setTimeout(callback) { timers.set(1, callback); return 1; },
    clearTimeout(id) { timers.delete(id); },
    location,
  };
  window.top = embedded ? {} : window;
  const document = { referrer, querySelectorAll() { return links; } };
  vm.runInNewContext(script, { URL, URLSearchParams, document, history, location, window });
  return {
    links, jumps, redirects, timers, listeners,
    click(overrides = {}) {
      const event = { button: 0, defaultPrevented: false, preventDefault() { this.defaultPrevented = true; }, ...overrides };
      links[0].click(event);
      return event;
    },
  };
}

test('normal exit restores the retained menu and cancels fallback when the page leaves', () => {
  const page = setup();
  assert.equal(page.click().defaultPrevented, true);
  assert.deepEqual(page.jumps, [-1]);
  page.listeners.get('pagehide')();
  assert.equal(page.timers.size, 0);
  assert.deepEqual(page.redirects, []);
});

test('exit skips all mail history entries, including after Back changes the current depth', () => {
  for (const depth of [0, 1, 2, 3]) {
    const page = setup({ depth });
    page.click();
    assert.deepEqual(page.jumps, [-(depth + 1)]);
  }
});

test('double clicks do not skip beyond the De-Max menu', () => {
  const page = setup();
  page.click(); page.click();
  assert.deepEqual(page.jumps, [-1]);
});

test('direct, new-tab, embedded and modified-click openings retain a real course link', () => {
  for (const options of [{ launched: false }, { length: 1 }, { embedded: true }]) {
    const page = setup(options);
    assert.equal(page.click().defaultPrevented, false);
    assert.deepEqual(page.jumps, []);
    for (const link of page.links) {
      assert.equal(link.href, `${course}?celina=20&vezba=90`);
      assert.equal(link.target, '_top');
    }
  }
  const page = setup();
  assert.equal(page.click({ ctrlKey: true }).defaultPrevented, false);
  assert.deepEqual(page.jumps, []);
});

test('a De-Max referrer supports older launch links without the launch marker', () => {
  const page = setup({ launched: false, referrer: course });
  page.click();
  assert.deepEqual(page.jumps, [-1]);
});

test('blocked history falls back to the selected course, never the login root', () => {
  const page = setup();
  page.click();
  page.timers.get(1)();
  assert.deepEqual(page.redirects, [`${course}?celina=20&vezba=90`]);
});

test('the extra writer Vežbe button is removed; the two A1 Priprema arrows remain', () => {
  assert.equal(html.includes('>← Vežbe</a>'), false);
  assert.equal(html.includes('a1-prep-exit--writer'), false);
  assert.equal((html.match(/<a class="a1-prep-mini"/g) || []).length, 2);
});
