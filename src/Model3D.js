import React, { useRef, useState } from 'react';
import "./css/3DModel.css";  // Import the CSS file for the animated header
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

// Funktion für das anklickbare Modell
function ClickableModel(props) {
  const ref = useRef();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);  // Toggle Zustand bei Klick
    console.log('Model clicked!');
  };

  return (
    <mesh {...props} ref={ref} onClick={handleClick}>
      <primitive object={props.model} />
      {clicked && <meshBasicMaterial color="red" />}  {/* Beispiel für Klick-Feedback */}
    </mesh>
  );
}

function Model3D() {
  const { scene } = useGLTF('/models/bed_3d_render.glb');  

  return (
    <Canvas>
      {/* Beleuchtung */}
      <ambientLight intensity={3.5} />
      <spotLight position={[10, 10, 10]} angle={0.5} intensity={1} />

      {/* Kamera und Blickwinkel anpassen */}
      <perspectiveCamera makeDefault position={[0, 5, 10]} fov={50} />

      {/* 3D-Modell */}
      <Suspense fallback={<div>Loading...</div>}>
        <ClickableModel
          model={scene}
          position={[2, -1, 0]}  // Modell leicht am Boden positionieren
        />
      </Suspense>

      {/* OrbitControls mit Zoom-Einstellungen */}
      <OrbitControls
        minDistance={3}  // Mindestzoom
        maxDistance={15} // Maximalzoom
        enableZoom={true} // Zoom aktivieren
      />
    </Canvas>
  );
}

export default Model3D;
