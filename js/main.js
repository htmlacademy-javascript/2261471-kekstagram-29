import './data.js';
import './effects.js';
// import './form-validate.js';
import './utils.js';
import './loader.js';
import './mini-pictures.js';
import './big-picture.js';
import './scale.js';

import {renderPictures} from './mini-pictures.js';
import {addPhotos} from './data.js';
import {onFormSubmit} from './form-validate.js';

renderPictures(addPhotos());

onFormSubmit();

