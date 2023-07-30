import { closeForm } from './loader.js';
import { sendData } from './server.js';

const uploadForm = document.querySelector('.img-upload__form');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');

// const closePopup = () => {
//   const popup = document.querySelector('.error') || document.querySelector('.success');
//   popup.remove();
// };

const onEscKeydown = () => {
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeForm();
    }
  });
  document.removeEventListener('keydown', onEscKeydown);
};

const onPopupClick = (evt) => {
  const popup = document.querySelector('.error') || document.querySelector('.success');
  if (popup && !evt.target.closest('success__inner') && !evt.target.closest('error__inner')) {
    evt.preventDefault();
    closeForm();
    document.removeEventListener('keydown', onEscKeydown);
  }
};

const showMessage = (message) => {
  message.addEventListener('click', onPopupClick);
  document.body.appendChild(message);
  document.addEventListener('keydown', onEscKeydown);
};

const showErrorMessage = () => {
  const messageFragment = (errorMessage.cloneNode(true));
  const errorButton = messageFragment.querySelector('.error__button');

  showMessage(messageFragment);

  errorButton.addEventListener('click', () => {
    document.querySelector('.img-upload__overlay').classList.remove('hidden');
    closeForm();
  });
};

const showSuccessMessage = () => {
  const messageFragment = (successMessage.cloneNode(true));
  const successButton = messageFragment.querySelector('.success__button');

  showMessage(messageFragment);

  successButton.addEventListener('click', () => {
    document.querySelector('.img-upload__overlay').classList.remove('hidden');
    closeForm();
  });
};

// // Показывает сообщение
// const showMessage = () => {
//   if (onSuccess) {
//     document.body.appendChild(successMessage.cloneNode(true));
//   } else {
//     document.body.appendChild(errorMessage.cloneNode(true));
//   }
// };

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
