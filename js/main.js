import './data.js';
import './effects.js';
// import './form-validate.js';
import './utils.js';
import './loader.js';
import './mini-pictures.js';
import './big-picture.js';
import './scale.js';
import './server.js';

import {renderPictures} from './mini-pictures.js';
import {addPhotos} from './data.js';
import {onFormSubmit} from './form-validate.js';
import { getData, sendData } from './server.js';

// renderPictures(addPhotos());

let photos = [];

const onSuccess = (data) => {
  photos = data.slice();
  renderPictures(photos);
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
};

const onError = () => {
  const messageAlert = document.createElement('div');
  messageAlert.style.position = 'absolute';
  messageAlert.style.top = 0;
  messageAlert.style.left = 0;
  messageAlert.style.fontSize = '30px';
  messageAlert.style.textContent = 'Ошибка загрузки';
  messageAlert.style.color = 'white';
  messageAlert.style.backgroundColor = 'red';
  document.body.append(messageAlert);
};

getData(onSuccess, onError);

onFormSubmit();

