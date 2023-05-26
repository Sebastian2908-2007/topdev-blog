import { PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import styles from '../styles/Home.module.css';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
function Cube() {
    const meshRef = useRef(null);

    const logo = useLoader(TextureLoader, 'new-td-logo.png');
  
    useFrame(() => {
      if (!meshRef.current) {
        return;
      }
      
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    });
  
    return (
      <mesh ref={meshRef}>
        
        <boxGeometry args={[555,555,555]}/>
        <meshStandardMaterial toneMapped={false}  mapScale={0.2} map={logo}  />
      </mesh>
    );
  }

export default function ThreeDLogo  () {
return(
  <div id="my-div" className={styles.myDiv}>
    <Canvas
    camera={{
      
        position: [0,0,1000],
      }}>
        <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube />
    </Canvas>
    </div>
);
};