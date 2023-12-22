import React, { useRef, useMemo } from 'react';
import Earth from "../components/Earth";
import { Canvas, useFrame, extend } from '@react-three/fiber';
import * as THREE from 'three';


const RotatingEarth = () => {
    const earthRef = useRef();
    useFrame(() => {
        if (earthRef.current) { // Добавляем проверку, что earthRef.current существует
            earthRef.current.rotation.y += 0.003;
        }
    });
    return <Earth ref={earthRef} />;
};

function MyThree() {
    return (
        <Canvas camera={{
            fov: 90,
            position: [0, 0, 1.8],
        }} style={{ width: "100%", height: "100vh", display: "block", background: 'black' }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <RotatingEarth />
        </Canvas>
    );
}

export default MyThree;

