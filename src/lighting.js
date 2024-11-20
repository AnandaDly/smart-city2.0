import * as THREE from "https://cdn.skypack.dev/three@0.132.2";

export function addLights(scene) {
  // Menambahkan ambient light untuk pencahayaan umum
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  // const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Warna putih, intensitas 1
  // directionalLight.position.set(-300, 300, -300); // Atur posisi
  // directionalLight.castShadow = true; // Aktifkan bayangan
  // scene.add(directionalLight);
  // const helper = new THREE.DirectionalLightHelper(directionalLight, 5);
  // scene.add(helper);

  const shadowLight = new THREE.DirectionalLight(0xffffff, 3);

  shadowLight.position.set(-150, 350, 350);

  shadowLight.castShadow = true;

  shadowLight.shadow.camera.left = -400;
  shadowLight.shadow.camera.right = 400;
  shadowLight.shadow.camera.top = 400;
  shadowLight.shadow.camera.bottom = -400;
  shadowLight.shadow.camera.near = 1;
  shadowLight.shadow.camera.far = 1000;
  // const pointLight = new THREE.PointLight(0xff0000, 1, 50, 2); // Warna merah, intensitas 1, jarak 50, decay 2
  // pointLight.position.set(5, 5, 2);
  // scene.add(pointLight);
  // const sphereSize = 1;
  // const pointLightHelper = new THREE.PointLightHelper(pointLight, sphereSize);
  // scene.add(pointLightHelper);

  // const spotLight = new THREE.SpotLight(0x00ff00, 1); // Warna hijau
  // spotLight.position.set(10, 10, 10);
  // spotLight.angle = Math.PI / 4; // Sudut pencahayaan
  // spotLight.penumbra = 0.2; // Area transisi cahaya
  // spotLight.castShadow = true;
  // scene.add(spotLight);

  const hemisphereLight = new THREE.HemisphereLight(0x4040ff, 0xff8040, 1); // Warna atas, bawah, intensitas
  scene.add(hemisphereLight);

  // const rectAreaLight = new THREE.RectAreaLight(0xffffff, 5, 4, 10); // Warna putih, intensitas 5, lebar 4, tinggi 10
  // rectAreaLight.position.set(5, 5, 5);
  // rectAreaLight.lookAt(0, 0, 0); // Arahkan ke pusat scene
  // scene.add(rectAreaLight);
}
