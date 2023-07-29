import { normalizeString } from './utils.js';
import { closeForm } from './loader.js';

const MAX_DESCRIPTION_LENGTH = 140;
const MAX_HASHTAG_QTY = 5;
const MAX_HASHTAG_LENGTH = 20;

const ErrorMessage = {
  INVALID_VALUE: 'Хэштег содержит недопустимые символы',
  INVALID_QUANTITY: `Нельзя указать больше ${MAX_HASHTAG_QTY} хэштегов`,
  INVALID_REPEAT: 'Хэштеги не должны повторяться',
  INVALID_HASHTAG_LENGTH: `Максимальная длина одного хэштега ${MAX_HASHTAG_LENGTH} символов, включая решётку`,
  INVALID_SEPARATOR: 'Хэштеги разделяются пробелами',
  INVALID_FIRST_SYMBOL: 'Хэштеги начинаются с символа #',
  LIMIT_DESCRIPTION_LENGTH: `Вы ввели максимально допустимое значение символов - ${MAX_DESCRIPTION_LENGTH}`,
};

const formElement = document.querySelector('.img-upload__form');
const hashtagInputElement = formElement.querySelector('.text__hashtags');
const submitButtonElement = formElement.querySelector('.img-upload__submit');

let errorAlert = '';
const error = () => errorAlert;

const hashtagValidator = (inputValue) => {
  errorAlert = '';

  const inputText = normalizeString(inputValue);

  if(!inputText) {
    return true;
  }

  const inputArray = inputText.split(/\s+/);

  if(!inputArray.length) {
    return true;
  }

  const rules = [
    {
      check: inputArray.some((hashtag) => hashtag.indexOf('#', 1) >= 1),
      error: ErrorMessage.INVALID_SEPARATOR,
    },
    {
      check: inputArray.some((hashtag) => hashtag[0] !== '#'),
      error: ErrorMessage.INVALID_FIRST_SYMBOL,
    },
    {
      check: inputArray.some((hashtag, _, array) => array.indexOf(hashtag) !== array.lastIndexOf(hashtag)),
      error: ErrorMessage.INVALID_REPEAT,
    },
    {
      check: inputArray.some((hashtag) => hashtag.length > MAX_HASHTAG_LENGTH),
      error: ErrorMessage.INVALID_HASHTAG_LENGTH,
    },
    {
      check: inputArray.length > MAX_HASHTAG_QTY,
      error: ErrorMessage.INVALID_QUANTITY,
    },
    {
      check: inputArray.some((hashtag) => !/^#[a-zа-яё0-9]{1,19}$/i.test(hashtag)),
      error: ErrorMessage.INVALID_VALUE,
    },
  ];

  return rules.every((rule) => {
    const isInvalid = rule.check;
    if (isInvalid) {
      errorAlert = rule.error;
    }
    return !isInvalid;
  });
};

const pristine = new Pristine (formElement, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'field-validate--invalid',
  successClass: 'field-validate--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
  errorTextClass: 'form-error',
});

pristine.addValidator(hashtagInputElement, hashtagValidator, error, 2, false);

// Функция блокировки кнопки опубликовать при неправильном значении хэштега
const onHashtagInput = () => {
  if (pristine.validate()) {
    submitButtonElement.disabled = false;
  } else {
    submitButtonElement.disabled = true;
  }
};

hashtagInputElement.addEventListener('input', onHashtagInput);

const onFormSubmit = () => {
  submitButtonElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    closeForm();
  });
};

export {onFormSubmit};

