import React, { useState, useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { OrbitControls, Sphere, Stars, Box } from 'drei';



const Dolly = () => {
  const { camera } = useThree(); 
  // This one makes the camera move in and out
  useFrame(({ clock, camera }) => {
    camera.updateProjectionMatrix(void (camera.position.x = Math.sin(clock.getElapsedTime() / 18) * 10))
    // camera.updateProjectionMatrix(void (camera.position.y = clock.getElapsedTime()) * -1)
    camera.updateProjectionMatrix(void (camera.position.z = Math.cos(clock.getElapsedTime() / 18) * 10))


    // camera.updateProjectionMatrix(void (camera.position.y = 10 + Math.sin(clock.getElapsedTime()) * 15))
    camera.lookAt(0,0,0)
    })
    
  return null
}


const three = (props) => {

  const [canvClass, setCanvClass] = useState("useThree");


  return (
    <Canvas className={canvClass}
            onCreated={() => {setCanvClass("useThree displayThree"); props.setLoad("hideLoad")}}
            camera={{fov: 40, position: [0,5,0] }} 
            pixelRatio={typeof window === 'undefined' ? "1" : window.devicePixelRatio}>
      <ambientLight color="white" intensity={.4}/>
      <pointLight position={[30, 30, 30]} intensity={.5} color="red" />
      <pointLight position={[-30, 30, 30]} intensity={.5} color="blue" />
      <pointLight position={[30, -30, 30]} intensity={.5} color="green" />
      <pointLight position={[-30, -30, 30]} intensity={.5} color="purple" />
      <pointLight position={[30, 30, -30]} intensity={.5} color="red" />
      <pointLight position={[-30, -30, -30]} intensity={.5} color="blue" />
      <pointLight position={[30, -30, -30]} intensity={.5} color="green" />
      <pointLight position={[-30, -30, -30]} intensity={.5} color="purple" />

      <Sphere args={[1.7,40,40]}
        onPointerEnter={(e) => console.log("enter")}
        onPointerLeave={(e) => console.log("leave")}
        >
        <meshStandardMaterial attach="material" color="white" />
      </Sphere>
      <Stars fade={true} factor={6} radius={80}/>
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