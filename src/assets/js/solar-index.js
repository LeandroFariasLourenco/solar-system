import Render from './canvas/__render';
import Actions from './canvas/__actions';

const boot = () => {
  Render.init();
  Actions.init();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}