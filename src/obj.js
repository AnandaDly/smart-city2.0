import { GLTFLoader } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js";
export function loadBuilding(scene) {
  const loader = new GLTFLoader();

  // 1
  loader.load(
    "../assets/models/power-plant.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(-34, 0, -85);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 2
  loader.load(
    "../assets/models/charging-station.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(-17, 0, -85);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 3
  loader.load(
    "../assets/models/IOT.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(0, 0, -85);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 4
  loader.load(
    "../assets/models/parking.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(17, 0, -85);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 5
  loader.load(
    "../assets/models/power-plant.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(34, 0, -85);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 6
  loader.load(
    "../assets/models/IOT.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(-34, 0, -68);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 7
  loader.load(
    "../assets/models/shopping.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(-17, 0, -68);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 8
  loader.load(
    "../assets/models/university.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(0, 0, -68);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 9
  loader.load(
    "../assets/models/hospital.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(17, 0, -68);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 10
  loader.load(
    "../assets/models/IOT.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(34, 0, -68);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 11
  loader.load(
    "../assets/models/apartment-1.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(-34, 0, -51);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 12
  loader.load(
    "../assets/models/apartment-2.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(-17, 0, -51);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 13
  loader.load(
    "../assets/models/smart-house.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(0, 0, -51);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 14
  loader.load(
    "../assets/models/apartment-2.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(17, 0, -51);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 15
  loader.load(
    "../assets/models/apartment-1.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(34, 0, -51);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 16
  loader.load(
    "../assets/models/hospital.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(-34, 0, -34);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 17
  loader.load(
    "../assets/models/parking.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(-17, 0, -34);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 18
  loader.load(
    "../assets/models/Taman.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(0, 0, -34);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 19
  loader.load(
    "../assets/models/charging-station.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(17, 0, -34);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 20
  loader.load(
    "../assets/models/apartment-1.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(34, 0, -34);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 21
  loader.load(
    "../assets/models/smart-house.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(-34, 0, -17);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 22
  loader.load(
    "../assets/models/Taman.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(-17, 0, -17);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 23
  loader.load(
    "../assets/models/smart-house.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(0, 0, -17);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 24
  loader.load(
    "../assets/models/Taman.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(17, 0, -17);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 25
  loader.load(
    "../assets/models/smart-house.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(34, 0, -17);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 26
  loader.load(
    "../assets/models/IOT.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(-34, 0, 0);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 27
  loader.load(
    "../assets/models/smart-house.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(-17, 0, 0);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 28
  loader.load(
    "../assets/models/university.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(0, 0, 0);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 29
  loader.load(
    "../assets/models/smart-house.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(17, 0, 0);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 30
  loader.load(
    "../assets/models/IOT.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(34, 0, 0);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 31
  loader.load(
    "../assets/models/smart-house.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(-34, 0, 17);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 32
  loader.load(
    "../assets/models/Taman.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(-17, 0, 17);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 33
  loader.load(
    "../assets/models/smart-house.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(0, 0, 17);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 34
  loader.load(
    "../assets/models/Taman.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(17, 0, 17);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 35
  loader.load(
    "../assets/models/smart-house.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(34, 0, 17);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 36
  loader.load(
    "../assets/models/parking.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(-34, 0, 34);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 37
  loader.load(
    "../assets/models/charging-station.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(-17, 0, 34);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 38
  loader.load(
    "../assets/models/Taman.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(0, 0, 34);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 39
  loader.load(
    "../assets/models/parking.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(17, 0, 34);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 40
  loader.load(
    "../assets/models/apartment-1.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(34, 0, 34);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 41
  loader.load(
    "../assets/models/apartment-2.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(-34, 0, 51);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 42
  loader.load(
    "../assets/models/apartment-1.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(-17, 0, 51);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 43
  loader.load(
    "../assets/models/smart-house.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(0, 0, 51);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 44
  loader.load(
    "../assets/models/apartment-2.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(17, 0, 51);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 45
  loader.load(
    "../assets/models/shopping.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(34, 0, 51);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 46
  loader.load(
    "../assets/models/IOT.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(-34, 0, 68);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 47
  loader.load(
    "../assets/models/hospital.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(-17, 0, 68);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 48
  loader.load(
    "../assets/models/university.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(0, 0, 68);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 49
  loader.load(
    "../assets/models/hospital.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(17, 0, 68);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 50
  loader.load(
    "../assets/models/IOT.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(34, 0, 68);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 51
  loader.load(
    "../assets/models/power-plant.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(-34, 0, 85);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 52
  loader.load(
    "../assets/models/shopping.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(-17, 0, 85);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 53
  loader.load(
    "../assets/models/IOT.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(0, 0, 85);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 54
  loader.load(
    "../assets/models/apartment-1.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(17, 0, 85);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // 55
  loader.load(
    "../assets/models/power-plant.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1, 1, 1);
      model.position.set(34, 0, 85);
      model.rotation.y = Math.PI;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // Terrain
  loader.load(
    "../assets/models/terrain2.glb",
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(1.1, 1.1, 1.1);
      model.position.set(-3.5, -55, 0);
      model.rotation.y = Math.PI / 2;
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
}
