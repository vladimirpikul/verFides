import videoControls from './modules/video-controls';
import headerScroll from './modules/scroll';
import servicesSlider from './modules/services-slider';
import currencySelect from './modules/currency-select';
import mobileBtn from './modules/mobile-menu';

$(document).ready(() => {
  videoControls();
  headerScroll();
  servicesSlider();
  currencySelect();
  mobileBtn();
});
