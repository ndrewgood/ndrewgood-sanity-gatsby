import React, { useState, useRef, useMemo, Suspense } from 'react'
import { TextureLoader, WebGLRenderTarget, Object3D, LinearFilter } from "three"
import { Canvas, useFrame, useLoader, useThree } from "react-three-fiber";
import { OrbitControls, useCubeTextureLoader, Plane } from 'drei';


import BackfaceMaterial from "./backface-material"
import RefractionMaterial from "./refraction-material"
import textureUrl from "./skybox/front.png"

// import { useSpring, a } from "react-spring/three";


// const Sphere = () => {
//   const mesh = useRef(null);
//   useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005))

//   return(
//     <mesh ref={mesh}>
//       <sphereBufferGeometry attach='geometry' args={['1.3', 10, 10]} />
//       <meshBasicMaterial attach='material' color={'0x111111'}  />
//     </mesh>
//   )
// }

function Background() {
  const { viewport, aspect, camera } = useThree()
  const texture = useLoader(TextureLoader, textureUrl)

  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.z += 0.005))

  useMemo(() => (texture.minFilter = LinearFilter), [])
  // Calculates a plane filling the screen similar to background-size: cover
  const adaptedHeight = 3800 * (aspect > 5000 / 3800 ? viewport.width / 5000 : viewport.height / 3800)
  const adaptedWidth = 5000 * (aspect > 5000 / 3800 ? viewport.width / 5000 : viewport.height / 3800)
  console.log(adaptedHeight + ", "+ adaptedWidth);
  return (
    <mesh ref={mesh} layers={1} scale={[1,1,1]} position={[0,0,-10]}>
      <circleBufferGeometry args={[2,32]}attach="geometry" />
      <meshBasicMaterial attach="material" map={texture} depthTest={false} />
    </mesh>
  )
}

const Sphere = () => {
  const { size, gl, scene, camera } = useThree()
  const mesh = useRef()

  // Create Fbo's and materials
  const [envFbo, backfaceFbo, backfaceMaterial, refractionMaterial] = useMemo(() => {
    const envFbo = new WebGLRenderTarget(size.width, size.height)
    const backfaceFbo = new WebGLRenderTarget(size.width, size.height)
    const backfaceMaterial = new BackfaceMaterial()
    const refractionMaterial = new RefractionMaterial({ envMap: envFbo.texture, backfaceMap: backfaceFbo.texture, resolution: [size.width, size.height] })
    return [envFbo, backfaceFbo, backfaceMaterial, refractionMaterial]
  }, [size])

  // Render-loop
  useFrame(() => {
    // Render env to fbo
    gl.autoClear = false
    camera.layers.set(1)
    gl.setRenderTarget(envFbo)
    gl.render(scene, camera)
    // Render cube backfaces to fbo
    camera.layers.set(0)
    mesh.current.material = backfaceMaterial
    gl.setRenderTarget(backfaceFbo)
    gl.clearDepth()
    gl.render(scene, camera)
    // Render env to screen
    camera.layers.set(1)
    gl.setRenderTarget(null)
    gl.render(scene, camera)
    gl.clearDepth()
    // Render cube with refraction material to screen
    camera.layers.set(0)
    mesh.current.material = refractionMaterial
    gl.render(scene, camera)
  }, 1)

  return (
    <mesh ref={mesh} layers={0} >
       <sphereBufferGeometry attach='geometry' args={[1, 40, 40]} />
       <meshBasicMaterial attach='material' />
    </mesh>
  )
}




const SkyBox = () => {
  const mesh = useRef(null);

  // const envMap = useCubeTextureLoader(
  //   ['back.png', 'down.png', 'front.png', 'left.png', 'right.png', 'top.png'], 
  //   { path: './skybox/' }
  // )

  return(
    <mesh ref={mesh} position={[2, 0, 0]}>
      <boxBufferGeometry attach='geometry' args={[2, 2, 2]} />
      <meshBasicMaterial />
    </mesh>
  )
}


const three = () => {

  const { scene } = useThree();

  // const texture = useLoader(TextureLoader, textureUrl)
  // scene.background = texture

  return(
   <>
      <Canvas colorManagement layers={2} camera={{position: [0, 0, 10], fov: 20 }}>
        <Suspense fallback={null}>
          {/* <ambientLight intensity={.3} /> */}
          {/* <pointLight position={[-10, 0 , -20]} intensity={.5}/>
          <pointLight position={[0, -10 , 0]} intensity={1.5}/> */}
          
          <Background />
          <Sphere />

          {/* <Sky 
          distance={650000}
          sunPosition={[0, 0.005, -1]}
          material-uniforms-turbidity-value={1.5}
          material-uniforms-rayleigh-value={3}
          material-uniforms-mieCoefficient-value={0.05}
          material-uniforms-mieDirectionalG-value={0.9}

          /> */}
        </Suspense>
      </Canvas>
   </>
  )
}

export default three