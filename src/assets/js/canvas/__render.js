import CacheSelectors from '../../../common/js/CacheSelectors';

const Render = {
  init: () => {
    Render.createCamera();
    Render.createScene();
    Render.createRenderer();
    Render.renderPlanets();
  },
  
  renderPlanets: () => {
    // const earthTexture = new THREE.TextureLoader().load(Textures.Earth)
    const earth = new THREE.SphereGeometry(100 , 200 , 200);
    const texture = new THREE.TextureLoader().load('./../textures/Earth-texture-map.jpg')
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    // texture.repeat.set( 4 , 4 );
    const earthMaterial = new THREE.MeshLambertMaterial({
      color: "white",
      map: texture
    });
    const mesh = new THREE.Mesh(earth , earthMaterial);
    mesh.position.x = 100;
    mesh.position.z = -1000;
    const light = new THREE.PointLight(0xffffff , 1 , 100);
    light.position.set( 50, 50, 50);
    window.scene.add(light);
    window.scene.add(new THREE.AmbientLight(0xFFFFFF , 0.5));
    window.scene.add(mesh);
    Render.renderWebGl();
  },
  
  renderWebGl: () => {
    window.renderer.render(window.scene, window.camera);
    requestAnimationFrame(Render.renderWebGl);
  },

  createRenderer: () => {
    const canvasDOM = CacheSelectors['canvas'];
    window.renderer = new THREE.WebGLRenderer({
      canvas: canvasDOM,
      antialias: !0
    })
    window.renderer.setPixelRatio(window.devicePixelRatio);
    window.renderer.setSize(window.innerWidth, window.innerHeight);
  },

  createCamera: () => {
    window.camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      0.1,
      5000
    )
  },

  createScene: () => window.scene = new THREE.Scene()

}

export default Render;