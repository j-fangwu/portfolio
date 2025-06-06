import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Magic = ({ isMobile }) => {
  const magic = useGLTF('./magic/scene.gltf');

  return (
    <mesh>
      <ambientLight intensity={2} />
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={2} position={[10, 10, 10]} />
      <spotLight 
        position={[-20, 50, 10]} 
        angle={0.3} 
        penumbra={1} 
        intensity={1} 
        castShadow 
        shadow-mapSize={2048}
      />
      <primitive 
        object={magic.scene} 
        scale={isMobile ? 1.2 : 1.5}
        position={isMobile ? [0, -3, 0] : [0, -2.5, 0]}
        target={[0, 0, 0]}
      />
    </mesh>
  ) 
}

const MagicCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          autoRotateSpeed={-0.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
        />
        <Magic />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}

export default MagicCanvas;