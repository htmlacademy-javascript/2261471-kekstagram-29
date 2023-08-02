import { showBigPicture } from './big-picture.js';

const pictureContainer = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content;
const template = templateFragment.querySelector('a');

const renderPicture = (picture) => {
  const {url, comments, likes, description} = picture;
  const element = template.cloneNode(true);

  element.querySelector('img').src = url;
  element.querySelector('img').alt = description;
  element.querySelector('.picture__comments').textContent = comments.length;
  element.querySelector('.picture__likes').textContent = likes;

  const onElementClick = (evt) => {
    evt.preventDefault();
    showBigPicture(picture);
  };

  element.addEventListener('click', onElementClick);

  return element;
};

const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    fragment.appendChild(renderPicture(picture));
  });

  pictureContainer.appendChild(fragment);
};

const removePictures = () => {
  const photos = document.querySelectorAll('.picture');
  if (photos) {
    photos.forEach((photo) => photo.remove());
  }
};

export{renderPictures, removePictures};

