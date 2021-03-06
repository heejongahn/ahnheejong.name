<template>
  <div class="octahedron" />
</template>

<script>
export default {
  mounted: function () {
    const octahedron = new Octahedron(this.$el)
    octahedron.render()
  }
}

import {
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  PointLight,
  MeshLambertMaterial,
  Mesh,
  OctahedronGeometry,
  Vector2,
  Raycaster
} from 'three'

function getNormalizedMousePosition (windowPosition, mousePosition) {
  const width = windowPosition.right - windowPosition.left
  const height = windowPosition.bottom - windowPosition.top

  const centerX = windowPosition.left + (width / 2)
  const centerY = windowPosition.top + (height / 2)

  const normalizedX = (mousePosition.x - centerX) / (width / 2)
  const normalizedY = (mousePosition.y - centerY) / (height / 2)

  return {
    x: Math.min(1, Math.max(-1, normalizedX)),
    y: Math.min(1, Math.max(-1, normalizedY))
  }
}

class Octahedron {
  constructor (container) {
    this.container = container
    // document.querySelector(selector || '#three')
    this.width = 200
    this.height = this.width
    this.radius = this.width / 6

    const containerBoundingRect = this.container.getBoundingClientRect()

    this.scene = new Scene()

    this.camera = new PerspectiveCamera(
      20,
      this.width / this.height,
      0.1,
      10000
    )
    this.scene.add(this.camera)

    const pointLight = new PointLight(0xFFFFFF, 0.5)
    pointLight.position.set(100, 100, 30)
    this.scene.add(pointLight)

    this.octahedron = this.initializeMesh()
    this.scene.add(this.octahedron)

    this.renderer = new WebGLRenderer({
      alpha: true,
      antialias: true
    })
    this.renderer.setSize(this.width, this.height)
    this.container.appendChild(this.renderer.domElement)

    this.raycaster = new Raycaster()

    this.position = {
      top: containerBoundingRect.top,
      bottom: containerBoundingRect.top + this.height,
      left: containerBoundingRect.left,
      right: containerBoundingRect.left + this.width
    }

    this.velocity = {
      x: Math.random() / 20,
      y: Math.random() / 20,
      z: 0
    }

    this.mousePosition = new Vector2(-1, -1)
    this.mouseClicked = false
    this.intersections = null

    this.container.addEventListener('mousemove', this.updateMousePosition.bind(this))

    this.container.addEventListener('mousedown', this.decideMouseClicked.bind(this))

    window.addEventListener('mouseup', e => {
      this.mouseClicked = false
    })
  }

  initializeMesh () {
    const material = new MeshLambertMaterial({
      color: 0xff3030
    })

    const octahedron = new Mesh(
      new OctahedronGeometry(this.radius, 0),
      material
    )

    octahedron.position.z = -this.radius * 10

    return octahedron
  }

  updateMousePosition (e) {
    const normalizedPosition = getNormalizedMousePosition(this.position, { x: e.clientX, y: e.clientY })

    const delta = {
      y: normalizedPosition.x - this.mousePosition.x,
      x: normalizedPosition.y - this.mousePosition.y
    }

    if (this.mouseClicked) {
      this.octahedron.rotation.x += delta.x
      this.octahedron.rotation.y += delta.y
    }

    this.mousePosition.set(
      normalizedPosition.x,
      normalizedPosition.y
    )
  }

  decideMouseClicked () {
    this.raycaster.setFromCamera(this.mousePosition, this.camera)
    this.intersections = this.raycaster.intersectObject(this.octahedron)

    if (this.intersections.length > 0) {
      this.mouseClicked = true
    }
  }

  render () {
    const THRESHOLD = 0.1
    const update = () => {
      if (this.velocity.x > THRESHOLD) {
        this.velocity.x -= 0.05
      }

      if (this.velocity.y > THRESHOLD) {
        this.velocity.y -= 0.05
      }

      if (!this.mouseClicked) {
        this.octahedron.rotation.x += this.velocity.x
        this.octahedron.rotation.y += this.velocity.y
        this.octahedron.rotation.z += this.velocity.z
      }

      this.renderer.render(this.scene, this.camera)
      requestAnimationFrame(update)
    }

    requestAnimationFrame(update)
  }
}
</script>
