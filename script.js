const signDictionary = {
    "สวัสดี": "wave",
    "ขอบคุณ": "thank",
    "ใช่": "yes",
    "ไม่ใช่": "no",
    "กิน": "eat",
    "ดื่ม": "drink",
    "รัก": "love",
    "ช่วยด้วย": "help"
};

function convertToSign() {
    let input = document.getElementById("inputText").value.trim();
    let signDisplay = document.getElementById("signDisplay");
    signDisplay.innerHTML = "";

    if (input.length === 0) {
        signDisplay.innerHTML = "<p>กรุณาพิมพ์ข้อความก่อน</p>";
        return;
    }

    let words = input.split(" ");
    words.forEach(word => {
        if (signDictionary[word]) {
            signDisplay.innerHTML += `<p>${word} → ${signDictionary[word]}</p>`;
            playSignAnimation(signDictionary[word]);
        } else {
            signDisplay.innerHTML += `<p>ไม่มีภาษามือสำหรับ "${word}"</p>`;
        }
    });
}

// === ระบบ 3D Animation ===
let scene, camera, renderer, handModel;
function init3D() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('threeCanvas'), alpha: true });
    renderer.setSize(600, 300);
    document.body.appendChild(renderer.domElement);

    let light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    let loader = new THREE.GLTFLoader();
    loader.load('hand_model.glb', function (gltf) {
        handModel = gltf.scene;
        scene.add(handModel);
        handModel.position.set(0, -1, -2);
    });

    camera.position.z = 3;
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function playSignAnimation(action) {
    if (!handModel) return;
    switch (action) {
        case "wave":
            handModel.rotation.y += 0.5;
            break;
        case "thank":
            handModel.rotation.x += 0.3;
            break;
        default:
            break;
    }
}

// เรียกใช้งาน 3D
init3D();
