'use client'
import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Vector3 } from "three";
import { Loader } from "@react-three/drei";
import { Suspense } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
/**3D model licensing edtails
 * Model Information:
* title:	Grand Piano
* source:	https://sketchfab.com/3d-models/grand-piano-4ce9e8dbeb74425eb215e4168807dcb5
* author:	richterbelmont26 (https://sketchfab.com/richterbelmont26)

Model License:
* license type:	CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
* requirements:	Author must be credited. Commercial use is allowed.

If you use this 3D model in your project be sure to copy paste this credit wherever you share it:
This work is based on "Grand Piano" (https://sketchfab.com/3d-models/grand-piano-4ce9e8dbeb74425eb215e4168807dcb5) by richterbelmont26 (https://sketchfab.com/richterbelmont26) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
 */

const Homepage = () => {

  useEffect(()=> {

  },[])
  const Model = ({ link }) => {

    const modelref = useRef();
    let cw = true;
    let down = true;
    useFrame((delta) => {
      modelref.current.rotation.y += 0.01;
    })
    const gltf = useLoader(GLTFLoader, link);
    return (
      <>
        <primitive position-y={-0.4} scale-x={0.06} scale-y={0.06} scale-z={0.06} rotation-x={0.3} rotation-y={0} ref={modelref} object={gltf.scene} scale={1} />
      </>
    );
  };

  const Piano = ({ link }) => {

    const modelref = useRef();
    let cw = true;
    let down = true;
    useFrame((delta) => {
      modelref.current.rotation.y += 0.005;
    })
    const gltf = useLoader(GLTFLoader, link);
    return (
      <>
        <primitive position-y={-0.4} scale-x={0.5} scale-y={0.5} scale-z={0.5} rotation-x={0.3} rotation-y={0} ref={modelref} object={gltf.scene} scale={1} />
      </>
    );
  };
  function Cube(props) {
    const cuberef = useRef();
    useFrame((delta) => {
      cuberef.current.rotation.x += 0.01;
      cuberef.current.rotation.y += 0.01;
    })


    return (
      <mesh ref={cuberef} {...props}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial />
      </mesh>
    )
  }
  return (
    
    <Suspense fallback={<Loader/>}>
    <div className="homepage">
      <div className="spinning"></div>
      <div className="overlay">
        <div className="nameDiv">
          <img src="./name.svg"></img>
        </div>
        <div className="lastDiv">
          <img src="./last.svg"></img>
        </div>
      </div>
      <div className="navigation">
        <p>Software Developer studying at McMaster University. Full-stack and AI focused.</p>
        <Navbar number={0} />
        <p style={{ paddingTop: "3em" }}>  website by aidan lao  </p>
        <p>laoa6@mcmaster.ca</p>
      </div>
      <div id="canvas-container">
          <Canvas >
            <ambientLight intensity={4} />

            <Environment background={false} preset="sunset" />
           
            <Model link="./laptop.glb" />
            
          </Canvas>
      </div>
    </div>
    </Suspense>
  )
}
export default Homepage;