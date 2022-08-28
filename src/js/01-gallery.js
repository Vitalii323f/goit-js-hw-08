import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const listGallery = document.querySelector('.gallery');

// Создаем переменную для добавления разметки

const markupGalleryEl = markupGalleryList(galleryItems);
//console.log(markupGalleryEl)

function markupGalleryList() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class = gallery_lists>
         <a class = gallery__item href='${original}'>
      <img
      class= 'gallery__image'
      src= '${preview}'
      
      alt='${description}'
    />
  </a>
</li>`;
    })
    .join('');
}

// Вставляем разметку в html
listGallery.insertAdjacentHTML('afterbegin', markupGalleryEl);
console.log(listGallery);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
