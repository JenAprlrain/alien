import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three";
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from "three";

import CeresMap from '../../../assets/4k_ceres_fictional.jpg';
import EarthCloudsMap from '../../../assets/Solarsystemscope_texture_8k_earth_clouds.jpg';



export function Planet(props) {

    const [ceresMap, cloudsMap] = useLoader(TextureLoader, [CeresMap, EarthCloudsMap]);

    const earthRef = useRef();

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        earthRef.current.rotation.x = elapsedTime / 6;
        earthRef.current.rotation.y = elapsedTime / 3;
    }

    );

    return (
        <>
            <ambientLight intensity={0.1} />
            <pointLight color="#f6f3ea" position={[12, 0, 2]} intensity={1.2} />
            <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade={true} />
            <mesh ref={earthRef}>
            <sphereGeometry args={[2, 32, 32]} />
            <meshPhongMaterial ceresMap={ceresMap} />
            <meshStandardMaterial map={ceresMap} metalness={0.9} roughness={1} />
             <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4}/>
            </mesh>
        </>
    );
}
