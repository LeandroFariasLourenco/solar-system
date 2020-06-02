import CacheSelectors from './../../../common/js/CacheSelectors';
import PLANETS from './../../../common/js/utils/planets';

const Render = {
  init: () => {
    Render.createCamera();
    Render.createScene();
    Render.createRenderer();
    Render.renderPlanets();
  },
  
  renderPlanets: () => {
    // const earthTexture = new THREE.TextureLoader().load(Textures.Earth)
    const globalMeshes = [];
    PLANETS.forEach( _planet => {
      const geometry = new THREE.SphereBufferGeometry( 
        _planet.geometry.radius   ,
        _planet.geometry.bordersX ,
        _planet.geometry.bordersY   
      );
      geometry.castShadow = !0;
      geometry.receiveShadow = 0;

      const texture = new THREE.TextureLoader()
      .load(_planet.texture);

      const material = new THREE.MeshLambertMaterial({
        map: texture
      });

      const mesh = new THREE.Mesh(geometry , material);
      mesh.position.x = _planet.position.x;
      mesh.position.y = _planet.position.y;
      mesh.position.z = _planet.position.z;
      window.scene.add(mesh);
      
      let { velocity } = _planet,
      polygon = mesh;
      globalMeshes.push({
        polygon ,
        velocity
      });
    })
    
    const light = new THREE.PointLight('white' , 1 , 0 , 2);
    light.position.set( window.innerWidth, 0, 0);
    light.castShadow = !0;
    window.scene.add(light);

    renderWebGl(); 
    function renderWebGl () {
      globalMeshes.forEach( mesh => (
        mesh.polygon.rotation.y += mesh.velocity 
      ))
      window.renderer.render(window.scene, window.camera);
      requestAnimationFrame(renderWebGl);
    }
  },
  

  createRenderer: () => {
    const canvasDOM = CacheSelectors['canvas'];
    window.renderer = new THREE.WebGLRenderer({
      canvas: canvasDOM,
      antialias: !0
    })
    window.renderer.shadowMap.enabled = !0;
    window.renderer.setPixelRatio(window.devicePixelRatio);
    window.renderer.setSize(window.innerWidth, window.innerHeight);
  },

  createCamera: () => {
    window.camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    )
  },

  createScene: () => window.scene = new THREE.Scene()

}

export default Render;