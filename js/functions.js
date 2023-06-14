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
