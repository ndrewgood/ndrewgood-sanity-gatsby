import React, { useState, useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { OrbitControls, Sphere, Stars, Box } from 'drei';

const Dolly = () => {
  const { camera } = useThree(); 
  // This one makes the camera move in and out
  useFrame(({ clock, camera }) => {
    camera.updateProjectionMatrix(void (camera.position.x = Math.sin(clock.getElapsedTime() / 20) * 10))
    // camera.updateProjectionMatrix(void (camera.position.y = clock.getElapsedTime()) * -1)
    camera.updateProjectionMatrix(void (camera.position.z = Math.cos(clock.getElapsedTime() / 20) * 10))


    // camera.updateProjectionMatrix(void (camera.position.y = 10 + Math.sin(clock.getElapsedTime()) * 15))
    camera.lookAt(0,0,0)
    })
    
  return null
}


const three = (props) => {


  return (
    <Canvas camera={{fov: 40, position: [0,5,0] }}>
      <ambientLight color="white" intensity={.4}/>
      <pointLight position={[30, 30, 30]} intensity={.5} color="red" />
      <pointLight position={[-30, 30, 30]} intensity={.5} color="blue" />
      <pointLight position={[30, -30, 30]} intensity={.5} color="green" />
      <pointLight position={[-30, -30, 30]} intensity={.5} color="purple" />
      <pointLight position={[30, 30, -30]} intensity={.5} color="red" />
      <pointLight position={[-30, -30, -30]} intensity={.5} color="blue" />
      <pointLight position={[30, -30, -30]} intensity={.5} color="green" />
      <pointLight position={[-30, -30, -30]} intensity={.5} color="purple" />

      <Sphere args={[2,40,40]}
        onPointerEnter={(e) => console.log("enter")}
        onPointerLeave={(e) => console.log("leave")}
        >
        <meshStandardMaterial attach="material" color="white" />
      </Sphere>
      <Stars />
      { 
        props.control ? <OrbitControls /> : null 
      }
      {
        props.animate ? <Dolly /> : null
      }
    </Canvas>
  );

}

export default three