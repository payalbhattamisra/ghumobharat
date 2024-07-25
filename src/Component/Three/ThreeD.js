import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const ThreeD = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, controls;
    const init = async () => {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
     
      camera.position.set(0, 0, 20); 
      camera.lookAt(0, 0, 0); 
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      const loader = new GLTFLoader();
      
      try {
        const gltf = await loader.loadAsync('/house.glb');
        const model = gltf.scene;
        scene.add(model);


        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enableZoom = true;


        const boundingBox = new THREE.Box3().setFromObject(model);
        const center = boundingBox.getCenter(new THREE.Vector3());
        const size = boundingBox.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = camera.fov * (Math.PI / 180);
        let cameraDistance = Math.abs(maxDim / Math.sin(fov / 2));
        cameraDistance *= 1.2; 
        camera.position.copy(center);
        const direction = new THREE.Vector3().subVectors(camera.position, center).normalize();
        camera.position.add(direction.multiplyScalar(cameraDistance));
        camera.lookAt(center);


        const animate = () => {
          controls.update();
          renderer.render(scene, camera);
          requestAnimationFrame(animate);
        };
        
        animate();
      } catch (error) {
        console.error('Error loading model:', error);
      }
    };

    init();

    return () => {
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ThreeD;
