const bigPicture = document.querySelector('.big-picture');
const bigPictureImageContainer = document.querySelector('.big-picture__img');
const bigPictureImage = bigPictureImageContainer.querySelector('img');
const likesCount = document.querySelector('.likes-count');
const pictureCaption = document.querySelector('.social-caption');
const pictureCloseButton = bigPicture.querySelector('.big-picture__cancel');

const showBigPicture = (picture) => {
  const {url, comments, likes, description} = picture;

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  bigPictureImage.src = url;
  likesCount.textContent = likes;
  pictureCaption.textContent = description;

  // currentComments = picture.comments.slice();
};

// Кнопка закрытия картинки
pictureCloseButton.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

// Добавляем обработчик на клавишу клавиатуры
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
});


export {showBigPicture};
