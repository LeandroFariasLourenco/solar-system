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
const uranus = {
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
const neptune = {
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






export default [
  mercury ,
  venus ,
  earth , 
  mars , 
  jupiter ,
  saturn ,
  pluto
];