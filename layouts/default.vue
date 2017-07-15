<template>
  <div id="root">
    <header>
      <nuxt-link to="/" class="name">ahn
        heejong
      </nuxt-link>
      <nav class="nav">
        <nuxt-link to="/" class="navLink">
          <span class="navEmoji">🏡</span>home
        </nuxt-link>
        <nuxt-link to="/articles/" class="navLink">
          <span class="navEmoji">📝</span>articles
        </nuxt-link>
        <span class="navLink disabled">
          <span class="navEmoji">🚧</span>palette
        </span>
      </nav>
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

/* layout */
#root {
  box-sizing: border-box;
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

/* header */
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  padding: 2em 1em 1em;

  @include not-phone {
    padding: 5%;

    flex: 0 0 200px;
    align-content: flex-end;

    padding-bottom: 1rem;
  }
}

#three {
  display: none;

  @include not-phone {
    display: block;
  }
}

.nav {
  display: flex;
  width: 100%;
  justify-content: space-between;

  margin-top: 2em;

  @include not-phone {
    display: block;
  }
}

.reset-anchor-style {
  text-decoration: none;

  &:active,
  &:focus {
    color: $oc-gray-8;
  }
}

.name {
  @extend .reset-anchor-style;

  font-weight: bold;
  font-size: 3rem;
  line-height: 1;

  &:hover {
    color: $oc-gray-8;
  }

  @include not-phone {
    white-space: pre-line;
    margin: 0;
  }
}

.navLink {
  @extend .reset-anchor-style;

  display: block;

  &.disabled {
    pointer-events: none;
    cursor: not-allowed;
    color: $oc-gray-6;
  }
}

.navEmoji {
  margin-right: 12px;
}

.content {
  padding: 1em;

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
