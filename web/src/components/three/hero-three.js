import React, { useState, useRef } from 'react'
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { OrbitControls as ThreeOrbitControls } from 'three/examples/jsm/controls/OrbitControls'

let heroFov;

// Custom OrbitControls component
const OrbitControls = () => {
  const { camera, gl } = useThree()
  const controls = useRef()
  
  useFrame(() => {
    controls.current.update()
  })
  
  return <primitive object={new ThreeOrbitControls(camera, gl.domElement)} ref={controls} />
}

// Custom Sphere component
const Sphere = ({ args, children, ...props }) => {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={args} />
      {children}
    </mesh>
  )
}

// Custom Stars component
const Stars = ({ count = 5000, radius = 80 }) => {
  const positions = new Float32Array(count * 3)
  
  for(let i = 0; i < count; i++) {
    const i3 = i * 3
    const r = radius * Math.cbrt(Math.random())
    const theta = Math.random() * 2 * Math.PI
    const phi = Math.acos(2 * Math.random() - 1)
    positions[i3] = r * Math.sin(phi) * Math.cos(theta)
    positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    positions[i3 + 2] = r * Math.cos(phi)
  }

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial attach="material" size={0.1} sizeAttenuation color="white" />
    </points>
  )
}

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

const three = (props) => {


  const [canvClass, setCanvClass] = useState("useThree");


  // console.log("windowWidth: " + props.windowWidth);

  let cameraSettings = {
    fov: 40,
    position: [0,5,0]
  }


  return (
    <Canvas className={canvClass}
            onCreated={() => {setCanvClass("useThree displayThree"); props.setLoad("hideLoad")}}
            camera={cameraSettings} 
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