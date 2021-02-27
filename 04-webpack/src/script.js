import './style.css'
import * as THREE from 'three'

console.log(THREE)

const scene = new THREE.Scene()

// red cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add( mesh )

// sizes
const sizes = {
    width: 800,
    height: 600
}

// camera: field of view, aspect ratio
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3 // move it back
scene.add(camera)

// renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas // canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

