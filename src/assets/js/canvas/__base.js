import CacheSelectors from './../../../common/js/CacheSelectors';

const Methods = {
  init: () => {
    Methods.createRenderer(),
    Methods.createCamera();
    Methods.createScene();
  },

  renderPlanets: () => {
    requestAnimationFrame(Methods.renderWebGl);
  },

  renderWebGl: () => {
    window.renderer.render(window.scene, window.camera);
    requestAnimationFrame(Methods.renderWebGl);
  },

  createRenderer: () => {
    const canvasDOM = CacheSelectors['canvas'];
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasDOM,
      antialias: !0
    })
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    window.renderer;
  },

  createCamera: (_fov, _renderMin, _renderMax) => {
    window.camera = new THREE.PerspectiveCamera(
      30,
      window.innerHeight / window.innerWidth,
      0,
      5000
    )
  },

  createScene: () => window.scene = new THREE.Scene()

}

export default Methods;