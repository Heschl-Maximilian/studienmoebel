import React, { useRef, useState, Suspense } from 'react';
import "./css/3DModel.css";  
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// Funktion für das anklickbare Modell
function ClickableModel(props) {
  const ref = useRef();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    console.log('Model clicked!');
  };

  return (
    <mesh {...props} ref={ref} onClick={handleClick}>
      <primitive object={props.model} />
      {clicked && <meshBasicMaterial color="red" />}
    </mesh>
  );
}

// Kleinerer Boden
function Floor({ color = "#2ecc71" }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]} receiveShadow>
      <planeGeometry args={[10, 10]} />  {/* Kleinere Bodenfläche */}
      <meshStandardMaterial color={color} roughness={1} />
    </mesh>
  );
}

function Model3D() {
  const { scene } = useGLTF('/models/bed_3d_render.glb');  

  return (
    <div className="model-container">
      <Canvas shadows camera={{ position: [0, 3, 7], fov: 30 }}>
        {/* Beleuchtung */}
        <ambientLight intensity={2} />
        <spotLight position={[5, 5, 5]} angle={0.5} intensity={1} castShadow />

        {/* 3D-Modell */}
        <Suspense fallback={<div>Loading...</div>}>
          <ClickableModel model={scene} position={[1.8, -1, -0.5]} />
        </Suspense>

        {/* Kleiner Boden */}
        <Floor color="#FFFFFF" /> {/* Blau als Beispiel */}

        {/* OrbitControls (nur drehen & zoomen) */}
        <OrbitControls 
          minDistance={2} 
          maxDistance={10} 
          enableZoom={true} 
          enablePan={false}  // Kein Verschieben
          maxPolarAngle={Math.PI / 2.2}  // Kein Blick unter Boden
        />
      </Canvas>
    </div>
  );
}

export default Model3D;
