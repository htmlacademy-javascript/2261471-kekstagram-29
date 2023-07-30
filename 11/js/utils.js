// Функция для нахождения случайного числа
const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Функция проверки клавиши Esc
// const isEscapeKey = (evt) => {
//   // if(evt.key === Keys.ESCAPE || evt.key === Keys.ESC) {}
// };

const normalizeString = (string) => string.toLowerCase().trim();

export const closeModal = () => {
  const popup = document.querySelector('.error') || document.querySelector('.success');
  if (popup) {
    popup.remove();
  }
};

export {getRandomInteger, normalizeString};
