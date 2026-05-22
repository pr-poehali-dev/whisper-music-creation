import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { RoundedBox, Text, MeshTransmissionMaterial } from "@react-three/drei"
import * as THREE from "three"

const STYLES = [
  { id: "natural", label: "Натуральный", color: "#FFD600" },
  { id: "glam", label: "Гламур", color: "#F472B6" },
  { id: "sport", label: "Спорт", color: "#34D399" },
  { id: "evening", label: "Вечерний", color: "#A855F7" },
]

interface MirrorRoomProps {
  avatarUrl: string | null
  selectedStyle: string
}

function FloatingSphere({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    ref.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * speed) * 0.15
    ref.current.rotation.x += 0.005
    ref.current.rotation.y += 0.008
  })
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.12, 32, 32]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} roughness={0.1} metalness={0.8} />
    </mesh>
  )
}

function MirrorFrame() {
  const frameRef = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!frameRef.current) return
    frameRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.08
  })
  return (
    <group ref={frameRef}>
      <RoundedBox args={[1.8, 2.6, 0.08]} radius={0.08} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1a0a2e" roughness={0.2} metalness={0.9} />
      </RoundedBox>
      <RoundedBox args={[1.65, 2.45, 0.02]} radius={0.05} position={[0, 0, 0.05]}>
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.3}
          roughness={0.05}
          transmission={0.95}
          ior={1.5}
          chromaticAberration={0.06}
          color="#c8a0ff"
        />
      </RoundedBox>
      {[[-0.9, 1.35], [0.9, 1.35], [-0.9, -1.35], [0.9, -1.35]].map(([x, y], i) => (
        <mesh key={i} position={[x, y, 0.06]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#FFD600" emissive="#FFD600" emissiveIntensity={1} />
        </mesh>
      ))}
      <Text position={[0, -1.55, 0.1]} fontSize={0.1} color="#FFD600" anchorX="center" font="https://fonts.gstatic.com/s/nunito/v25/XRXI3I6Li01BKofiOc5wtlZ2di8HDDuhTQ.woff2">
        HAVEN Mirror
      </Text>
    </group>
  )
}

export default function MirrorRoom({ avatarUrl, selectedStyle }: MirrorRoomProps) {
  const style = STYLES.find(s => s.id === selectedStyle) || STYLES[0]

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[3, 3, 3]} intensity={1.5} color="#FFD600" />
      <pointLight position={[-3, 2, 2]} intensity={1.2} color="#A855F7" />
      <pointLight position={[0, -2, 4]} intensity={0.8} color="#F472B6" />
      <spotLight position={[0, 4, 2]} intensity={2} color="#ffffff" angle={0.4} penumbra={0.8} target-position={[0, 0, 0]} />

      <MirrorFrame />

      <FloatingSphere position={[-2.5, 0.5, -1]} color="#FFD600" speed={1.2} />
      <FloatingSphere position={[2.5, -0.3, -1.5]} color="#A855F7" speed={0.8} />
      <FloatingSphere position={[-2, -1.2, -0.5]} color="#F472B6" speed={1.5} />
      <FloatingSphere position={[2.2, 1.5, -2]} color="#34D399" speed={1.0} />
      <FloatingSphere position={[0, 2.2, -1.5]} color="#FFD600" speed={0.6} />

      {STYLES.map((s, i) => {
        const angle = (i / STYLES.length) * Math.PI * 2
        const r = 2.8
        const x = Math.cos(angle) * r
        const z = Math.sin(angle) * r - 0.5
        return (
          <group key={s.id} position={[x, -1.2, z]}>
            <mesh>
              <cylinderGeometry args={[0.25, 0.25, 0.06, 32]} />
              <meshStandardMaterial
                color={s.color}
                emissive={s.color}
                emissiveIntensity={selectedStyle === s.id ? 1.2 : 0.3}
                roughness={0.2}
                metalness={0.8}
              />
            </mesh>
            <Text position={[0, 0.18, 0]} fontSize={0.09} color={s.color} anchorX="center" font="https://fonts.gstatic.com/s/nunito/v25/XRXI3I6Li01BKofiOc5wtlZ2di8HDDuhTQ.woff2">
              {s.label}
            </Text>
          </group>
        )
      })}

      <mesh position={[0, -2.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[4, 64]} />
        <meshStandardMaterial color="#1a0a2e" roughness={0.1} metalness={0.95} transparent opacity={0.6} />
      </mesh>
    </>
  )
}