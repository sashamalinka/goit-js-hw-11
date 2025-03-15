'use strict';

import axios from 'axios';

const myApiKey = '49169306-de27c58c14ea5b5fada8fc03c';
const pixabayUrl = 'https://pixabay.com/api/';

export const fetchImages = query =>
  axios
    .get(pixabayUrl, {
      params: {
        key: myApiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data.hits)
    .catch(error => {
      iziToast.error({
        message:
          'An error occurred while fetching images. Please try again later.',
        position: 'topRight',
      });
      console.error(error);
    });
    