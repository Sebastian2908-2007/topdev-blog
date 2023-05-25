import { PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import styles from '../styles/Home.module.css';
function Cube() {
    const meshRef = useRef(null);
  
    useFrame(() => {
      if (!meshRef.current) {
        return;
      }
      
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    });
  
    return (
      <mesh ref={meshRef}>
        
        <boxGeometry args={[4,4,4]}/>
        <meshStandardMaterial color="blue" />
      </mesh>
    );
  }

export default function ThreeDLogo  () {
return(
  <div id="my-div" className={styles.myDiv}>
    <Canvas
    camera={{
      
        position: [0,0,5],
      }}>
        <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube />
    </Canvas>
    </div>
);
};