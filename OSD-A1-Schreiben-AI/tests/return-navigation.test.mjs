import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const script = html.match(/<script id="demax-exercise-return">([\s\S]*?)<\/script>/)[1];
const course = 'https://de-max-a-1-aplikacija.replit.app/course/a1-priprema';
const preview = 'https://navigation-test.archer.replit.dev';

function linksFor(returnUrl, referrer = '', ids = { demax_celina: '20', demax_vezba: '90' }) {
  const params = new URLSearchParams(ids);
  if (returnUrl) params.set('demax_return_url', returnUrl);
  const links = [0, 1].map(() => ({ attributes: {}, setAttribute(key, value) { this.attributes[key] = value; } }));
  const location = { search: '?' + params };
  const document = { referrer, querySelectorAll() { return links; } };
  vm.runInNewContext(script, { URL, URLSearchParams, document, location });
  return links;
}

test('published opening returns to the selected published course, not the login root', () => {
  for (const link of linksFor(course)) {
    assert.equal(link.href, `${course}?celina=20&vezba=90`);
    assert.equal(link.target, '_top');
    assert.equal(link.attributes.rel, 'noopener');
  }
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

test('the extra writer Vežbe button stays removed; both A1 Priprema arrows remain', () => {
  assert.equal(html.includes('>← Vežbe</a>'), false);
  assert.equal((html.match(/<a class="a1-prep-mini"/g) || []).length, 2);
});
