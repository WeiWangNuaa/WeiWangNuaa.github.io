/* Lightweight progressive enhancements; the website works without a build system. */
(() => {
 const menu = document.querySelector('.menu-toggle');
 const nav = document.querySelector('.site-nav');
 if (menu && nav) {
   menu.addEventListener('click', () => {
     const open = menu.getAttribute('aria-expanded') !== 'true';
     menu.setAttribute('aria-expanded', String(open));
     nav.classList.toggle('is-open', open);
   });
   nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
     menu.setAttribute('aria-expanded', 'false');
     nav.classList.remove('is-open');
   }));
   document.addEventListener('keydown', e => { if (e.key === 'Escape') { menu.setAttribute('aria-expanded','false'); nav.classList.remove('is-open'); } });
 }
 const yr = document.getElementById('copyright-year');
 if (yr) yr.textContent = new Date().getFullYear();
 const items = Array.from(document.querySelectorAll('[data-pub-year]'));
 const search = document.getElementById('publication-search');
 const chips = Array.from(document.querySelectorAll('.filter-chip'));
 const empty = document.getElementById('publication-empty');
 const groups = document.querySelectorAll('[data-publication-group]');
 if (items.length) {
   let year = 'all';
   const update = () => {
     const query = (search?.value || '').toLocaleLowerCase().trim();
     let shown = 0;
     items.forEach(item => {
       const match = (year === 'all' || item.dataset.pubYear === year) && (!query || item.textContent.toLocaleLowerCase().includes(query));
       item.hidden = !match;
       if (match) shown++;
     });
     groups.forEach(group => {
       group.hidden = !group.querySelector('[data-pub-year]:not([hidden])');
     });
     if (empty) empty.hidden = shown > 0;
   };
   chips.forEach(chip => chip.addEventListener('click', () => {
     year = chip.dataset.year;
     chips.forEach(c => { const selected = c === chip; c.classList.toggle('selected', selected); c.setAttribute('aria-pressed', String(selected)); });
     update();
   }));
   search?.addEventListener('input', update);
 }
})();
