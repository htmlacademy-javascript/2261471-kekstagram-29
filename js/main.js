import './data.js';
import './utils.js';
import './mini-pictures.js';

import {renderPictures} from './mini-pictures.js';
import {addPhotos} from './data.js';

renderPictures(addPhotos());

