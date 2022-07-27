// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

function createItem(array) {
    return array.reduce((acc, item) => acc + `
    <a class="gallery__item" href="${item.original}">
    <img class="gallery__image" 
    src="${item.preview}" 
    alt="${item.description}" />
    </a>`, ''); 
}

const list = createItem(galleryItems);
const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('beforeend', list);

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
