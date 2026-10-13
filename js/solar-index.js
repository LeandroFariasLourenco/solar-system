(function (factory) {
  typeof define === 'function' && define.amd ? define('solarIndex', factory) :
  factory();
})((function () { 'use strict';

  var CacheSelectors = {
    canvas: document.querySelector(".js--canvas"),
    openOptions: document.querySelector(".js--activate--actions"),
    avaliableOptions: document.querySelector(".js--options--wrapper"),
    closeAvaliableOptions: document.querySelector(".js--close--options"),
    keyboardKeys: document.querySelectorAll(".js--keyboard-key")
  };

  const mercury = {
    geometry: {
      radius: 60,
      bordersX: 200,
      bordersY: 200
    },
    position: {
      x: -300,
      y: -100,
      z: -600
    },
    velocity: 0.0020,
    texture: './../textures/Mercury-texture-map.jpg'
  };
  const venus = {
    geometry: {
      radius: 80,
      bordersX: 200,
      bordersY: 200
    },
    position: {
      x: -30,
      y: -100,
      z: -600
    },
    velocity: 0.0014,
    texture: './../textures/Venus-texture-map.jpg'
  };
  const earth = {
    geometry: {
      radius: 100,
      bordersX: 200,
      bordersY: 200
    },
    position: {
      x: -300,
      y: 50,
      z: -700
    },
    velocity: 0.0008,
    texture: './../textures/Earth-texture-map.jpg'
  };
  const mars = {
    geometry: {
      radius: 80,
      bordersX: 200,
      bordersY: 200
    },
    position: {
      x: -300,
      y: 0,
      z: -900
    },
    velocity: 0.0007,
    texture: './../textures/Mars-texture-map.jpg'
  };
  const jupiter = {
    geometry: {
      radius: 600,
      bordersX: 200,
      bordersY: 200
    },
    position: {
      x: -300,
      y: 0,
      z: -3000
    },
    velocity: 0.0003,
    texture: './../textures/Jupiter-texture-map.jpg'
  };
  const saturn = {
    geometry: {
      radius: 400,
      bordersX: 200,
      bordersY: 200
    },
    position: {
      x: -900,
      y: 600,
      z: -3800
    },
    velocity: 0.00005,
    texture: './../textures/Saturn-texture-map.jpg'
  };
  const pluto = {
    geometry: {
      radius: 20,
      bordersX: 200,
      bordersY: 200
    },
    position: {
      x: 0,
      y: 500,
      z: -2000
    },
    velocity: 0.00003,
    texture: './../textures/Pluto-texture-map.jpg'
  };
  var PLANETS = [mercury, venus, earth, mars, jupiter, saturn, pluto];

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
      PLANETS.forEach(_planet => {
        const geometry = new THREE.SphereBufferGeometry(_planet.geometry.radius, _planet.geometry.bordersX, _planet.geometry.bordersY);
        geometry.castShadow = !0;
        geometry.receiveShadow = 0;
        const texture = new THREE.TextureLoader().load(_planet.texture);
        const material = new THREE.MeshLambertMaterial({
          map: texture
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = _planet.position.x;
        mesh.position.y = _planet.position.y;
        mesh.position.z = _planet.position.z;
        window.scene.add(mesh);
        let {
            velocity
          } = _planet,
          polygon = mesh;
        globalMeshes.push({
          polygon,
          velocity
        });
      });
      const light = new THREE.PointLight('white', 1, 0, 2);
      light.position.set(window.innerWidth, 0, 0);
      light.castShadow = !0;
      window.scene.add(light);
      renderWebGl();
      function renderWebGl() {
        globalMeshes.forEach(mesh => mesh.polygon.rotation.y += mesh.velocity);
        window.renderer.render(window.scene, window.camera);
        requestAnimationFrame(renderWebGl);
      }
    },
    createRenderer: () => {
      const canvasDOM = CacheSelectors['canvas'];
      window.renderer = new THREE.WebGLRenderer({
        canvas: canvasDOM,
        antialias: !0
      });
      window.renderer.shadowMap.enabled = !0;
      window.renderer.setPixelRatio(window.devicePixelRatio);
      window.renderer.setSize(window.innerWidth, window.innerHeight);
    },
    createCamera: () => {
      window.camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 10000);
    },
    createScene: () => window.scene = new THREE.Scene()
  };

  const Actions = {
    init: () => {
      Actions.openKeyboardOptions();
      Actions.activateCameraKeys();
    },
    openKeyboardOptions: () => {
      const $showActions = CacheSelectors['openOptions'],
        $avaliableActions = CacheSelectors['avaliableOptions'],
        $closeAvaliableActions = CacheSelectors['closeAvaliableOptions'];
      $showActions.addEventListener("click", () => {
        $avaliableActions.classList.remove("hidden");
        $showActions.classList.add("is--closed");
      });
      $closeAvaliableActions.addEventListener("click", () => {
        $avaliableActions.classList.add("hidden");
        $showActions.classList.remove("is--closed");
      });
    },
    activateCameraKeys: () => {
      const $keys = CacheSelectors['keyboardKeys'];
      document.addEventListener("keyup", event => {
        $keys.forEach(key => {
          if (!key.classList.contains("is--active")) return;
          key.classList.remove("is--active");
        });
      });
      document.addEventListener("keydown", event => {
        const movement = {
          87: () => {
            Actions.toggleActiveKey($keys[0], event.keyCode);
            window.camera.translateZ(-5);
          },
          65: () => {
            Actions.toggleActiveKey($keys[1], event.keyCode);
            window.camera.rotateY(+0.01);
          },
          68: () => {
            Actions.toggleActiveKey($keys[3], event.keyCode);
            window.camera.rotateY(-0.01);
          },
          83: () => {
            Actions.toggleActiveKey($keys[2], event.keyCode);
            window.camera.translateZ(+5);
          },
          "default": () => {
            return;
          }
        };
        movement[event.keyCode]();
      });
    },
    toggleActiveKey: (_domKey, _keycode) => {
      _domKey.classList.add("is--active");
      _domKey.setAttribute("keycode", _keycode);
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    Render.init();
    Actions.init();
  });

}));
