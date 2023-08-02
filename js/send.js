import { closeForm } from './loader.js';
import { sendData } from './server.js';
import { isEscapeKey } from './utils.js';

const uploadForm = document.querySelector('.img-upload__form');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');

const closePopup = () => {
  const popup = document.querySelector('.error') || document.querySelector('.success');
  popup.remove();
};

const onEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    closePopup();
  }
};

const onPopupClick = (evt) => {
  if (!evt.target.classList.contains('success__inner') && !evt.target.classList.contains('error__inner')) {
    evt.preventDefault();
    closePopup();
    document.removeEventListener('keydown', onEscKeydown);
  }
};

const showMessage = (message) => {
  message.addEventListener('click', onPopupClick);
  document.body.appendChild(message);
  document.addEventListener('keydown', onEscKeydown);
};

const showErrorMessage = () => {
  const messageFragment = errorMessage.cloneNode(true);
  showMessage(messageFragment);
};

// Функция отображения сообщения об успехе
const showSuccessMessage = () => {
  const messageFragment = successMessage.cloneNode(true);
  showMessage(messageFragment);
};

const onSuccess = () => {
  closeForm();
  showSuccessMessage();
};

const onError = () => {
  showErrorMessage();
};

const onUploadFormSubmit = (evt) => {
  evt.preventDefault();
  sendData(onSuccess, onError, 'POST', new FormData(evt.target));
};

uploadForm.addEventListener('submit', onUploadFormSubmit);
