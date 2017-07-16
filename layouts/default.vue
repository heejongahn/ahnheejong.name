<template>
  <div id="root">
    <my-header />
    <div class="content">
      <nuxt class="page" />
      <footer class="footer">
        <div class="email">
          <a href="mailto:heejongahn@gmail.com">heejongahn@gmail.com</a>
        </div>
        <div class="twitter">
          <a href="https://twitter.com/heejongahn">twitter</a>
        </div>
        <small>
          this site is powered by
          <a href="https://nuxtjs.org/">Nuxt.js</a>,
          <a href="https://pages.github.com/">Github Pages</a> and 🍺
        </small>
      </footer>
    </div>
  </div>
</template>
<script>
import Header from '~components/Header'

export default {
  mounted: function () {
    render(this.$el.querySelector('header'))
  },
  components: {
    'my-header': Header
  }
}
import {
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  PointLight,
  MeshLambertMaterial,
  Mesh,
  OctahedronGeometry
} from 'three'

function render (el) {
  const WIDTH = 200
  const HEIGHT = WIDTH
  const RADIUS = WIDTH / 6

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
@import '~open-color/open-color.scss';
@import '~assets/media-query';

$header-height: 60px;

%reset-anchor-style {
  text-decoration: none;

  &:active,
  &:focus {
    color: $oc-gray-8;
  }
}

/* layout */
#root {
  padding: 0;

  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @include not-phone {
    flex-direction: row;
    align-items: flex-start;

    height: 100vh;
    overflow-y: hidden;
  }
}

header,
footer {
  flex-shrink: 0;
}

.main {
  flex-grow: 1;
}

.content {
  padding: 1em;
  padding-top: $header-height;

  @include not-phone {
    padding: 5%;

    flex: 1 1 70%;

    overflow-y: auto;
    height: 90%;
  }
}

.page {
  margin-bottom: 3rem;

  > :first-child {
    margin-top: 0;
  }

  > :last-child {
    margin-bottom: 0;
  }
}
</style>
