import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const script = html.match(/<script id="demax-exercise-return">([\s\S]*?)<\/script>/)[1];
const course = 'https://de-max-a-1-aplikacija.replit.app/course/a1-priprema';
const preview = 'https://navigation-test.archer.replit.dev';

function linksFor(returnUrl, referrer = '', ids = { demax_celina: '20', demax_vezba: '90' }, ancestors = [], historyOptions = {}) {
  const params = new URLSearchParams(ids);
  if (returnUrl) params.set('demax_return_url', returnUrl);
  const links = [0, 1].map(() => ({ attributes: {}, listeners: {}, addEventListener(type, fn) { this.listeners[type] = fn; }, setAttribute(key, value) { this.attributes[key] = value; } }));
  const assigned = [];
  const replaced = [];
  const location = { search: '?' + params, ancestorOrigins: ancestors, assign(url) { assigned.push(url); }, replace(url) { replaced.push(url); } };
  const document = { referrer, querySelectorAll() { return links; } };
  const requests = [];
  const traversals = [];
  const listeners = {};
  const cancelled = [];
  const window = { location, history: { state: null, length: 2, go(delta) { traversals.push(delta); }, ...historyOptions },
    parent: {postMessage(...args) { requests.push(args); }}, addEventListener(type, fn) {listeners[type] = fn;} };
  if (!ancestors.length) window.parent = window;
  const timers = [];
  vm.runInNewContext(script, { URL, URLSearchParams, document, location, window,
    clearTimeout(id) {cancelled.push(id);}, setTimeout(fn) {timers.push(fn); return timers.length;} });
  links.requests = requests;
  links.timers = timers;
  Object.assign(links, {traversals, assigned, replaced, listeners, cancelled});
  return links;
}

test('published opening returns to the selected published course, not the login root', () => {
  for (const link of linksFor(course)) {
    assert.equal(link.href, `${course}?celina=20&vezba=90`);
    assert.equal(link.target, '_self');
    assert.equal(link.attributes.rel, 'noopener');
  }
});

const sameTab = { demax_celina:'20', demax_vezba:'90', demax_same_tab:'1' };
function click(link, changes = {}) {
  let prevented = false;
  link.listeners.click({button:0, preventDefault() {prevented = true;}, ...changes});
  return prevented;
}
test('same-tab return replaces the exercise page with the selected De-Max menu', () => {
  const links = linksFor(course, course, sameTab);
  assert.equal(click(links[0]), true);
  assert.deepEqual(links.replaced, [`${course}?celina=20&vezba=90`]);
  assert.deepEqual(links.traversals, []);
  assert.deepEqual(links.assigned, []);
});
test('repeated exit taps cannot start duplicate navigations', () => {
  const links = linksFor(course, course, sameTab, [], {length:6, state:{demaxReturnDepth:3}});
  click(links[0]);
  click(links[1]);
  assert.deepEqual(links.replaced, [`${course}?celina=20&vezba=90`]);
  assert.deepEqual(links.traversals, []);
});
test('direct, untrusted and unmarked openings keep the safe menu href', () => {
  for (const [ref, ids] of [
    ['',sameTab], ['https://evil.test/',sameTab],
    [course,{demax_celina:'20',demax_vezba:'90'}],
  ]) {
    const links = linksFor(course, ref, ids);
    assert.equal(click(links[0]), false);
    assert.deepEqual(links.traversals, []);
    assert.deepEqual(links.replaced, []);
    assert.equal(links[0].href, `${course}?celina=20&vezba=90`);
  }
});
test('modified clicks retain native new-tab behavior', () => {
  const links = linksFor(course, course, sameTab);
  assert.equal(click(links[0], {ctrlKey:true}), false);
  assert.deepEqual(links.traversals, []);
});
test('embedded same-tab marked links still ask the authenticated parent, never traverse the wrapper', () => {
  const links = linksFor(course, course, sameTab, ['https://de-max-a-1-aplikacija.replit.app']);
  click(links[0]);
  assert.equal(links.requests.length, 1);
  assert.deepEqual(links.traversals, []);
});
test('an unrelated outer wrapper never has its joint history traversed by the exercise', () => {
  const links = linksFor(course, course, sameTab, ['https://replit.com']);
  assert.equal(click(links[0]), false);
  assert.deepEqual(links.traversals, []);
  assert.equal(links[0].target, '_self');
});

test('preview opening returns to the same preview session rather than the production login', () => {
  for (const link of linksFor(`${preview}/course/a1-priprema?celina=20&vezba=90`, `${preview}/`)) {
    assert.equal(link.href, `${preview}/course/a1-priprema?celina=20&vezba=90`);
  }
});

test('artifact prefix is retained and unrelated queries and hashes are discarded', () => {
  for (const link of linksFor(`${preview}/de-max/course/a1-priprema?arbitrary=1#anything`, `${preview}/`)) {
    assert.equal(link.href, `${preview}/de-max/course/a1-priprema?celina=20&vezba=90`);
  }
});

test('untrusted origins, mismatching previews, credentials, protocols and paths are rejected', () => {
  for (const target of [
    'https://evil.test/course/a1-priprema',
    'https://different.replit.dev/course/a1-priprema',
    'https://user:pass@de-max-a-1-aplikacija.replit.app/course/a1-priprema',
    'http://de-max-a-1-aplikacija.replit.app/course/a1-priprema',
    'javascript:alert(1)',
    `${preview}/admin/students`,
  ]) {
    for (const link of linksFor(target, `${preview}/`)) {
      assert.equal(link.href, `${course}?celina=20&vezba=90`);
    }
  }
});

test('invalid or missing menu IDs cannot change the target course or inject query data', () => {
  for (const ids of [{}, {demax_celina: '-1', demax_vezba: '90'}, {demax_celina: '20&redirect=evil', demax_vezba: '90'}]) {
    for (const link of linksFor(course, '', ids)) assert.equal(link.href, course);
  }
});

test('older direct openings keep the published course fallback', () => {
  for (const link of linksFor(undefined)) assert.equal(link.href, `${course}?celina=20&vezba=90`);
});

test('the exact old scroll3 opening without any context returns to its referring preview', () => {
  for (const link of linksFor(undefined, `${preview}/`, {v:'scroll3', utm_source:'chatgpt.com'})) {
    assert.equal(link.href, `${preview}/course/a1-priprema`);
    assert.equal(link.target, '_self');
  }
});

test('legacy embedded mail asks its own authenticated parent to return, never navigates an ancestor', () => {
  const links = linksFor(undefined, '', {v:'scroll3'}, [preview, 'https://replit.com']);
  for (const link of links) {
    assert.equal(link.href, `${preview}/course/a1-priprema`);
    assert.equal(link.target, '_self');
    let prevented = false;
    link.listeners.click({button:0, preventDefault() {prevented = true;}});
    assert.equal(prevented, true);
  }
  assert.equal(links.requests.length, 2);
  assert.equal(links.requests[0][0].type, 'demax:email-return');
  assert.equal(links.requests[0][1], preview);
  assert.equal(links.timers.length, 2);
});

test('a normal new launch inside the Replit preview stays in the same app frame', () => {
  for (const link of linksFor(`${preview}/course/a1-priprema`, `${preview}/`, undefined, ['https://replit.com'])) {
    assert.equal(link.href, `${preview}/course/a1-priprema?celina=20&vezba=90`);
    assert.equal(link.target, '_self');
  }
});

test('an unrelated ancestor cannot change the return origin or navigation context', () => {
  for (const link of linksFor(undefined, '', {v:'scroll3'}, ['https://evil.test'])) {
    assert.equal(link.href, course);
    assert.equal(link.target, '_self');
  }
});

test('the extra writer Vežbe button stays removed; both A1 Priprema arrows remain', () => {
  assert.equal(html.includes('>← Vežbe</a>'), false);
  assert.equal((html.match(/<a class="a1-prep-mini"/g) || []).length, 2);
});

test('before initialization a fast click cannot follow a stale production link or escape the app frame', () => {
  const anchors = html.match(/<a class="a1-prep-mini"[^>]*>/g);
  assert.equal(anchors.length, 2);
  for (const anchor of anchors) {
    assert.equal(/\bhref=/.test(anchor), false);
    assert.equal(anchor.includes('target="_top"'), false);
  }
});
