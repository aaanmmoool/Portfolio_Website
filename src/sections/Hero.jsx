import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import HackerRoom from '../components/HackerRoom';
import { Leva, useControls } from 'leva';

const Hero = () => {
  const { positionX, positionY, positionZ, rotationX, rotationY, rotationZ, scaleX } = useControls('HackerRoom', {
    positionX: { value: 0, min: -10, max: 10 },
    positionY: { value: 2, min: -10, max: 10 },  // Lowered to make it centered
    positionZ: { value: 0, min: -10, max: 10 },
    rotationX: { value: 0, min: -Math.PI, max: Math.PI },
    rotationY: { value: 0, min: -Math.PI, max: Math.PI },
    rotationZ: { value: 0, min: -Math.PI, max: Math.PI },
    scaleX: { value: 0.2, min: 0.1, max: 1 }, // Reduced scale
  });

  return (
    <section className='min-h-screen w-full flex flex-col relative'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3 text-center'>
        <p className='sm:text-3xl text-2xl font-medium text-white font-generalsans'>
          Hi, I am Anmol Singh <span className='waving-hand'>👋</span>
        </p>
        <p className='hero_tag text-gray_gradient text-xs'>
          Building Trust & Trustworthy Scalable Softwares
        </p>
      </div>

      <div className='w-full h-full absolute inset-0'>
        <Leva /> 
        <Canvas style={{ width: '100%', height: '100%' }}>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 5, 50]} /> {/* Moved Camera Back */}
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} color='white' />

            <HackerRoom 
              position={[positionX, positionY, positionZ]} 
              rotation={[rotationX, rotationY, rotationZ]} 
              scale={[scaleX, scaleX, scaleX]} 
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
