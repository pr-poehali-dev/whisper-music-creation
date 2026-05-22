import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect } from "react"
import * as THREE from "three"
import Scene from "./Scene"
import Overlay from "./Overlay"
import LoadingScreen from "./LoadingScreen"

export default function Gallery3D() {
  useEffect(() => {
    THREE.DefaultLoadingManager.onStart = () => {}
    const loader = new THREE.TextureLoader()
    loader.crossOrigin = "anonymous"
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: false }}
        onCreated={({ gl }) => {
          gl.setClearColor("#0d0618")
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      <Overlay />
      <LoadingScreen />
    </div>
  )
}