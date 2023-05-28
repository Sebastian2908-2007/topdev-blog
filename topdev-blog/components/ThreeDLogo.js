import { PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import styles from '../styles/Home.module.css';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { OrbitControls, useGLTF } from '@react-three/drei'
function Cube() {
    const meshRef = useRef(null);

    const logo = useLoader(TextureLoader, 'new-TD-logo.png');

    
  
    useFrame(() => {
      if (!meshRef.current) {
        return;
      }
      meshRef.current.rotation.x += 0.007;
      meshRef.current.rotation.z += 0.007;
      meshRef.current.rotation.y += 0.007;
    });
  
    return (
      <group position={[0,0,0]}>
      <mesh ref={meshRef}>
        
       <boxGeometry args={[555,555,555]}/>
      {/*<primitive object={logo.scene}/>*/}
       <meshStandardMaterial toneMapped={false}  mapScale={0.2} map={logo}  />
      </mesh>
      </group>
    );
  }

export default function ThreeDLogo  () {
return(
  <div id="my-div" className={styles.myDiv}>
    <Canvas
    linear={true}
    camera={{position: [0,0,1000]}}
      >
         <OrbitControls enablePan={true} enableZoom={false} enableRotate={true}/>
        <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube />
    </Canvas>
    </div>
);

};