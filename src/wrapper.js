import Flipbook from './Flipbook.vue';

if (window.Vue && window.Vue.component) {
  // for Vue 2
  Vue.component('flipbook', Flipbook);
} else {
  // for Vue 3
  window.Flipbook = Flipbook;
}

export default Flipbook;