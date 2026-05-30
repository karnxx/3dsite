"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var THREE = _interopRequireWildcard(require("three"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var container = document.getElementById("interbox2");

if (container) {
  var anim = function anim() {
    requestAnimationFrame(anim);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    renderer.render(sc, cam);
  };

  var size = container.clientWidth;
  var sc = new THREE.Scene();
  var cam = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  renderer.setSize(size, size);
  renderer.domElement.style.display = "block";
  container.appendChild(renderer.domElement);
  container.addEventListener("dragover", function (e) {
    e.preventDefault();
  });
  container.addEventListener("drop", function (e) {
    e.preventDefault();
    var file = e.dataTransfer.files[0];
    var url = URL.createObjectURL(file);
    var texture = new THREE.TextureLoader().load(url);
    material.map = texture;
    material.color.set(0xffffff);
    material.needsUpdate = true;
  });
  var geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
  var material = new THREE.MeshBasicMaterial({
    color: 0xffffff
  });
  var torus = new THREE.Mesh(geometry, material);
  sc.add(torus);
  cam.position.z = 3;
  anim();
  window.addEventListener("resize", function () {
    var newSize = container.clientWidth;
    renderer.setSize(newSize, newSize);
    cam.aspect = 1;
    cam.updateProjectionMatrix();
  });
}