import { isEscapeKey } from './utils.js';
import {resetEffects} from './effects.js';
import { pristine } from './form-validate.js';

const uploadForm = document.querySelector('.img-upload__form');
const fileUpload = document.querySelector('#upload-file');
const imgOverlay = document.querySelector('.img-upload__overlay');
const formElement = document.querySelector('.img-upload__form');
const submitButtonElement = formElement.querySelector('.img-upload__submit');
const closeButton = uploadForm.querySelector('.cancel');

// Функция закрытия окна загрузки изображения
const closeForm = () => {
  imgOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadForm.reset();
  resetEffects();
  pristine.reset();
  submitButtonElement.disabled = false;
};

fileUpload.addEventListener('change', () => {
  imgOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  // Обработчик событий клавиши Esc
  document.addEventListener('keydown', (evt) => {
    if(isEscapeKey(evt) &&
      // Фокус находится НЕ в поле хэштега
      !evt.target.classList.contains('text__hashtags') &&
      // И не в поле описания фото
      !evt.target.classList.contains('text__description')
    ) {
      evt.preventDefault();
    }
  });
});

// Обработчик событий кнопки закрытия окна загрузки
closeButton.addEventListener('click', closeForm);

export {closeForm};


