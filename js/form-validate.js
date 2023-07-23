const formElement = document.querySelector('.img-upload__form');
const hashtagInputElement = formElement.querySelector('.text__hashtags');
// const descriptionInputElement = formElement.querySelector('.text__description');
// const submitButtonElement = formElement.querySelector('.img-upload__submit');

const MAX_DESCRIPTION_LENGTH = 140;
const MAX_HASHTAG_QTY = 5;
const MAX_HASHTAG_LENGTH = 20;

const ErrorMessage = {
  INVALID_VALUE: 'Хэштег содержит недопустимые символы',
  INVALID_QUANTITY: `Нельзя указать больше ${MAX_HASHTAG_QTY} хэштегов`,
  INVALID_REPEAT: 'Хэштеги не должны повторяться',
  INVALID_HASHTAG_LENGTH: `Максимальная длина одного хэштега ${MAX_HASHTAG_LENGTH} символов, включая решётку`,
  INVALID_SEPARATOR: 'Хэштеги разделяются пробелами',
  IVALID_FIRST_SYMBOL: 'Хэштеги начинаются с символа #',
  LIMIT_DESCRIPTION_LENGTH: `Вы ввели максимально допустимое значение символов - ${MAX_DESCRIPTION_LENGTH}`,

};

let errorAlert = '';
const error = () => errorAlert;

const hashtagValidator = (inputValue) => {
  errorAlert = '';

  const inputText = inputValue.toLowerCase().trim();

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
      error: ErrorMessage.INVALID_HASHTAH_LENGTH,
    },
    {
      check: inputArray.length > MAX_HASHTAG_QTY,
      error: ErrorMessage.INVALID_QUANTITY,
    },
    {
      check: inputArray.some((hashtag) => !/^#[a-zа-яё0-9]{1-19}$/i.test(hashtag)),
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
  classTo: 'field-validate',
  errorClass: 'field-validate--invalid',
  successClass: 'field-validate--valid',
  errorTextParent: 'field-validate',
  errorTextTag: 'p',
  errorTextClass: 'form-error',
});

pristine.addValidator(hashtagInputElement, hashtagValidator, error, 2, false);
