const pictureContainer = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content;
const template = templateFragment.querySelector('a');

const renderPicture = (picture) => {
  const element = template.cloneNode(true);
  element.querySelector('img').src = picture.url;
  element.querySelector('img').alt = picture.description;
  element.querySelector('.picture__comments').textContent = picture.comments.length;
  element.querySelector('.picture__likes').textContent = picture.likes;
  return element;
};

const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    fragment.appendChild(renderPicture(picture));
  });

  pictureContainer.appendChild(fragment);
};

export{renderPictures};

