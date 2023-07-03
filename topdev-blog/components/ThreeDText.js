import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { Suspense, useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'


function Model(props) {
  const meshRef = useRef(null);
  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
   
    meshRef.current.rotation.z += 0.014
 
  });
  const { nodes, materials } = useGLTF('/td-text.glb')
  return (
    <group {...props} dispose={null}>
      <group ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} scale={1}>
        <mesh geometry={nodes['3D_Text_-_T'].geometry} material={materials.Lifeline} position={[-16.11, 1.57, 1.99]} scale={0.21} />
        <mesh geometry={nodes['3D_Text_-_o'].geometry} material={materials.Lifeline} position={[-10.6, 1.57, 1.99]} scale={0.21} />
        <mesh geometry={nodes['3D_Text_-_p'].geometry} material={materials.Lifeline} position={[-5.59, 1.57, 1.99]} scale={0.21} />
        <mesh geometry={nodes['3D_Text_-_D'].geometry} material={materials.Lifeline} position={[-0.51, 1.57, 1.99]} scale={0.21} />
        <mesh geometry={nodes['3D_Text_-_e'].geometry} material={materials.Lifeline} position={[6.25, 1.57, 1.99]} scale={0.21} />
        <mesh geometry={nodes['3D_Text_-_v'].geometry} material={materials.Lifeline} position={[10.86, 1.57, 1.99]} scale={0.21} />
      </group>
    </group>
  )
}

useGLTF.preload('/td-text.glb')
const ThreeDText = () => {


   
     
   
    return(
        <div>
        <Canvas
        linear={true}
        camera={{position: [0,0,25]}}
          >
            <OrbitControls enablePan={true} enableZoom={false} enableRotate={true}/>
            <Suspense fallback={null}>
            <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Model/>
        </Suspense>
        </Canvas>
        </div>
    );
};

export default ThreeDText;