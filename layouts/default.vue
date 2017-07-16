<template>
  <div id="root">
    <header>
      <nuxt-link to="/" class="name">ahn
        heejong
      </nuxt-link>
      <div class="navToggle">
        <div class="navToggleBar"></div>
        <div class="navToggleBar"></div>
        <div class="navToggleBar"></div>
      </div>
      <nav class="nav">
        <nuxt-link to="/" class="navLink" exact-active-class="active">
          <span class="navEmoji">🏡</span><span class="navLabel">home</span>
        </nuxt-link>
        <nuxt-link to="/articles/" class="navLink" active-class="active">
          <span class="navEmoji">📝</span><span class="navLabel">articles</span>
        </nuxt-link>
        <span class="navLink disabled">
          <span class="navEmoji">🎨</span><span class="navLabel">palette</span>
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

$header-height: 60px;
$nav-link-size: 40px;

%reset-anchor-style {
  text-decoration: none;

  &:active,
  &:focus {
    color: $oc-gray-8;
  }
}

%nav-link-base {
  width: $nav-link-size;
  height: $nav-link-size;
  border: 1px solid black;
  border-radius: 20px;
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

/* header */
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: white;

  height: $header-height;
  padding: 0 1em;

  @include not-phone {
    position: initial;

    height: auto;
    flex-direction: column;
    align-items: flex-start;

    padding: 5%;
    padding-right: 2%;
    align-items: center;

    flex: 0 0 200px;

    padding-bottom: 1rem;
  }
}

#three {
  display: none;

  @include not-phone {
    display: block;
  }
}

.navToggle {
  @extend %nav-link-base;

  padding: 10px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @include not-phone {
    display: none;
  }
}

.navToggleBar {
  width: 100%;
  height: 2px;
  border-top: 2px solid $oc-gray-8;

  transition: all 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  transform-origin: center;
}

.navToggle.active {
  > .navToggleBar {
    :first-child {
      transform: translateY(6px) rotate(45deg);
    }

    :last-child {
      transform: translateY(-6px) rotate(-45deg);
    }

    :nth-child(2) {
      opacity: 0;
    }
  }
}

.nav {
  position: absolute;
  top: $header-height;
  right: 1em;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @include not-phone {
    position: initial;

    display: block;

    margin-top: 2em;
  }
}

.name {
  @extend %reset-anchor-style;

  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1;

  &:hover {
    color: $oc-gray-8;
  }

  @include not-phone {
    font-size: 3rem;
    white-space: pre-line;
    margin: 0;
  }
}

.navLink {
  @extend %reset-anchor-style;
  @extend %nav-link-base;

  display: flex;
  justify-content: center;
  align-items: center;

  line-height: 1;

  font-size: 1.5em;

  margin-bottom: 10px;

  @include not-phone {
    justify-content: flex-start;

    width: auto;
    height: auto;

    font-size: 1em;

    border: none;
  }
}

.navLink {
  &.active {
    font-weight: bold;
  }

  &.disabled {
    pointer-events: none;
    cursor: not-allowed;

    > .navLabel {
      color: $oc-gray-6;
    }
  }
}

.navLabel {
  display: none;
  margin-left: 12px;

  @include not-phone {
    display: block;
  }
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
