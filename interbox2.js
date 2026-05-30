import * as THREE from 'three';

const container = document.getElementById("interbox2");

if (container) {

    const size = container.clientWidth;
    const sc = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(
        
        75,
        1,
        0.1,
        1000
    );

    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });

    renderer.setSize(size, size);
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);
    container.addEventListener("dragover", (e) => {
        e.preventDefault();
    });



    container.addEventListener("drop", (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        const url = URL.createObjectURL(file);
        const texture = new THREE.TextureLoader().load(url);
        material.map = texture;
        material.color.set(0xffffff);
        material.needsUpdate = true;
    });
    const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);

    const material = new THREE.MeshBasicMaterial({
        color: 0xffffff
    });

    const torus = new THREE.Mesh(geometry, material);
    sc.add(torus);

    cam.position.z = 3;

    function anim() {
        requestAnimationFrame(anim);
        torus.rotation.x += 0.01;
        torus.rotation.y += 0.01;
        renderer.render(sc, cam);
    }

    anim();

    window.addEventListener("resize", () => {
        const newSize = container.clientWidth;
        renderer.setSize(newSize, newSize);
        cam.aspect = 1;
        cam.updateProjectionMatrix();
    });

}