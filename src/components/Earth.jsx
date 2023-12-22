import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import React, { forwardRef } from 'react';
import planetTexture from '../images/3D/planet.png';

const Earth = forwardRef((props, ref) => {
    const texture = useLoader(TextureLoader, planetTexture);
    return (
        <mesh ref={ref}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    );
});

export default Earth;


