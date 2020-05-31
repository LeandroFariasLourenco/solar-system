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






export default [
  earth , 
  mars , 
  jupiter ,
  saturn
];