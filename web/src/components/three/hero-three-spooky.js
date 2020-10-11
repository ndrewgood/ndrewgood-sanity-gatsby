import * as THREE from 'three'
import React, { useState, useEffect, Suspense, Fragment } from 'react'
import { Canvas, useFrame, useThree, useLoader } from "react-three-fiber";
import { OrbitControls, Sphere, Stars, Box } from 'drei';

import img from '../../assets/pumpkin4.png'

let heroFov;

const Dolly = () => {
  const { camera } = useThree(); 
  // This one makes the camera move in and out
  useFrame(({ clock, camera }) => {
    camera.updateProjectionMatrix(void (camera.position.x = Math.sin(clock.getElapsedTime() / 18) * 10))
    // camera.updateProjectionMatrix(void (camera.position.y = clock.getElapsedTime()) * -1)
    camera.updateProjectionMatrix(void (camera.position.z = Math.cos(clock.getElapsedTime() / 18) * 10))
    
    let windowWidth = window.innerWidth
    let cFov = 40
    windowWidth <= 800 ? cFov = 60 : cFov = 40
    camera.updateProjectionMatrix(void (camera.fov = cFov))

    // camera.updateProjectionMatrix(void (camera.position.y = 10 + Math.sin(clock.getElapsedTime()) * 15))
    camera.lookAt(0,0,0)
    })
    
  return null
}


const Scene = (props) => {
  const texture = useLoader(THREE.TextureLoader, img)


  return (
      <Fragment>
        <ambientLight color="#b54c0e" intensity={.7}/>
        <pointLight position={[30, 30, 30]} intensity={.4} color="#e0723f" />
        <pointLight position={[-30, 30, 30]} intensity={.3} color="#ed8932" />
        <pointLight position={[30, -30, 30]} intensity={.4} color="#f0ca41" />
        <pointLight position={[-30, -30, 30]} intensity={.4} color="#f5ca5f" />
        <pointLight position={[30, 30, -30]} intensity={.3} color="#d9704a" />
        <pointLight position={[-30, -30, -30]} intensity={.4} color="#cf6034" />
        <pointLight position={[30, -30, -30]} intensity={.3} color="#d48c28" />
        <pointLight position={[-30, -30, -30]} intensity={.4} color="#d1690f" />
        <pointLight position={[-30, 30, -30]} intensity={.4} color="#e07848" />

        <Sphere args={[1.7,40,40]}
          onPointerEnter={(e) => console.log("enter")}
          onPointerLeave={(e) => console.log("leave")}
          >
          <meshStandardMaterial attach="material" map={texture}  />
        </Sphere>
        <Stars fade={true} factor={6} radius={80}/>
        { 
          props.control ? <OrbitControls /> : null 
        }
        {
          props.animate ? <Dolly /> : null
        }
      </Fragment>

  )
    
}


const three = (props) => {



  const [canvClass, setCanvClass] = useState("useThree");

  let cameraSettings = {
    fov: 40,
    position: [0,5,0]
  }


  return (
    <Canvas className={canvClass}
            onCreated={() => {setCanvClass("useThree displayThree"); props.setLoad("hideLoad")}}
            camera={cameraSettings}
            pixelRatio={typeof window === 'undefined' ? "1" : window.devicePixelRatio}>
      <Suspense fallback={null}>
          <Scene control={props.control} animate={props.animate}/>
      </Suspense>
    </Canvas>
  );

}

export default three