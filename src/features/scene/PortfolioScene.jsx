import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

import './PortfolioScene.scss';

function PortfolioBox({ position, color }) {
    
    const meshRef = useRef();
    const [hovered, setHover] = useState(false);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh
            position={position}
            ref={meshRef}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            scale={hovered ? 1.2 : 1}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'black' : color} />
        </mesh>
    );
}

export function PortfolioScene() {
    return (
        <div className="portfolio-scene">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.9} />
                <pointLight position={[10, 10, 10]} />
                <PortfolioBox position={[0, 0, 0]} color="blue" />
                <PortfolioBox position={[2, 0, 0]} color="red" />
                <PortfolioBox position={[-2, 0, 0]} color="white" />
            </Canvas>
        </div>
    );
}