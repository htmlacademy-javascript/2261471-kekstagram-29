import './effects.js';
import './filters.js';
// import './form-validate.js';
import './utils.js';
import './loader.js';
import './mini-pictures.js';
import './big-picture.js';
import './scale.js';
import './server.js';
import './send.js';
import './user-photo.js';

import {renderPictures} from './mini-pictures.js';
import {onFormSubmit} from './form-validate.js';
import { getData } from './server.js';

let photos = [];

const onSuccess = (data) => {
  photos = data.slice();
  renderPictures(photos);
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
};

const onError = () => {
  const messageAlert = document.createElement('div');
  messageAlert.style.position = 'absolute';
  messageAlert.style.height = '36px';
  messageAlert.style.top = 0;
  messageAlert.style.left = 0;
  messageAlert.style.right = 0;
  messageAlert.style.fontSize = '30px';
  messageAlert.textContent = 'Ошибка загрузки :(';
  messageAlert.style.textAlign = 'center';
  messageAlert.style.color = 'white';
  messageAlert.style.backgroundColor = 'red';
  messageAlert.style.paddingTop = '10px';
  document.body.append(messageAlert);
};

getData(onSuccess, onError);

onFormSubmit();

export{photos};

