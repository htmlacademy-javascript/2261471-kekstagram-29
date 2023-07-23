const imgLoad = document.querySelector('.img-upload__input');
const imgOverlay = document.querySelector('.img-upload__overlay');

imgLoad.addEventListener('click', () => {
  imgOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

});
