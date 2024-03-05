import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getPhotos } from './js/pixabay-api.js';
import { createMurkup } from './js/render-functions.js';

const container = document.querySelector('.gallery-container');
const searchInput = document.querySelector('.form-input');

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', function (event) {
  event.preventDefault();
  container.innerHTML = '<span class="loader"></span>';

  const searchQuery = searchInput.value.trim();

  if (searchQuery !== '') {
    getPhotos(searchQuery)
      .then(data => {
        createMurkup(data);
        lightbox.refresh();
      })
      .catch(error => console.log(error));
  } else {
    container.innerHTML = '';
    iziToast.error({
      title: 'Error',
      position: 'topRight',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  }
  searchInput.value = '';
});
