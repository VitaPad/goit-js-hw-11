import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getPhotos } from './js/pixabay-api.js';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', function (event) {
  event.preventDefault();
  const searchInput = document.querySelector('.form-input');
  const searchQuery = searchInput.value.trim();

  if (searchQuery !== '') {
    getPhotos(searchQuery);
  } else {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  }
  searchInput.value = '';
});

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});
