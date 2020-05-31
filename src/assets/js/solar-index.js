import Render from './canvas/__render';
import Actions from './canvas/__actions';

document.addEventListener("DOMContentLoaded" , () => {
  Render.init();
  Actions.init();
});