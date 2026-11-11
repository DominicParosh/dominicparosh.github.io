// Post-build checks: content is in the static HTML (no JS needed), internal links resolve,
// and a count of TODO markers still waiting for real content.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const files = [];
const walk = (d) => readdirSync(d).forEach((f) => {
  const p = join(d, f);
  statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p);
});
walk(dist);

let failures = 0;
const fail = (m) => { failures++; console.error('FAIL', m); };

const home = readFileSync(join(dist, 'index.html'), 'utf8');
for (const must of ['know when they', 'GenTaaS', 'EGR-SRC', 'Verizon', 'not going to guess']) {
  if (!home.includes(must)) fail(`home page HTML is missing "${must}"`);
}
if (/<div[^>]*data-panel[^>]*hidden/.test(home)) fail('Ask panels are hidden in static HTML');

let todos = 0;
for (const f of files) {
  const html = readFileSync(f, 'utf8');
  todos += (html.match(/data-todo/g) || []).length;
  for (const [, href] of html.matchAll(/href="(\/[^"#]*)/g)) {
    if (href.startsWith('/_astro') || href.endsWith('.xml') || href.endsWith('.svg')) continue;
    const target = href.endsWith('/') ? join(dist, href, 'index.html') : join(dist, href);
    if (!existsSync(target) && !existsSync(target + '.html') && !existsSync(join(dist, href + '/index.html')))
      fail(`${f}: broken internal link ${href}`);
  }
}
console.log(`${files.length} pages checked, ${todos} TODO markers left to fill in.`);
process.exit(failures ? 1 : 0);
