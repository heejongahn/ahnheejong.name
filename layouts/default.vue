<template>
  <div id="root">
    <header>
      <div class="name">
        <span id="name-ko">안희종</span>
        <span id="name-en">ahn heejong</span>
      </div>
      <div id="three" />
    </header>
    <div class="content">
      <nuxt class="page" />
      <footer class="footer">
        <div class="email">
          <a href="mailto:heejongahn@gmail.com">heejongahn@gmail.com</a>
        </div>
        <div class="twitter">
          <a href="https://twitter.com/heejongahn">twitter</a>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  mounted: function () {
    render(this.$el.querySelector('header'))
  }
}
import {
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  PointLight,
  FaceColors,
  MeshBasicMaterial,
  Mesh,
  OctahedronGeometry
} from 'three'

function render (el) {
  const WIDTH = el.offsetWidth
  const HEIGHT = WIDTH

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

  const pointLight = new PointLight(0xFFFFFF)

  pointLight.position.x = 300
  pointLight.position.y = 300
  pointLight.position.z = -500

  scene.add(pointLight)

  const material = new MeshBasicMaterial({
    vertexColors: FaceColors
  })

  const octahedron = new Mesh(
    new OctahedronGeometry(WIDTH / 6, 0),
    material
  )

  const colors = [0xD1DBBD, 0x91AA9D, 0x3E606F, 0x193441]
  const faces = octahedron.geometry.faces
  faces.map((face, i) => {
    face.color.setHex(colors[i % 4])
  })

  octahedron.position.z = -300

  scene.add(octahedron)

  function update () {
    const speed = Math.random() / 20
    octahedron.rotation.x += speed
    octahedron.rotation.y += speed
    octahedron.rotation.z += speed
    renderer.render(scene, camera)

    requestAnimationFrame(update)
  }

  requestAnimationFrame(update)
}
</script>
<style lang="scss">
@import '~assets/media-query';

/* general */
body {
  margin: 0;
  font-family: "Spoqa Han Sans", "spoqahansans", "Apple SD Gothic Neo", "Nanum Barun Gothic", "Nanum Gothic", Verdana, Arial, "Malgun Gothic", Dotum, sans-serif;
}

h2 {
  margin-bottom: 1rem;
}

a {
  color: black;
  transition: color 0.2s ease;

  &:hover {
    color: red;
  }
}

ul {
  margin: 0;
  padding: 0;
  padding-left: 18px;
}

li {
  list-style-type: none;

  &:before {
    content: '\BB';
    margin-left: -18px;
    padding-right: 10px;
  }
}

/* layout */
#root {
  box-sizing: border-box;
  padding: 1.5rem 3rem;

  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @include not-phone {
    flex-direction: row;
    align-items: flex-start;

    padding: 5%;
    height: 100vh;
  }
}

header,
footer {
  flex-shrink: 0;
}

.main {
  flex-grow: 1;
}

/* header */
header {
  display: flex;
  align-items: center;

  margin: 0 0 2rem;

  @include not-phone {
    flex: 1 0 0;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.5rem;
  }
}

#three {
  display: none;

  @include not-phone {
    display: block;
  }
}

.name {
  display: flex;
  flex-wrap: wrap;

  font-weight: bold;
  font-size: 3rem;

  @include not-phone {
    flex-direction: column;
    margin: 0;
    font-size: 1.5rem;
  }
}

#name-ko {
  margin-right: 1rem;
}

.content {
  @include not-phone {
    padding-left: 2rem;
    border-left: 1px solid #ced3d6;

    flex: 1 1 70%;
    max-height: 100%;

    overflow-y: auto;
  }
}

.page {
  margin-bottom: 3rem;
}
</style>
