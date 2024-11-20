import * as THREE from "https://cdn.skypack.dev/three@0.132.2";
import * as YUKA from "https://cdn.skypack.dev/yuka";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js";
import { Sky } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/objects/Sky.js";
import * as BufferGeometryUtils from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/utils/BufferGeometryUtils.js";
import { addLights } from "./lighting.js";
import { loadBuilding } from "./obj.js";
import {
  createVehicle1,
  createVehicle2,
  createVehicle3,
  createVehicle4,
  createDrone,
  updateVehicles,
} from "./patrolObj.js"; // Impor fungsi

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0xa0deff);
document.body.appendChild(renderer.domElement);

const time = new YUKA.Time();
const loader = new GLTFLoader();

// Load Light
addLights(scene);

// Load building model
loadBuilding(scene);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.rotateSpeed = 0.5;
controls.enableZoom = true;
controls.minDistance = 20;
controls.maxDistance = 160;
controls.maxPolarAngle = Math.PI / 2.5;
controls.minPolarAngle = Math.PI / 4;
controls.enablePan = false;

// Set posisi dan orientasi awal kamera
let initialCameraPosition = new THREE.Vector3(0, 200, 200);
let initialCameraLookAt = new THREE.Vector3(0, 0, 0);

camera.position.set(100, 100, 200);
camera.lookAt(0, 0, 0);

// Tambahkan Vehicle Patrol
createVehicle1(scene, [
  { x: 40, y: 3.5, z: -75.8 },
  { x: -25, y: 3.5, z: -75.8 },
  { x: -25, y: 3.5, z: -59.8 },
  { x: 26, y: 3.5, z: -59.8 },
  { x: 26, y: 3.5, z: -41.8 },
  { x: -25, y: 3.5, z: -41.8 },
  { x: -25, y: 3.5, z: -25.8 },
  { x: 26, y: 3.5, z: -25.8 },
  { x: 26, y: 3.5, z: -7.8 },
  { x: -25, y: 3.5, z: -7.8 },
  { x: -25, y: 3.5, z: 7.8 },
  { x: 26, y: 3.5, z: 7.8 },
  { x: 26, y: 3.5, z: 25.8 },
  { x: -25, y: 3.5, z: 25.8 },
  { x: -25, y: 3.5, z: 41.8 },
  { x: 26, y: 3.5, z: 41.8 },
  { x: 26, y: 3.5, z: 59.8 },
  { x: -25, y: 3.5, z: 59.8 },
  { x: -25, y: 3.5, z: 75.8 },
  { x: 25, y: 3.5, z: 75.8 },
  { x: 25, y: 3.5, z: -76.8 },
  { x: 40, y: 3.5, z: -76.8 },
]);

createVehicle1(scene, [
  { x: -40, y: 3.5, z: -76.8 },
  { x: 26, y: 3.5, z: -76.8 },
  { x: 26, y: 3.5, z: 76.8 },
  { x: -26, y: 3.5, z: 76.8 },
  { x: -26, y: 3.5, z: 41.8 },
  { x: 25, y: 3.5, z: 41.8 },
  { x: 25, y: 3.5, z: -41.8 },
  { x: -26, y: 3.5, z: -41.8 },
  { x: -26, y: 3.5, z: -75.8 },
  { x: -40, y: 3.5, z: -75.8 },
]);

createVehicle1(scene, [
  { x: -40, y: 3.5, z: -59.8 },
  { x: 7, y: 3.5, z: -59.8 },
  { x: 9, y: 3.5, z: -42.8 },
  { x: 26, y: 3.5, z: -42.8 },
  { x: 26, y: 3.5, z: 59.8 },
  { x: -26, y: 3.5, z: 59.8 },
  { x: -26, y: 3.5, z: 41.8 },
  { x: -9, y: 3.5, z: 41.8 },
  { x: -9, y: 3.5, z: -7.8 },
  { x: -26, y: 3.5, z: -7.8 },
  { x: -26, y: 3.5, z: -58.8 },
  { x: -40, y: 3.5, z: -58.8 },
]);

createVehicle1(scene, [
  { x: -40, y: 3.5, z: -42.8 },
  { x: 26, y: 3.5, z: -42.8 },
  { x: 26, y: 3.5, z: -24.8 },
  { x: -25, y: 3.5, z: -24.8 },
  { x: -25, y: 3.5, z: -8.8 },
  { x: 26, y: 3.5, z: -8.8 },
  { x: 26, y: 3.5, z: 8.8 },
  { x: -25, y: 3.5, z: 8.8 },
  { x: -25, y: 3.5, z: 24.8 },
  { x: 26, y: 3.5, z: 24.8 },
  { x: 26, y: 3.5, z: 42.8 },
  { x: -26, y: 3.5, z: 42.8 },
  { x: -26, y: 3.5, z: -41.8 },
  { x: -40, y: 3.5, z: -41.8 },
]);

createVehicle1(scene, [
  { x: 40, y: 3.5, z: -7.8 },
  { x: -25, y: 3.5, z: -7.8 },
  { x: -25, y: 3.5, z: 7.8 },
  { x: 25, y: 3.5, z: 7.8 },
  { x: 25, y: 3.5, z: -8.8 },
  { x: 40, y: 3.5, z: -8.8 },
]);

createVehicle2(scene, [
  { x: 40, y: 3.5, z: -58.8 },
  { x: 26, y: 3.5, z: -58.8 },
  { x: 26, y: 3.5, z: 42.8 },
  { x: 8, y: 3.5, z: 42.8 },
  { x: 8, y: 3.5, z: -7.8 },
  { x: -26, y: 3.5, z: -7.8 },
  { x: -26, y: 3.5, z: -42.8 },
  { x: -9, y: 3.5, z: -42.8 },
  { x: -9, y: 3.5, z: -75.8 },
  { x: 26, y: 3.5, z: -75.8 },
  { x: 26, y: 3.5, z: -59.8 },
  { x: 40, y: 3.5, z: -59.8 },
]);

createVehicle2(scene, [
  { x: 40, y: 3.5, z: -41.8 },
  { x: 26, y: 3.5, z: -41.8 },
  { x: 26, y: 3.5, z: 8.8 },
  { x: 8, y: 3.5, z: 8.8 },
  { x: 8, y: 3.5, z: -24.8 },
  { x: -26, y: 3.5, z: -24.8 },
  { x: -26, y: 3.5, z: -76.8 },
  { x: -8, y: 3.5, z: -76.8 },
  { x: -8, y: 3.5, z: -59.8 },
  { x: 26, y: 3.5, z: -59.8 },
  { x: 26, y: 3.5, z: -42.8 },
  { x: 40, y: 3.5, z: -42.8 },
]);

createVehicle2(scene, [
  { x: 40, y: 3.5, z: 42.8 },
  { x: 25, y: 3.5, z: 42.8 },
  { x: 25, y: 3.5, z: 25.8 },
  { x: 8, y: 3.5, z: 25.8 },
  { x: 8, y: 3.5, z: -58.8 },
  { x: -26, y: 3.5, z: -58.8 },
  { x: -26, y: 3.5, z: -76.8 },
  { x: 9, y: 3.5, z: -76.8 },
  { x: 9, y: 3.5, z: 58.8 },
  { x: 25, y: 3.5, z: 58.8 },
  { x: 25, y: 3.5, z: 41.8 },
  { x: 40, y: 3.5, z: 41.8 },
]);

createVehicle2(scene, [
  { x: -40, y: 3.5, z: 42.8 },
  { x: 25, y: 3.5, z: 42.8 },
  { x: 25, y: 3.5, z: 8.8 },
  { x: -9, y: 3.5, z: 8.8 },
  { x: -9, y: 3.5, z: -41.8 },
  { x: -26, y: 3.5, z: -41.8 },
  { x: -26, y: 3.5, z: -76.8 },
  { x: -8, y: 3.5, z: -76.8 },
  { x: -8, y: 3.5, z: 25.8 },
  { x: -25, y: 3.5, z: 25.8 },
  { x: -25, y: 3.5, z: 41.8 },
  { x: -40, y: 3.5, z: 41.8 },
]);

createVehicle2(scene, [
  { x: -40, y: 3.5, z: 75.8 },
  { x: 25, y: 3.5, z: 75.8 },
  { x: 25, y: 3.5, z: -7.8 },
  { x: -8, y: 3.5, z: -7.8 },
  { x: -8, y: 3.5, z: 41.8 },
  { x: 8, y: 3.5, z: 41.8 },
  { x: 8, y: 3.5, z: -58.8 },
  { x: -8, y: 3.5, z: -58.8 },
  { x: -8, y: 3.5, z: -24.8 },
  { x: -25, y: 3.5, z: -24.8 },
  { x: -25, y: 3.5, z: 76.8 },
  { x: -40, y: 3.5, z: 76.8 },
]);

createVehicle3(scene, [
  { x: -40, y: 3.5, z: -25.8 },
  { x: 26, y: 3.5, z: -25.8 },
  { x: 26, y: 3.5, z: 8.8 },
  { x: -9, y: 3.5, z: 8.8 },
  { x: -9, y: 3.5, z: -75.8 },
  { x: -25, y: 3.5, z: -75.8 },
  { x: -25, y: 3.5, z: 75.8 },
  { x: 25, y: 3.5, z: 75.8 },
  { x: 25, y: 3.5, z: -75.8 },
  { x: -8, y: 3.5, z: -75.8 },
  { x: -8, y: 3.5, z: 25.8 },
  { x: -26, y: 3.5, z: 25.8 },
  { x: -26, y: 3.5, z: -24.8 },
  { x: -40, y: 3.5, z: -24.8 },
]);

createVehicle3(scene, [
  { x: -40, y: 3.5, z: -8.8 },
  { x: 26, y: 3.5, z: -8.8 },
  { x: 26, y: 3.5, z: 76.8 },
  { x: -9, y: 3.5, z: 76.8 },
  { x: -9, y: 3.5, z: -58.8 },
  { x: -25, y: 3.5, z: -58.8 },
  { x: -25, y: 3.5, z: 24.8 },
  { x: 8, y: 3.5, z: 24.8 },
  { x: 8, y: 3.5, z: -58.8 },
  { x: -8, y: 3.5, z: -58.8 },
  { x: -8, y: 3.5, z: 25.8 },
  { x: -26, y: 3.5, z: 25.8 },
  { x: -26, y: 3.5, z: -7.8 },
  { x: -40, y: 3.5, z: -7.8 },
]);

createVehicle3(scene, [
  { x: 40, y: 3.5, z: 25.8 },
  { x: -26, y: 3.5, z: 25.8 },
  { x: -26, y: 3.5, z: 75.8 },
  { x: -9, y: 3.5, z: 75.8 },
  { x: -9, y: 3.5, z: -59.8 },
  { x: 25, y: 3.5, z: -59.8 },
  { x: 25, y: 3.5, z: -75.8 },
  { x: 9, y: 3.5, z: -75.8 },
  { x: 9, y: 3.5, z: -58.8 },
  { x: -8, y: 3.5, z: -58.8 },
  { x: -8, y: 3.5, z: 7.8 },
  { x: 26, y: 3.5, z: 7.8 },
  { x: 26, y: 3.5, z: 24.8 },
  { x: 40, y: 3.5, z: 24.8 },
]);

createVehicle3(scene, [
  { x: -40, y: 3.5, z: 24.8 },
  { x: -25, y: 3.5, z: 24.8 },
  { x: -25, y: 3.5, z: 75.8 },
  { x: 25, y: 3.5, z: 75.8 },
  { x: 25, y: 3.5, z: -58.8 },
  { x: 8, y: 3.5, z: -58.8 },
  { x: 8, y: 3.5, z: -75.8 },
  { x: -25, y: 3.5, z: -75.8 },
  { x: -25, y: 3.5, z: -59.8 },
  { x: -8, y: 3.5, z: -59.8 },
  { x: -8, y: 3.5, z: 7.8 },
  { x: 26, y: 3.5, z: 7.8 },
  { x: 26, y: 3.5, z: 25.8 },
  { x: -40, y: 3.5, z: 25.8 },
]);

createVehicle3(scene, [
  { x: 40, y: 3.5, z: -24.8 },
  { x: 25, y: 3.5, z: -24.8 },
  { x: 25, y: 3.5, z: -58.8 },
  { x: -26, y: 3.5, z: -58.8 },
  { x: -26, y: 3.5, z: -76.8 },
  { x: 9, y: 3.5, z: -76.8 },
  { x: 9, y: 3.5, z: 76.8 },
  { x: -26, y: 3.5, z: 76.8 },
  { x: -26, y: 3.5, z: -59.8 },
  { x: 26, y: 3.5, z: -59.8 },
  { x: 26, y: 3.5, z: -25.8 },
  { x: 40, y: 3.5, z: -25.8 },
]);

createVehicle3(scene, [
  { x: -40, y: 3.5, z: 24.8 },
  { x: -25, y: 3.5, z: 24.8 },
  { x: -25, y: 3.5, z: 75.8 },
  { x: 25, y: 3.5, z: 75.8 },
  { x: 25, y: 3.5, z: -58.8 },
  { x: 8, y: 3.5, z: -58.8 },
  { x: 8, y: 3.5, z: -75.8 },
  { x: -25, y: 3.5, z: -75.8 },
  { x: -25, y: 3.5, z: -59.8 },
  { x: -8, y: 3.5, z: -59.8 },
  { x: -8, y: 3.5, z: 7.8 },
  { x: 26, y: 3.5, z: 7.8 },
  { x: 26, y: 3.5, z: 25.8 },
  { x: -40, y: 3.5, z: 25.8 },
]);

createVehicle4(scene, [
  { x: -40, y: 3.5, z: 7.8 },
  { x: -25, y: 3.5, z: 7.8 },
  { x: -25, y: 3.5, z: 58.8 },
  { x: 8, y: 3.5, z: 58.8 },
  { x: 8, y: 3.5, z: -59.8 },
  { x: 25, y: 3.5, z: -59.8 },
  { x: 25, y: 3.5, z: -75.8 },
  { x: -8, y: 3.5, z: -75.8 },
  { x: -8, y: 3.5, z: 75.8 },
  { x: 25, y: 3.5, z: 75.8 },
  { x: 26, y: 3.5, z: 8.8 },
  { x: -40, y: 3.5, z: 8.8 },
]);

createVehicle4(scene, [
  { x: 40, y: 3.5, z: 8.8 },
  { x: -9, y: 3.5, z: 8.8 },
  { x: -9, y: 3.5, z: -42.8 },
  { x: 9, y: 3.5, z: -42.8 },
  { x: 9, y: 3.5, z: 58.8 },
  { x: -26, y: 3.5, z: 58.8 },
  { x: -26, y: 3.5, z: -25.8 },
  { x: 26, y: 3.5, z: -25.8 },
  { x: 26, y: 3.5, z: 7.8 },
  { x: 40, y: 3.5, z: 7.8 },
]);

createVehicle4(scene, [
  { x: 40, y: 3.5, z: 59.8 },
  { x: -26, y: 3.5, z: 59.8 },
  { x: -26, y: 3.5, z: -42.8 },
  { x: -9, y: 3.5, z: -42.8 },
  { x: -9, y: 3.5, z: -76.8 },
  { x: 9, y: 3.5, z: -76.8 },
  { x: 9, y: 3.5, z: -59.8 },
  { x: 26, y: 3.5, z: -59.8 },
  { x: 26, y: 3.5, z: 58.8 },
  { x: 40, y: 3.5, z: 58.8 },
]);

createVehicle4(scene, [
  { x: -40, y: 3.5, z: 58.8 },
  { x: -26, y: 3.5, z: 58.8 },
  { x: -26, y: 3.5, z: -76.8 },
  { x: 9, y: 3.5, z: -76.8 },
  { x: 9, y: 3.5, z: -58.8 },
  { x: -25, y: 3.5, z: -58.8 },
  { x: -25, y: 3.5, z: -25.8 },
  { x: 26, y: 3.5, z: -25.8 },
  { x: 26, y: 3.5, z: 59.8 },
  { x: -40, y: 3.5, z: 59.8 },
]);

createVehicle4(scene, [
  { x: 40, y: 3.5, z: 76.8 },
  { x: 25, y: 3.5, z: 76.8 },
  { x: 25, y: 3.5, z: -76.8 },
  { x: -8, y: 3.5, z: -76.8 },
  { x: -8, y: 3.5, z: -58.8 },
  { x: -25, y: 3.5, z: -58.8 },
  { x: -25, y: 3.5, z: 24.8 },
  { x: 26, y: 3.5, z: 24.8 },
  { x: 26, y: 3.5, z: 75.8 },
  { x: 40, y: 3.5, z: 75.8 },
]);

createDrone(scene, [
  { x: -30, y: 13, z: -8.8 },
  { x: 0, y: 13, z: -8.8 },
  { x: 10, y: 13, z: -78.8 },
  { x: 26, y: 13, z: -78.8 },
  { x: 26, y: 13, z: 58.8 },
  { x: 6, y: 13, z: 95.8 },
  { x: -10, y: 13, z: 85.8 },
  { x: -26, y: 13, z: 58.8 },
  { x: -46, y: 13, z: 48.8 },
  { x: -26, y: 13, z: -53.8 },
  { x: -50, y: 13, z: -59.8 },
  { x: -60, y: 13, z: -8.8 },
]);

createDrone(scene, [
  { x: -50, y: 13, z: -90 },
  { x: -40, y: 13, z: -70 },
  { x: -30, y: 13, z: -50 },
  { x: -20, y: 13, z: -30 },
  { x: -10, y: 13, z: -10 },
  { x: 0, y: 13, z: 10 },
  { x: 10, y: 13, z: 30 },
  { x: 20, y: 13, z: 50 },
  { x: 30, y: 13, z: 70 },
  { x: 40, y: 13, z: 90 },
  { x: 50, y: 13, z: 50 },
  { x: -50, y: 13, z: 0 },
]);

createDrone(scene, [
  { x: 0, y: 13, z: -90 },
  { x: 10, y: 13, z: -70 },
  { x: 20, y: 13, z: -50 },
  { x: 30, y: 13, z: -30 },
  { x: 40, y: 13, z: -10 },
  { x: 30, y: 13, z: 10 },
  { x: 20, y: 13, z: 30 },
  { x: 10, y: 13, z: 50 },
]);

createDrone(scene, [
  { x: -50, y: 13, z: -90 },
  { x: 50, y: 13, z: -70 },
  { x: -50, y: 13, z: -50 },
  { x: 50, y: 13, z: -30 },
  { x: -50, y: 13, z: -10 },
  { x: 50, y: 13, z: 10 },
  { x: -50, y: 13, z: 30 },
  { x: 50, y: 13, z: 50 },
]);

createDrone(scene, [
  { x: -50, y: 13, z: -90 },
  { x: 50, y: 13, z: -90 },
  { x: 50, y: 13, z: 90 },
  { x: -50, y: 13, z: 90 },
  { x: -50, y: 13, z: -70 },
  { x: 50, y: 13, z: -70 },
  { x: 50, y: 13, z: 70 },
  { x: -50, y: 13, z: 70 },
]);

createDrone(scene, [
  { x: -50, y: 13, z: -90 },
  { x: -30, y: 13, z: -70 },
  { x: -10, y: 13, z: -50 },
  { x: 10, y: 13, z: -30 },
  { x: 30, y: 13, z: -10 },
  { x: 50, y: 13, z: 10 },
  { x: 30, y: 13, z: 30 },
  { x: 10, y: 13, z: 50 },
]);

createDrone(scene, [
  { x: 0, y: 13, z: -90 },
  { x: 0, y: 13, z: -70 },
  { x: 0, y: 13, z: -50 },
  { x: 0, y: 13, z: -30 },
  { x: 0, y: 13, z: -10 },
  { x: 0, y: 13, z: 10 },
  { x: 0, y: 13, z: 30 },
  { x: 0, y: 13, z: 50 },
]);

createDrone(scene, [
  { x: 0, y: 13, z: -90 },
  { x: 30, y: 13, z: -70 },
  { x: 50, y: 13, z: -30 },
  { x: 30, y: 13, z: 10 },
  { x: 0, y: 13, z: 50 },
  { x: -30, y: 13, z: 30 },
  { x: -50, y: 13, z: -10 },
  { x: -30, y: 13, z: -50 },
]);

createDrone(scene, [
  { x: -50, y: 13, z: -90 },
  { x: -50, y: 13, z: -50 },
  { x: -50, y: 13, z: -10 },
  { x: 0, y: 13, z: -10 },
  { x: 50, y: 13, z: -10 },
  { x: 50, y: 13, z: -50 },
  { x: 50, y: 13, z: -90 },
]);

createDrone(scene, [
  { x: -45, y: 13, z: -85 },
  { x: 25, y: 13, z: -70 },
  { x: -10, y: 13, z: -30 },
  { x: 40, y: 13, z: -10 },
  { x: -30, y: 13, z: 20 },
  { x: 15, y: 13, z: 40 },
  { x: 0, y: 13, z: 60 },
  { x: -50, y: 13, z: 80 },
]);
// ===========================================================
let water, sun;
sun = new THREE.Vector3();

// Skybox
const sky = new Sky();
sky.scale.setScalar(10000);
scene.add(sky);

const skyUniforms = sky.material.uniforms;
skyUniforms["turbidity"].value = 10;
skyUniforms["rayleigh"].value = 2;
skyUniforms["mieCoefficient"].value = 0.005;
skyUniforms["mieDirectionalG"].value = 0.8;

const parameters = {
  elevation: 2,
  azimuth: 180,
};

const pmremGenerator = new THREE.PMREMGenerator(renderer);
const sceneEnv = new THREE.Scene();
let renderTarget;
function updateSun() {
  const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
  const theta = THREE.MathUtils.degToRad(parameters.azimuth);

  sun.setFromSphericalCoords(1, phi, theta);

  sky.material.uniforms["sunPosition"].value.copy(sun);
  // water.material.uniforms["sunDirection"].value.copy(sun).normalize();

  if (renderTarget !== undefined) renderTarget.dispose();

  sceneEnv.add(sky);
  renderTarget = pmremGenerator.fromScene(sceneEnv);
  scene.add(sky);

  scene.environment = renderTarget.texture;
}
updateSun();
// ===========================================================
const Ocean = function () {
  let geom = new THREE.PlaneGeometry(2000, 2000, 10, 10);

  geom.applyMatrix4(new THREE.Matrix4().makeRotationX(-Math.PI / 2));
  geom.deleteAttribute("normal");
  geom.deleteAttribute("uv");

  const geometry = BufferGeometryUtils.mergeVertices(geom);

  const positionAttribute = geometry.getAttribute("position");
  positionAttribute.setUsage(THREE.DynamicDrawUsage);

  this.waves = [];
  const v = new THREE.Vector3();

  for (var i = 0; i < positionAttribute.count; i++) {
    v.fromBufferAttribute(positionAttribute, i);

    this.waves.push({
      y: v.y,
      x: v.x,
      z: v.z,
      ang: Math.random() * Math.PI * 2,
      speed: 0.016 + Math.random() * 0.032,
    });
  }

  let mat = new THREE.MeshStandardMaterial({
    color: 0x68c3c0,
    transparent: true,
    metalness: 0.3, // Level refleksi
    roughness: 0.5, // Kekasaran permukaan
    // opacity: .8,
    flatShading: true,
  });

  this.mesh = new THREE.Mesh(geometry, mat);

  this.mesh.receiveShadow = true;
};

Ocean.prototype.moveWaves = function () {
  const positionAttribute = this.mesh.geometry.getAttribute("position");

  const v = new THREE.Vector3();

  for (var i = 0; i < positionAttribute.count; i++) {
    v.fromBufferAttribute(positionAttribute, i);

    const vprops = this.waves[i];

    v.x = vprops.x + Math.cos(vprops.ang);
    v.y = vprops.y + Math.sin(vprops.ang) * 2;

    vprops.ang += vprops.speed;

    positionAttribute.setXY(i, v.x, v.y);
  }

  positionAttribute.needsUpdate = true;
};

var ocean;

function createOcean() {
  ocean = new Ocean();

  ocean.mesh.position.y = -53;
  ocean.mesh.position.z = -35;

  // Pastikan menerima pencahayaan dari matahari
  ocean.mesh.material.needsUpdate = true;

  scene.add(ocean.mesh);
}
createOcean();

let icon, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10;
loader.load(
  "../assets/icon/Education.glb",
  function (gltf) {
    icon = gltf.scene;
    scene.add(icon);
    icon.name = "icon";
    icon.scale.set(10, 10, 10);
    icon.position.set(0, 25, 0);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "../assets/icon/Electric-Charging.glb",
  function (gltf) {
    icon1 = gltf.scene;
    scene.add(icon1);
    icon1.name = "icon1";
    icon1.scale.set(10, 10, 10);
    icon1.position.set(-17, 25, 34);
    // icon1.rotation.y = Math.PI;
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "../assets/icon/GreenBuilding.glb",
  function (gltf) {
    icon2 = gltf.scene;
    scene.add(icon2);
    icon2.name = "icon2";
    icon2.scale.set(10, 10, 10);
    icon2.position.set(17, 25, 51);
    icon2.rotation.y = Math.PI;
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "../assets/icon/InternetOfThings.glb",
  function (gltf) {
    icon3 = gltf.scene;
    scene.add(icon3);
    icon3.name = "icon3";
    icon3.scale.set(10, 10, 10);
    icon3.position.set(0, 25, -85);
    icon3.rotation.y = Math.PI;
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "../assets/icon/SmartBuilding.glb",
  function (gltf) {
    icon4 = gltf.scene;
    scene.add(icon4);
    icon4.name = "icon4";
    icon4.scale.set(10, 10, 10);
    icon4.position.set(34, 25, 34);
    icon4.rotation.y = Math.PI;
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "../assets/icon/smart-parking.glb",
  function (gltf) {
    icon5 = gltf.scene;
    scene.add(icon5);
    icon5.name = "icon5";
    icon5.scale.set(10, 10, 10);
    icon5.position.set(-17, 25, -34);
    icon5.rotation.y = Math.PI;
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "../assets/icon/SmartEnergy.glb",
  function (gltf) {
    icon6 = gltf.scene;
    scene.add(icon6);
    icon6.name = "icon6";
    icon6.scale.set(10, 10, 10);
    icon6.position.set(-34, 25, -85);
    icon6.rotation.y = Math.PI;
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "../assets/icon/SmartHealth.glb",
  function (gltf) {
    icon7 = gltf.scene;
    scene.add(icon7);
    icon7.name = "icon7";
    icon7.scale.set(10, 10, 10);
    icon7.position.set(-34, 25, -34);
    icon7.rotation.y = Math.PI;
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "../assets/icon/SmartHouse.glb",
  function (gltf) {
    icon8 = gltf.scene;
    scene.add(icon8);
    icon8.name = "icon8";
    icon8.scale.set(10, 10, 10);
    icon8.position.set(-34, 25, 17);
    icon8.rotation.y = Math.PI;
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "../assets/icon/shopping.glb",
  function (gltf) {
    icon9 = gltf.scene;
    scene.add(icon9);
    icon9.name = "icon9";
    icon9.scale.set(10, 10, 10);
    icon9.position.set(17, 25, 85);
    icon9.rotation.y = Math.PI;
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "../assets/icon/GreenPark.glb",
  function (gltf) {
    icon10 = gltf.scene;
    scene.add(icon10);
    icon10.name = "icon10";
    icon10.scale.set(10, 10, 10);
    icon10.position.set(17, 25, 17);
    icon10.rotation.y = Math.PI;
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

// Simpan data deskripsi untuk setiap icon
const iconDescriptions = {
  icon: {
    img: "../assets/foto/university.png",
    title: "Education",
    content:
      "Education in a smart city leverages advanced technologies and data-driven approaches to enhance learning experiences and accessibility. Smart educational systems integrate digital tools, such as online platforms, interactive learning environments, and virtual classrooms, allowing for personalized and flexible learning opportunities. This integration facilitates collaboration between students, educators, and communities, fostering a more engaging and inclusive educational landscape. Data analytics plays a key role in assessing student performance, enabling educators to tailor curricula and support to individual needs. Additionally, smart cities often promote lifelong learning initiatives, offering residents access to various educational resources, from vocational training to digital literacy programs, ensuring that all community members can thrive in an increasingly digital world. By incorporating technology into education, smart cities aim to equip residents with the skills and knowledge necessary to navigate and contribute to a rapidly evolving society, ultimately enhancing the overall quality of life.",
  },
  icon1: {
    img: "../assets/foto/charging-station.png",
    title: "Electric charging Station.",
    content:
      "An electric charging station in a smart city provides EV owners with accessible, efficient charging points. These stations use smart technology like real-time data, mobile app integration, and dynamic pricing. They may include renewable energy sources like solar panels, and track usage to optimize grid efficiency. Users can easily find available chargers, make contactless payments, and receive notifications through an app. Overall, these stations promote sustainable urban mobility while enhancing user convenience.",
  },
  icon2: {
    img: "../assets/foto/apartment-2.png",
    title: "Green buildings",
    content:
      "Green buildings in a smart city are designed to reduce environmental impact through energy-efficient practices, sustainable materials, and eco-friendly construction methods. These buildings optimize natural light, ventilation, and water usage and often incorporate renewable energy sources like solar or wind.  Advanced technologies monitor energy consumption and indoor air quality,  providing healthier and more sustainable spaces for occupants Additionally, green buildings focus on reducing carbon emissions and waste, aiming for high energy ratings and certifications like LEED or BREEAM. Ultimately, they contribute to the smart city's sustainability goals, promoting eco-conscious urban growth..",
  },
  icon3: {
    img: "../assets/foto/IOT.png",
    title: "Internet of Things",
    content:
      "The Internet of Things (IoT) in a smart city refers to the network of interconnected devices and sensors that communicate and share data to enhance urban living. This technology enables real-time monitoring and management of various city functions, including transportation, energy usage, waste management, and public safety. For instance, smart traffic lights can adjust based on traffic flow, while smart waste bins signal when they need to be emptied. IoT devices improve the efficiency of public services, enhance resource allocation, and provide valuable insights for urban planning. By leveraging data analytics and connectivity, IoT transforms cities into more responsive, efficient, and sustainable environments, ultimately improving the quality of life for residents..",
  },
  icon4: {
    img: "../assets/foto/apartment-1.png",
    title: "Smart Building",
    content:
      "Smart transportation in a smart city involves integrating advanced technologies to improve urban mobility, reduce congestion, and enhance efficiency across transportation systems. This typically includes using IoT sensors, real-time data analytics, and AI to monitor and manage traffic flow, optimize public transit schedules, and enable smart parking solutions. Autonomous vehicles, shared mobility services, and electrified transport also contribute to a more sustainable and accessible city, while apps and digital platforms provide real-time information, enabling residents to make informed travel decisions. The goal of smart transportation is to create a more connected, efficient, and eco-friendly urban environment.",
  },
  icon6: {
    img: "../assets/foto/power-plant.png",
    title: "Smart Energy",
    content:
      "Smart energy in a smart city refers to the integration of advanced technologies and data analytics to optimize energy generation, distribution, and consumption. This approach incorporates renewable energy sources, such as solar and wind, alongside traditional power systems, allowing for a more resilient and sustainable energy grid. Smart meters and IoT devices provide real-time monitoring of energy usage, enabling consumers and utilities to make informed decisions that enhance efficiency and reduce costs. Demand response systems adjust energy consumption during peak times to alleviate strain on the grid. Additionally, smart energy systems facilitate energy storage solutions and electric vehicle integration, promoting a cleaner urban environment and supporting the transition to a low-carbon economy. By leveraging smart technology, cities can improve energy efficiency, enhance grid reliability, and reduce environmental impacts.",
  },
  icon7: {
    img: "../assets/foto/hospital.png",
    title: "Smart Health.",
    content:
      "Smart health in a smart city leverages digital health technologies, data analytics, and interconnected systems to provide accessible, efficient, and personalized healthcare services. Through IoT devices, wearable tech, and telemedicine, residents can monitor their health and access medical services remotely, reducing the strain on physical healthcare facilities. Smart health initiatives use real-time data to track disease outbreaks, manage public health resources, and support emergency response systems. These systems often integrate with other smart city infrastructure, enabling better health outcomes and fostering a proactive, preventative approach to urban healthcare.",
  },
  icon8: {
    img: "../assets/foto/smart-house.png",
    title: "Smart House",
    content:
      "A smart house in a smart city is a residential space equipped with advanced technologies that automate and enhance daily living. These homes utilize Internet of Things (IoT) devices to enable seamless connectivity and control over various systems, including lighting, heating, security, and appliances. Residents can manage their home environment remotely via smartphones or voice-activated assistants, allowing for energy efficiency, improved security, and personalized comfort. Smart houses often incorporate renewable energy sources, such as solar panels, and utilize smart meters to monitor and optimize energy consumption. By integrating with the broader smart city infrastructure, smart houses contribute to sustainability goals and create a more efficient, responsive urban living experience.",
  },
  icon5: {
    img: "../assets/foto/parking.png",
    title: "Smart Parking",
    content:
      "Smart parking in a smart city uses technology to optimize the use of parking spaces. It integrates sensors, IoT devices, and data analytics to monitor parking occupancy in real-time. Drivers can find available spots through a mobile app, which provides directions and allows for contactless payment. The system can also manage pricing based on demand, offer reservations, and alert users when their parking session is about to expire. This reduces congestion, improves traffic flow, and enhances the overall parking experience.",
  },
  icon10: {
    img: "../assets/foto/Taman.png",
    title: "Green Park.",
    content:
      "A green park in a smart city is a sustainable, tech-enhanced public space designed to promote environmental health, biodiversity, and community well-being. These parks often feature native plantings, energy-efficient lighting, and smart irrigation systems that conserve water.IoT sensors monitor environmental factors like air quality, soil moisture, and visitor traffic to optimize park maintenance and support ecological balance.Green parks also provide recreational areas, walking trails, and spaces for outdoor activities, helping to improve urban air quality, reduce the heat island effect, and offer residents a natural retreat within the city.By integrating green spaces with smart city technology, green parks support sustainability, enhance urban resilience, and foster a connection between residents and nature.",
  },
  icon9: {
    img: "../assets/foto/parking.png",
    title: "Smart Parking",
    content:
      "Smart parking is a technology-driven system that uses sensors, IoT devices, and data analytics to optimize the use of parking spaces in urban areas. It allows drivers to find available parking spots in real-time through a mobile app, which helps reduce time spent searching for a space and minimizes traffic congestion.",
  },
};

// Ambil referensi elemen card dan tombol close
const card = document.getElementById("card");
const closeButton = document.getElementById("closeButton");
// Fungsi untuk memperbarui konten card
function updateCardContent(iconName) {
  const data = iconDescriptions[iconName];
  if (data) {
    document.getElementById("title").textContent = data.title;
    document.getElementById("content").textContent = data.content;
    document.querySelector(".icon-image").src = data.img;
  } else {
    console.log("No data found for icon:", iconName);
  }
}

// Fungsi untuk menampilkan card
function showCard(iconName) {
  updateCardContent(iconName);
  card.style.display = "block";
}
// Fungsi untuk menyembunyikan card
function hideCard() {
  card.style.display = "none";
}

// Event listener untuk tombol close
closeButton.addEventListener("click", hideCard);

// Tambahkan event listener untuk klik pada gedung (menggunakan Raycaster)
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function zoomToBuilding(icon) {
  updateCardContent(icon.name);
  card.style.display = "block";
}

document.addEventListener("click", (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(
    [
      icon,
      icon1,
      icon2,
      icon3,
      icon4,
      icon5,
      icon6,
      icon7,
      icon8,
      icon9,
      icon10,
    ],
    true
  );
  if (intersects.length > 0) {
    const clickedBuilding = intersects[0].object.parent;
    zoomToBuilding(clickedBuilding);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const aboutUs = document.getElementById("about_us");
  const toggleMenu = document.getElementById("toggle-menu");
  const closeButton = document.querySelector(".close-button-about");

  // Event untuk membuka About Us
  toggleMenu.addEventListener("click", (e) => {
    e.preventDefault();
    aboutUs.style.display = "block";
  });

  // Event untuk menutup About Us
  closeButton.addEventListener("click", () => {
    aboutUs.style.display = "none";
  });
});
// Tambahkan AudioListener ke kamera
const listener = new THREE.AudioListener();
camera.add(listener);

// Inisialisasi audio dan loader
const music = new THREE.Audio(listener);
const audioLoader = new THREE.AudioLoader();

// Muat musik latar
audioLoader.load("../assets/music/City_Sunset_Serenity.mp3", (buffer) => {
  music.setBuffer(buffer);
  music.setLoop(true);
  music.setVolume(0.5);
  music.play(); // Mulai musik saat halaman dimuat
});

// Variabel untuk status audio
let isMusicPlaying = true;

// Tambahkan event listener ke tombol 🎵
document.getElementById("toggle-music").addEventListener("click", (event) => {
  event.preventDefault(); // Hindari scroll ke anchor
  if (isMusicPlaying) {
    music.pause(); // Hentikan musik
  } else {
    music.play(); // Lanjutkan musik
  }
  isMusicPlaying = !isMusicPlaying; // Toggle status
});
// ===========================================================
function putarIcon() {
  if (
    icon &&
    icon1 &&
    icon2 &&
    icon3 &&
    icon4 &&
    icon5 &&
    icon6 &&
    icon7 &&
    icon8 &&
    icon8 &&
    icon9 &&
    icon10
  ) {
    icon.rotation.y += 0.02;
    icon1.rotation.y += 0.02;
    icon2.rotation.y += 0.02;
    icon3.rotation.y += 0.02;
    icon4.rotation.y += 0.02;
    icon5.rotation.y += 0.02;
    icon6.rotation.y += 0.02;
    icon7.rotation.y += 0.02;
    icon8.rotation.y += 0.02;
    icon9.rotation.y += 0.02;
    icon10.rotation.y += 0.02;
  }
}

function animate() {
  putarIcon();
  renderer.render(scene, camera);
  ocean.moveWaves();
  controls.update();
  const delta = time.update().getDelta();
  updateVehicles(delta);
  renderer.setAnimationLoop(animate);
}
animate();

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
