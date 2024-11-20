import * as THREE from "https://cdn.skypack.dev/three@0.132.2";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js";
import { addLights } from "./lighting.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  antialias: true, // Menambahkan antialiasing untuk tampilan yang lebih halus
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x91b6d4); // Warna langit yang lebih cerah
document.body.appendChild(renderer.domElement);

// Load Light
addLights(scene);

// Konfigurasi OrbitControls untuk gaya Infinitown
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.rotateSpeed = 0.5;
controls.enableZoom = true;
controls.minDistance = 10;
controls.maxDistance = 30;
controls.maxPolarAngle = Math.PI / 2.5; // Membatasi rotasi vertikal
controls.minPolarAngle = Math.PI / 4; // Menetapkan sudut minimum
controls.enablePan = false; // Menonaktifkan panning

// Setup kamera awal
camera.position.set(15, 15, 15);
camera.lookAt(0, 0, 0);

// Helper: Grid and Axes
const gridHelper = new THREE.GridHelper(30, 10, 0x444444, 0x888888);
scene.add(gridHelper);

// GLTFLoader
const loader = new GLTFLoader();
const models = [];
const gridLocations = [];

// Fixed grid locations
const gridSize = 3;
const gridSpacing = 1;
for (let i = -gridSize; i <= gridSize; i += 3) {
  for (let j = -gridSize; j <= gridSize; j += 3) {
    gridLocations.push(new THREE.Vector3(i * gridSpacing, 0, j * gridSpacing));
  }
}

// Fungsi untuk shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Memuat semua model GLTF
const modelPaths = [
  "../assets/models/Land.glb",
  "../assets/models/shopping.glb",
  "../assets/models/Land.glb",
  "../assets/models/shopping.glb",
  "../assets/models/Land.glb",
  "../assets/models/shopping.glb",
  "../assets/models/Land.glb",
  "../assets/models/shopping.glb",
  "../assets/models/Land.glb",
  "../assets/models/shopping.glb",
];

const loadModels = async () => {
  const promises = modelPaths.map(
    (path) =>
      new Promise((resolve, reject) => {
        loader.load(
          path,
          (gltf) => resolve(gltf.scene),
          undefined,
          (error) => reject(error)
        );
      })
  );
  return Promise.all(promises);
};

// Setelah model selesai dimuat
loadModels()
  .then((loadedModels) => {
    // Simpan model ke array
    models.push(...loadedModels);

    // Shuffle lokasi grid dan model
    shuffleArray(models);
    shuffleArray(gridLocations);

    // Tempatkan model pada lokasi tetap
    for (let i = 0; i < models.length; i++) {
      const model = models[i];
      const position = gridLocations[i];

      model.scale.set(0.177, 0.177, 0.177);
      model.position.copy(position);
      scene.add(model);
    }

    // Mulai render loop
    animate();
  })
  .catch((error) => console.error("Error loading models:", error));

function animate() {
  requestAnimationFrame(animate);

  controls.update();
  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
