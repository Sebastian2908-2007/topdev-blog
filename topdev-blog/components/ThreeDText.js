import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { Suspense, useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
const ThreeDText = () => {

   function Model(props) {
        const { nodes, materials } = useGLTF('/td-blog.glb')
        return (
          <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={1}>
              <mesh geometry={nodes['3D_Text_-_C'].geometry} material={materials['Cool Touch']} position={[-19.23, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_u'].geometry} material={materials['Cool Touch']} position={[-18.34, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_u_1'].geometry} material={materials['Cool Touch']} position={[-15.7, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_u_2'].geometry} material={materials['Cool Touch']} position={[-11.2, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_r'].geometry} material={materials['Cool Touch']} position={[-17.48, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_i'].geometry} material={materials['Cool Touch']} position={[-16.91, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_i_1'].geometry} material={materials['Cool Touch']} position={[-5.86, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_i_2'].geometry} material={materials['Cool Touch']} position={[4.58, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_o'].geometry} material={materials['Cool Touch']} position={[-16.55, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_o_1'].geometry} material={materials['Cool Touch']} position={[-12.05, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_o_2'].geometry} material={materials['Cool Touch']} position={[7.94, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_s'].geometry} material={materials['Cool Touch']} position={[-14.84, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_s_1'].geometry} material={materials['Cool Touch']} position={[-6.53, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_s_2'].geometry} material={materials['Cool Touch']} position={[-4.21, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_A'].geometry} material={materials['Cool Touch']} position={[-13.8, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_b'].geometry} material={materials['Cool Touch']} position={[-12.91, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_b_1'].geometry} material={materials['Cool Touch']} position={[-7.39, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_t'].geometry} material={materials['Cool Touch']} position={[-10.34, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_t_1'].geometry} material={materials['Cool Touch']} position={[-5.5, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_W'].geometry} material={materials['Cool Touch']} position={[-9.48, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_e'].geometry} material={materials['Cool Touch']} position={[-8.18, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_e_1'].geometry} material={materials['Cool Touch']} position={[-5, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_e_2'].geometry} material={materials['Cool Touch']} position={[-2.06, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_e_3'].geometry} material={materials['Cool Touch']} position={[5.41, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_e_4'].geometry} material={materials['Cool Touch']} position={[10.68, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_e_5'].geometry} material={materials['Cool Touch']} position={[16.08, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_,'].geometry} material={materials['Cool Touch']} position={[-3.54, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_,_1'].geometry} material={materials['Cool Touch']} position={[0.27, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_T'].geometry} material={materials['Cool Touch']} position={[-2.83, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_T_1'].geometry} material={materials['Cool Touch']} position={[7.17, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_c'].geometry} material={materials['Cool Touch']} position={[-1.27, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_c_1'].geometry} material={materials['Cool Touch']} position={[12.54, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_h'].geometry} material={materials['Cool Touch']} position={[-0.6, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_h_1'].geometry} material={materials['Cool Touch']} position={[15.22, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_a'].geometry} material={materials['Cool Touch']} position={[0.98, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_a_1'].geometry} material={materials['Cool Touch']} position={[13.21, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_n'].geometry} material={materials['Cool Touch']} position={[1.76, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_n_1'].geometry} material={materials['Cool Touch']} position={[13.99, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_d'].geometry} material={materials['Cool Touch']} position={[2.62, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_L'].geometry} material={materials['Cool Touch']} position={[3.85, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_f'].geometry} material={materials['Cool Touch']} position={[4.93, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_?'].geometry} material={materials['Cool Touch']} position={[6.2, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_p'].geometry} material={materials['Cool Touch']} position={[8.79, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_p_1'].geometry} material={materials['Cool Touch']} position={[17.23, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_D'].geometry} material={materials['Cool Touch']} position={[9.66, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_v'].geometry} material={materials['Cool Touch']} position={[11.47, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_l'].geometry} material={materials['Cool Touch']} position={[16.87, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-_'].geometry} material={materials['Cool Touch']} position={[18.09, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-__1'].geometry} material={materials['Cool Touch']} position={[18.46, 0.23, 0.38]} scale={0.03} />
              <mesh geometry={nodes['3D_Text_-__2'].geometry} material={materials['Cool Touch']} position={[18.84, 0.23, 0.38]} scale={0.03} />
            </group>
          </group>
        )
      }
      
      useGLTF.preload('/td-blog.glb')
   
     
   
    return(
        <div>
        <Canvas
        linear={true}
        camera={{position: [0,0,2]}}
          >
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}/>
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