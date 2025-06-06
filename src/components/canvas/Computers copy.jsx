import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ( { isMobile } ) => {
  const computer = useGLTF('./cat/scene.gltf');

  return (
    <mesh>
      <ambientLight intensity={2} />
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={4} position={[10, 10, 10]} />
      <spotLight 
        position={[-20, 50, 10]} 
        angle={0.3} 
        penumbra={1} 
        intensity={4} 
        castShadow 
        shadow-mapSize={2048}
      />
      <primitive 
        object={computer.scene} 
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
    
  }, [])
  return (
    <Canvas 
      frameloop="demand"  // Note: lowercase 'frameloop' not 'frameLoop'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={-1} 
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;