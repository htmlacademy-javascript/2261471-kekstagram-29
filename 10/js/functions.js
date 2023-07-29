// eslint-disable-next-line no-unused-vars
const checkLength = (anystring, number) => anystring.length <= number;

checkLength('Что делал слон когда пришёл, 15');

const checkPalindrom = (string) => {
  const stringForward = string.replaceAll(' ', '').toLowerCase();
  let stringReverse = '';

  for (let i = stringForward.length - 1; i >= 0; i--) {
    stringReverse += stringForward.at(i);
  }

  return (stringForward === stringReverse);
};

checkPalindrom(' А роза упала на лапу азора');

const createNumber = (string) => {
  if (string && string.length === 0) {
    return NaN;
  }

  return parseInt(string.replace(/\D+/g, ''), 10);
};

createNumber('33 коровы, ни одного быка');

// Функция, считающая продолжительность рабочего дня
const sayTime = (startDay, endDay, meet, duration) => {
  // Пересчитываем окончание рабочего дня в минуты
  const arrayEnd = endDay.split(':');
  const objEnd = {};
  objEnd.hours = Number(arrayEnd[0]);
  objEnd.minutes = Number(arrayEnd[1]);
  // Проверка на то, чтоб конец рабочего дня не заканчивался в 0 часов
  if (objEnd.hours === 0) {
    objEnd.hours = 24;
  }
  objEnd.totalMinutes = (objEnd.hours * 60) + objEnd.minutes;
  // Пересчитываем время встречи в минутах
  const arrayMeet = meet.split(':');
  const objMeet = {};
  objMeet.hours = Number(arrayMeet[0]);
  objMeet.minutes = Number(arrayMeet[1]);
  objMeet.totalMinutes = (objMeet.hours * 60) + objMeet.minutes;

  const timeLeft = objEnd.totalMinutes - objMeet.totalMinutes;
  return (timeLeft >= duration);
};

sayTime('10:00', '00:00', '23:00', 60);
