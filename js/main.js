const PHOTO_COUNT = 25;
const Likes = {
  MIN: 15,
  MAX: 200
};

const Comments = {
  MIN: 0,
  MAX: 30
};

const DESCRIPTION = [
  'Солнышко',
  'Поздравили жителей села с прекрасным настроением',
  'Красота!',
  'Mood...',
  'Literally me',
  'POV'
];

const NAMES = [
  'Иоганн',
  'Рихард',
  'Валерий Абисалович',
  'Кристоф',
  'Сиплый',
  'Сплинтер',
  'Хмырь',
  'Сергей Петрович',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// Функция для нахождения случайного числа
const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Создаём случайный комментарий
const createComment = () => ({
  id: getRandomInteger(1, 1000),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
});
// Случайное число комментариев
// const COMMENTS_COUNT = getRandomInteger(0, 30);

// Создаём массив со случайным числом комментариев
const addComments = Array.from({length: getRandomInteger(Comments.MIN, Comments.MAX)}, createComment);

// Создаем фотографию
// Что такое id? Кто его определит?!!!
const createPhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
  likes: getRandomInteger(Likes.MIN, Likes.MAX),
  comments: addComments,
});

const photos = [];

// Создаём функцию, которая будет добавлять фотографии в массив
const addPhotos = () => {
  for (let i = 1; i <= PHOTO_COUNT; i++) {
    photos.push(createPhoto(i));
  }
  return photos;
};

addPhotos();

console.log(photos);

// Id и url всё же повторяются
// Как сделать так, чтобы количество комментариев под фото были разными???
