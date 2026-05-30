"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var THREE = _interopRequireWildcard(require("three"));

var _GLTFLoader = require("three/examples/jsm/loaders/GLTFLoader.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var sc = new THREE.Scene();
sc.background = new THREE.Color(0x000000);
var cam = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var loader = new _GLTFLoader.GLTFLoader();
var model;
loader.load('/Untitled.gltf', function (gltf) {
  model = gltf.scene;
  sc.add(model);
  model.rotation.x = 90;
  model.rotation.y = 135.1;
  model.rotation.z = 89.5;
  model.position.set(5, 2, -2);
});
var ambientLight = new THREE.AmbientLight(0xffffff, 1);
sc.add(ambientLight);
var dirLight = new THREE.DirectionalLight(0xffffff, 2);
dirLight.position.set(5, 5, 5);
sc.add(dirLight);
var material = new THREE.MeshBasicMaterial({
  color: 0x00ff00
});
var donut_mat = new THREE.MeshBasicMaterial({
  color: 0xffffff
});
var cube = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.3, 1.3), material);
sc.add(cube);
cube.position.set(-3, -1, 2);
var cube2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
sc.add(cube2);
cube2.position.set(THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(-20));
var cube3 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), material);
sc.add(cube3);
cube3.position.set(THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(-20));
var cube4 = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 1.5), material);
sc.add(cube4);
cube4.position.set(THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(-20));
var cube5 = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, 0.3), material);
sc.add(cube5);
cube5.position.set(THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(-20));
var cube6 = new THREE.Mesh(new THREE.BoxGeometry(2.5, 2.5, 2.5), material);
sc.add(cube6);
cube6.position.set(THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(-20));
var cube7 = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.8), material);
sc.add(cube7);
cube7.position.set(THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(-20));
var cube8 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 1.2), material);
sc.add(cube8);
cube8.position.set(THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(-20));
var cube9 = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.7, 0.7), material);
sc.add(cube9);
cube9.position.set(THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(-20));
var cube10 = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), material);
sc.add(cube10);
cube10.position.set(THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(-20));
var cube11 = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.4), material);
sc.add(cube11);
cube11.position.set(THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(-20));
var cube12 = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.8, 1.8), material);
sc.add(cube12);
cube12.position.set(THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(-20));
var cube13 = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.6, 0.6), material);
sc.add(cube13);
cube13.position.set(THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(-20));
var cube14 = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.1, 1.1), material);
sc.add(cube14);
cube14.position.set(THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(-20));
var cube15 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), material);
sc.add(cube15);
cube15.position.set(THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(-20));
var donut = new THREE.Mesh(new THREE.TorusGeometry(2, 1, 16, 100), donut_mat);
sc.add(donut);
donut.position.set(THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(-20));
var donut2 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.5, 16, 100), donut_mat);
sc.add(donut2);
donut2.position.set(THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(-20));
var donut3 = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.6, 16, 100), donut_mat);
sc.add(donut3);
donut3.position.set(THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(-20));
var donut4 = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.3, 16, 100), donut_mat);
sc.add(donut4);
donut4.position.set(THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(-20));
var donut5 = new THREE.Mesh(new THREE.TorusGeometry(2.5, 0.8, 16, 100), donut_mat);
sc.add(donut5);
donut5.position.set(THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(-20));
var donut6 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.4, 16, 100), donut_mat);
sc.add(donut6);
donut6.position.set(THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(-20));
var donut7 = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.5, 16, 100), donut_mat);
sc.add(donut7);
donut7.position.set(THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(-20));
var donut8 = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.3, 16, 100), donut_mat);
sc.add(donut8);
donut8.position.set(THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(-20));
var donut9 = new THREE.Mesh(new THREE.TorusGeometry(2, 0.7, 16, 100), donut_mat);
sc.add(donut9);
donut9.position.set(THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(-20));
var donut10 = new THREE.Mesh(new THREE.TorusGeometry(1.8, 0.6, 16, 100), donut_mat);
sc.add(donut10);
donut10.position.set(THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(-20));
var donut11 = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.2, 16, 100), donut_mat);
sc.add(donut11);
donut11.position.set(THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(-20));
var objects = [cube, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9, cube10, cube11, cube12, cube13, cube14, cube15, donut, donut2, donut3, donut4, donut5, donut6, donut7, donut8, donut9, donut10, donut11];

for (var i = 0; i < objects.length; i++) {
  var obj = objects[i];
  obj.material = obj.material.clone();
  obj.rotation.x = Math.random() * Math.PI;
  obj.rotation.y = Math.random() * Math.PI;
  obj.rotation.z = Math.random() * Math.PI;
  obj.material.color.set(Math.random() * 0xffffff);
}

function add_star() {
  var star_geometry = new THREE.SphereGeometry(0.25, 24, 24);
  var star_material = new THREE.MeshBasicMaterial({
    color: 0xffffff
  });
  var star = new THREE.Mesh(star_geometry, star_material);

  var _Array$fill$map = Array(3).fill().map(function () {
    return THREE.MathUtils.randFloatSpread(200);
  }),
      _Array$fill$map2 = _slicedToArray(_Array$fill$map, 3),
      x = _Array$fill$map2[0],
      y = _Array$fill$map2[1],
      z = _Array$fill$map2[2];

  star.position.set(x, y, z);
  sc.add(star);
}

for (var _i2 = 0; _i2 < 400; _i2++) {
  add_star();
}

cam.position.z = 5;

function anim() {
  requestAnimationFrame(anim);
  cube.rotation.x = window.scrollY * 0.01;
  cube.rotation.y = window.scrollY * 0.02;
  cube2.rotation.x = window.scrollY * 0.01;
  cube2.position.x = -1 + window.scrollY * 0.01;
  cube3.rotation.y = window.scrollY * 0.01;
  cube3.position.z = -2 + -window.scrollY * 0.01;
  cube4.rotation.x = window.scrollY * 0.015;
  cube4.rotation.z = window.scrollY * 0.01;
  cube5.rotation.y = window.scrollY * 0.02;
  cube5.position.y = -8 + -window.scrollY * 0.01;
  cube6.rotation.x = window.scrollY * 0.005;
  cube6.rotation.y = window.scrollY * 0.01;
  cube7.rotation.z = window.scrollY * 0.02;
  cube7.position.x = 4 + -window.scrollY * 0.01;
  cube8.rotation.x = window.scrollY * 0.01;
  cube8.position.z = -5 + window.scrollY * 0.01;
  cube9.rotation.y = window.scrollY * 0.015;
  cube9.position.x = 8 + window.scrollY * 0.008;
  cube10.rotation.z = window.scrollY * 0.01;
  cube10.position.y = -3 + window.scrollY * 0.01;
  cube11.rotation.x = window.scrollY * 0.02;
  cube11.position.z = -10 + -window.scrollY * 0.01;
  cube12.rotation.y = window.scrollY * 0.008;
  cube12.position.x = -8 + -window.scrollY * 0.005;
  cube13.rotation.z = window.scrollY * 0.018;
  cube13.position.y = 5 + -window.scrollY * 0.012;
  cube14.rotation.x = window.scrollY * 0.012;
  cube14.position.z = -9 + window.scrollY * 0.008;
  cube15.rotation.y = window.scrollY * 0.006;
  cube15.position.x = 7 + window.scrollY * 0.01;
  donut.rotation.x = window.scrollY * 0.01;
  donut.position.y = 6 + -window.scrollY * 0.01;
  donut.position.x = -12 + window.scrollY * 0.01;
  donut.rotation.y = window.scrollY * 0.01;
  donut2.rotation.y = window.scrollY * 0.015;
  donut2.position.z = -7 + -window.scrollY * 0.01;
  donut3.rotation.x = window.scrollY * 0.02;
  donut3.position.x = -8 + window.scrollY * 0.005;
  donut4.rotation.z = window.scrollY * 0.01;
  donut4.position.y = -6 + window.scrollY * 0.01;
  donut5.rotation.x = window.scrollY * 0.008;
  donut5.rotation.y = window.scrollY * 0.012;
  donut6.rotation.z = window.scrollY * 0.02;
  donut6.position.x = -6 + -window.scrollY * 0.008;
  donut7.rotation.x = window.scrollY * 0.012;
  donut7.position.x = 9 + window.scrollY * 0.01;
  donut8.rotation.y = window.scrollY * 0.018;
  donut8.position.z = -12 + -window.scrollY * 0.008;
  donut9.rotation.z = window.scrollY * 0.01;
  donut9.position.y = -9 + window.scrollY * 0.012;
  donut10.rotation.x = window.scrollY * 0.007;
  donut10.position.x = 14 + -window.scrollY * 0.01;
  donut11.rotation.y = window.scrollY * 0.02;
  donut11.position.y = 8 + -window.scrollY * 0.015;

  if (model) {
    model.position.z = window.scrollY * 0.05 - 1.4;
  }

  cam.position.z = 5 + window.scrollY * 0.02;
  renderer.render(sc, cam);
}

anim();
var lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);