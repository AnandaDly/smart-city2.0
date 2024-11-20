import * as THREE from "https://cdn.skypack.dev/three@0.132.2";
import * as YUKA from "https://cdn.skypack.dev/yuka";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js";

// Inisialisasi EntityManager dan Loader
const entityManager = new YUKA.EntityManager();
const loader = new GLTFLoader();
const vehicles = [];

// Fungsi untuk sinkronisasi antara Yuka dan Three.js
function sync(entity, renderComponent) {
  renderComponent.matrix.copy(entity.worldMatrix);
}

// Fungsi untuk membuat vehicle dengan path
export function createVehicle1(scene, pathPoints, maxSpeed = 6) {
  const vehicle = new YUKA.Vehicle();
  const path = new YUKA.Path();

  // Tambahkan titik-titik ke path
  pathPoints.forEach((point) =>
    path.add(new YUKA.Vector3(point.x, point.y, point.z))
  );
  path.loop = true;

  // Inisialisasi posisi dan perilaku
  vehicle.position.copy(path.current());
  vehicle.maxSpeed = maxSpeed;

  const followPathBehavior = new YUKA.FollowPathBehavior(path, 0.5);
  vehicle.steering.add(followPathBehavior);

  const onPathBehavior = new YUKA.OnPathBehavior(path);
  vehicle.steering.add(onPathBehavior);

  entityManager.add(vehicle);
  vehicles.push(vehicle);

  // Muat model dan tambahkan ke scene
  loader.load(
    "../assets/models/car.glb",
    function (gltf) {
      const model = gltf.scene.clone();
      model.matrixAutoUpdate = false;
      scene.add(model);
      vehicle.scale = new YUKA.Vector3(0.3, 0.3, 0.3);
      vehicle.setRenderComponent(model, sync);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // Tambahkan garis path ke scene
  // const position = [];
  // for (let i = 0; i < path._waypoints.length; i++) {
  //   const waypoint = path._waypoints[i];
  //   position.push(waypoint.x, waypoint.y, waypoint.z);
  // }

  // const lineGeometry = new THREE.BufferGeometry();
  // lineGeometry.setAttribute(
  //   "position",
  //   new THREE.Float32BufferAttribute(position, 3)
  // );

  // const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
  // const lines = new THREE.LineLoop(lineGeometry, lineMaterial);
  // scene.add(lines);
}

export function createVehicle2(scene, pathPoints, maxSpeed = 6) {
  const vehicle = new YUKA.Vehicle();
  const path = new YUKA.Path();

  // Tambahkan titik-titik ke path
  pathPoints.forEach((point) =>
    path.add(new YUKA.Vector3(point.x, point.y, point.z))
  );
  path.loop = true;

  // Inisialisasi posisi dan perilaku
  vehicle.position.copy(path.current());
  vehicle.maxSpeed = maxSpeed;

  const followPathBehavior = new YUKA.FollowPathBehavior(path, 0.5);
  vehicle.steering.add(followPathBehavior);

  const onPathBehavior = new YUKA.OnPathBehavior(path);
  vehicle.steering.add(onPathBehavior);

  entityManager.add(vehicle);
  vehicles.push(vehicle);

  // Muat model dan tambahkan ke scene
  loader.load(
    "../assets/models/car-2.glb",
    function (gltf) {
      const model = gltf.scene.clone();
      model.matrixAutoUpdate = false;
      scene.add(model);
      vehicle.scale = new YUKA.Vector3(0.3, 0.3, 0.3);
      vehicle.setRenderComponent(model, sync);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // Tambahkan garis path ke scene
  // const position = [];
  // for (let i = 0; i < path._waypoints.length; i++) {
  //   const waypoint = path._waypoints[i];
  //   position.push(waypoint.x, waypoint.y, waypoint.z);
  // }

  // const lineGeometry = new THREE.BufferGeometry();
  // lineGeometry.setAttribute(
  //   "position",
  //   new THREE.Float32BufferAttribute(position, 3)
  // );

  // const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
  // const lines = new THREE.LineLoop(lineGeometry, lineMaterial);
  // scene.add(lines);
}

export function createVehicle3(scene, pathPoints, maxSpeed = 6) {
  const vehicle = new YUKA.Vehicle();
  const path = new YUKA.Path();

  // Tambahkan titik-titik ke path
  pathPoints.forEach((point) =>
    path.add(new YUKA.Vector3(point.x, point.y, point.z))
  );
  path.loop = true;

  // Inisialisasi posisi dan perilaku
  vehicle.position.copy(path.current());
  vehicle.maxSpeed = maxSpeed;

  const followPathBehavior = new YUKA.FollowPathBehavior(path, 0.5);
  vehicle.steering.add(followPathBehavior);

  const onPathBehavior = new YUKA.OnPathBehavior(path);
  vehicle.steering.add(onPathBehavior);

  entityManager.add(vehicle);
  vehicles.push(vehicle);

  // Muat model dan tambahkan ke scene
  loader.load(
    "../assets/models/car-3.glb",
    function (gltf) {
      const model = gltf.scene.clone();
      model.matrixAutoUpdate = false;
      scene.add(model);
      vehicle.scale = new YUKA.Vector3(0.3, 0.3, 0.3);
      vehicle.setRenderComponent(model, sync);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // Tambahkan garis path ke scene
  // const position = [];
  // for (let i = 0; i < path._waypoints.length; i++) {
  //   const waypoint = path._waypoints[i];
  //   position.push(waypoint.x, waypoint.y, waypoint.z);
  // }

  // const lineGeometry = new THREE.BufferGeometry();
  // lineGeometry.setAttribute(
  //   "position",
  //   new THREE.Float32BufferAttribute(position, 3)
  // );

  // const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
  // const lines = new THREE.LineLoop(lineGeometry, lineMaterial);
  // scene.add(lines);
}

export function createVehicle4(scene, pathPoints, maxSpeed = 6) {
  const vehicle = new YUKA.Vehicle();
  const path = new YUKA.Path();

  // Tambahkan titik-titik ke path
  pathPoints.forEach((point) =>
    path.add(new YUKA.Vector3(point.x, point.y, point.z))
  );
  path.loop = true;

  // Inisialisasi posisi dan perilaku
  vehicle.position.copy(path.current());
  vehicle.maxSpeed = maxSpeed;

  const followPathBehavior = new YUKA.FollowPathBehavior(path, 0.5);
  vehicle.steering.add(followPathBehavior);

  const onPathBehavior = new YUKA.OnPathBehavior(path);
  vehicle.steering.add(onPathBehavior);

  entityManager.add(vehicle);
  vehicles.push(vehicle);

  // Muat model dan tambahkan ke scene
  loader.load(
    "../assets/models/car-4.glb",
    function (gltf) {
      const model = gltf.scene.clone();
      model.matrixAutoUpdate = false;
      scene.add(model);
      vehicle.scale = new YUKA.Vector3(0.3, 0.3, 0.3);
      vehicle.setRenderComponent(model, sync);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // Tambahkan garis path ke scene
  // const position = [];
  // for (let i = 0; i < path._waypoints.length; i++) {
  //   const waypoint = path._waypoints[i];
  //   position.push(waypoint.x, waypoint.y, waypoint.z);
  // }

  // const lineGeometry = new THREE.BufferGeometry();
  // lineGeometry.setAttribute(
  //   "position",
  //   new THREE.Float32BufferAttribute(position, 3)
  // );

  // const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
  // const lines = new THREE.LineLoop(lineGeometry, lineMaterial);
  // scene.add(lines);
}

export function createDrone(scene, pathPoints, maxSpeed = 6) {
  const vehicle = new YUKA.Vehicle();
  const path = new YUKA.Path();

  // Tambahkan titik-titik ke path
  pathPoints.forEach((point) =>
    path.add(new YUKA.Vector3(point.x, point.y, point.z))
  );
  path.loop = true;

  // Inisialisasi posisi dan perilaku
  vehicle.position.copy(path.current());
  vehicle.maxSpeed = maxSpeed;

  const followPathBehavior = new YUKA.FollowPathBehavior(path, 0.5);
  vehicle.steering.add(followPathBehavior);

  const onPathBehavior = new YUKA.OnPathBehavior(path);
  vehicle.steering.add(onPathBehavior);

  entityManager.add(vehicle);
  vehicles.push(vehicle);

  // Muat model dan tambahkan ke scene
  loader.load(
    "../assets/models/drone.glb",
    function (gltf) {
      const model = gltf.scene.clone();
      model.matrixAutoUpdate = false;
      scene.add(model);
      vehicle.scale = new YUKA.Vector3(0.3, 0.3, 0.3);
      vehicle.setRenderComponent(model, sync);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // Tambahkan garis path ke scene
  // const position = [];
  // for (let i = 0; i < path._waypoints.length; i++) {
  //   const waypoint = path._waypoints[i];
  //   position.push(waypoint.x, waypoint.y, waypoint.z);
  // }

  // const lineGeometry = new THREE.BufferGeometry();
  // lineGeometry.setAttribute(
  //   "position",
  //   new THREE.Float32BufferAttribute(position, 3)
  // );

  // const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
  // const lines = new THREE.LineLoop(lineGeometry, lineMaterial);
  // scene.add(lines);
}

// Fungsi untuk memperbarui Yuka EntityManager
export function updateVehicles(delta) {
  entityManager.update(delta);
}
