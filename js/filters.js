import {debounce, shuffleArray} from './utils.js';
import { renderPictures, removePictures } from './mini-pictures.js';
import {photos} from './main.js';

const sectionFilter = document.querySelector('.img-filters');
const filtersForm = sectionFilter.querySelector('.img-filters__form');

const COUNT_OF_FILTER = 10;
const ACTIVE_CLASS = 'img-filters__button--active';

const availableFilters = {
  'filter-default': () => photos.slice(),
  'filter-random': () => shuffleArray(photos.slice()).slice(0, COUNT_OF_FILTER),
  'filter-discussed': () => photos.slice().sort((firstElement, secondElement) => secondElement.comments.length - firstElement.comments.length),
};

const onFiltersFormClick = debounce((evt) => {
  if(evt.target.tagName === 'BUTTON') {
    const selectedButton = filtersForm.querySelector(`.${ACTIVE_CLASS}`);

    if(selectedButton) {
      selectedButton.classList.remove(ACTIVE_CLASS);
    }

    evt.target.classList.add(ACTIVE_CLASS);

    removePictures();

    renderPictures(availableFilters[evt.target.id]());
  }
});

filtersForm.addEventListener('click', onFiltersFormClick);
