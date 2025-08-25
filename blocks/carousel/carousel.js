import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to div, div */
  const div = document.createElement('div');
  [...block.children].forEach((row) => {
    const div = document.createElement('div');
    while (row.firstElementChild) div.append(row.firstElementChild);
    [...div.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'carousel-image';
      else div.className = 'carousel-body';
    });
    div.append(div);
  });
  div.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.replaceChildren(div);
}