'use client'

import { Canvas } from "@react-three/fiber";
import { Avatar } from "./Avatar";
import { Environment } from "@react-three/drei";

export default function Experience(){

    return(
        <Canvas shadows camera={{position: [0, 0.07, 3], fov: 30}}>
            <Avatar position={[0.010, -1.6, 2.1]}/>
            <ambientLight intensity={1}/>
            <Environment preset="city"/>
        </Canvas>
    )
}