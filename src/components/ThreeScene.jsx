import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeScene = () => {
  const mountRef = useRef(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(0, 1, 3);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = false;

    controls.minPolarAngle = Math.PI / 2 - 0.1;
    controls.maxPolarAngle = Math.PI / 2 + 0.1;

    const loader = new GLTFLoader();
    loader.load(
      'richard-couzens.glb',
      (glb) => {
        const mesh = glb.scene;
        
        // Center the model using bounding box
        const box = new THREE.Box3().setFromObject(mesh);
        const center = box.getCenter(new THREE.Vector3());
        mesh.position.sub(center);  // Offset the model's position by its center
        mesh.scale.set(1.5, 1.5, 1.5);

        scene.add(mesh);
        setLoading(false);
      },
      (progress) => {},
      (error) => {
        console.error('An error happened during model loading:', error);
        setError('Failed to load model');
      }
    );

    // Increase the ambient light intensity
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 2);
    scene.add(ambientLight);

    // Increase the point light intensity
    const pointLight = new THREE.PointLight(0x404040, 1);
    pointLight.position.set(-1, 1, 3);
    scene.add(pointLight);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const onWindowResize = () => {
      // Update camera aspect ratio and renderer size on window resize
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);

    return () => {
      if (mountRef.current) {
        window.removeEventListener('resize', onWindowResize);
        controls.dispose();
        mountRef.current.removeChild(renderer.domElement);
        renderer.dispose();
        scene.traverse((object) => {
          if (object.geometry) {
            object.geometry.dispose();
          }
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        overflow: 'hidden', // Prevent horizontal scroll
      }}
    >
      {loading && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '1.5rem',
            color: '#333',
          }}
        >
          3D model loading...
        </div>
      )}
    </div>
  );
};

export default ThreeScene;
