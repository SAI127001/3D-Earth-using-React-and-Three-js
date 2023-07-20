import { Canvas } from "@react-three/fiber"
import MainContainer from "./MainContainer"
import { OrbitControls } from "@react-three/drei"

function App() {

  return (
    <Canvas camera={{fov: 75, near: 0.1, far: 1000, position: [0, 3, 3]}}>
      
      <MainContainer />
      <OrbitControls />
    </Canvas>

  )
}

export default App
