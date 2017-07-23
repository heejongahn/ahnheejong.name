<<template>
  <div id="three" />
</template>

<script>
export default {
  mounted: function () {
    const containerBoundingRect = this.$el.getBoundingClientRect()
    const mousePosition = new Vector2()

    this.$el.addEventListener('mousemove', e => {
      mousePosition.set(
        e.clientX,
        e.clientY
      )
    })

    render(containerBoundingRect, mousePosition)
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

function render (containerBoundingRect, mousePosition) {
  const WIDTH = 200
  const HEIGHT = WIDTH
  const RADIUS = WIDTH / 6

  const POSITION = {
    top: containerBoundingRect.top,
    bottom: containerBoundingRect.top + HEIGHT,
    left: containerBoundingRect.left,
    right: containerBoundingRect.left + WIDTH
  }

  const VELOCITY = {
    x: 0,
    y: 0,
    z: 0
  }

  const raycaster = new Raycaster()

  const VIEW_ANGLE = 20
  const ASPECT = WIDTH / HEIGHT
  const NEAR = 0.1
  const FAR = 10000

  const container =
      document.querySelector('#three')

  const renderer = new WebGLRenderer({
    alpha: true,
    antialias: true
  })

  const camera = new PerspectiveCamera(
    VIEW_ANGLE,
    ASPECT,
    NEAR,
    FAR
  )

  const scene = new Scene()

  scene.add(camera)
  renderer.setSize(WIDTH, HEIGHT)

  container.appendChild(renderer.domElement)

  const pointLight = new PointLight(0xFFFFFF, 0.5)

  pointLight.position.x = 100
  pointLight.position.y = 100
  pointLight.position.z = 30

  scene.add(pointLight)

  const material = new MeshLambertMaterial({
    color: 0xff3030
  })

  const octahedron = new Mesh(
    new OctahedronGeometry(RADIUS, 0),
    material
  )

  octahedron.position.z = -RADIUS * 10

  scene.add(octahedron)

  function update () {
    raycaster.setFromCamera(getNormalizedMousePosition(POSITION, mousePosition), camera)
    const intersections = raycaster.intersectObject(octahedron)

    const speed = Math.random() / 20
    VELOCITY.x = speed
    VELOCITY.y = speed
    VELOCITY.z = speed

    if (intersections.length === 0) {
      octahedron.rotation.x += VELOCITY.x
      octahedron.rotation.y += VELOCITY.y
      octahedron.rotation.z += VELOCITY.z
    }
    renderer.render(scene, camera)
    requestAnimationFrame(update)
  }

  requestAnimationFrame(update)
}
</script>

<style scoped lang="scss">
@import '~assets/media-query';

#three {
  display: none;

  @include not-phone {
    display: block;
  }
}

</style>
