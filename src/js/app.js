import videoControls from './modules/video-controls';
import headerScroll from './modules/scroll';
import servicesSlider from './modules/services-slider';
import currencySelect from './modules/currency-select';

$(document).ready(() => {
  videoControls();
  headerScroll();
  servicesSlider();
  currencySelect();
});
