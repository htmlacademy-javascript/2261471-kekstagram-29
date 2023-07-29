const EFFECTS = {
  none: {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
    start: 100,
  },
  chrome: {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  sepia: {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  marvin: {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  phobos: {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  heat: {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  }
};

const DEFAULT_EFFECT = EFFECTS['none'];

const uploadForm = document.querySelector('.img-upload__form');
const effectsList = uploadForm.querySelector('.effects__list');
const picture = uploadForm.querySelector('.img-upload__preview img');
const effectSlider = uploadForm.querySelector('.effect-level__slider');
const effectLevelValue = uploadForm.querySelector('.effect-level__value');
const effectLevel = uploadForm.querySelector('.effect-level');

let selectedEffect = DEFAULT_EFFECT;

const updateSlider = () => {
  effectSlider.classList.remove('hidden');
  effectLevel.classList.remove('hidden');
  effectSlider.noUiSlider.updateOptions({
    range: {
      min: selectedEffect.min,
      max: selectedEffect.max,
    },
    step: selectedEffect.step,
    start: selectedEffect.max,
  });

  if (selectedEffect === DEFAULT_EFFECT) {
    effectSlider.classList.add('hidden');
    effectLevel.classList.add('hidden');
  }
};

const onEffectListClick = (evt) => {
  if(evt.target.type === 'radio') {
    selectedEffect = EFFECTS[evt.target.value];
    console.log(123)
    updateSlider();
  }
};

noUiSlider.create(effectSlider, {
  range: {
    'min': DEFAULT_EFFECT.min,
    'max': DEFAULT_EFFECT.max,
  },
  step: DEFAULT_EFFECT.step,
  start: DEFAULT_EFFECT.max,
  connect: 'lower',
});

const onEffectSliderUpdate = () => {
  picture.style.filter = 'none';
  picture.className = '';
  effectLevelValue.value = '';
  if (selectedEffect === DEFAULT_EFFECT) {
    return;
  }
  const sliderValue = effectSlider.noUiSlider.get();
  picture.style.filter = `${selectedEffect.style}(${sliderValue}${selectedEffect.unit})`;
  picture.classList.add(`effect_preview--${selectedEffect.name}`);
  effectLevelValue.value = sliderValue;
};

updateSlider();

effectsList.addEventListener('click', onEffectListClick);
effectSlider.noUiSlider.on('update', onEffectSliderUpdate);

const resetEffects = () => {
  selectedEffect = DEFAULT_EFFECT;
  updateSlider();
};

export {resetEffects};
