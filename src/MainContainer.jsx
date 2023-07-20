import { useHelper} from "@react-three/drei";
import AnimatedStars from "./AnimatedStars";
import { useRef } from "react";
import Earth from "./Earth";
import * as THREE from 'three'

const MainContainer = () => {

    const directionalLightRef = useRef()
    const directionalLightReftwo = useRef()

    useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'hotpink')
    useHelper(directionalLightReftwo, THREE.DirectionalLightHelper, 1, 'hotpink')

    return( 
        <>
            <color attach='background' args={['black']} />
            
            <AnimatedStars />
            {/* <directionalLight ref={directionalLightRef} position={[0, 0, 10]}/>
            <directionalLight ref={directionalLightReftwo} position={[0, 0, -10]}/> */}

            <ambientLight />
            <Earth displacementScale={0.15}/>
        </>
    )
}

export default MainContainer;