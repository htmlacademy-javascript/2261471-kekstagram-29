// function checkLength (anystring, number) {
//   return anystring.length <= number;
// }

// checkLength();

function checkPalindrom (string) {
  const stringForward = string.replaceAll(' ', '').toLowerCase();
  let stringReverse = '';

  for (let i = stringForward.length - 1; i >= 0; i--) {
    stringReverse += stringForward.at(i);
  }

  if (stringForward === stringReverse) {
    return 'Палиндромище!';
  } else {
    return 'Не в этот раз';
  }
}

console.log(checkPalindrom(' А роза упала на лапу азора'));
