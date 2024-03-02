const API_KEY = '42651911 - b9e9cf23b752713c606cec899';
const BASE_URL = 'https://pixabay.com/api/';

export function getPhotos(searchQuery) {
  const searchparams = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'horizontal',
    safesearch: 'true',
    orientation: 'horizontal',
  });

  fetch(`${BASE_URL}?${searchparams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log(error));
}
