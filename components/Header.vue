<template>
  <header>
    <nuxt-link to="/" :class="$style.name">ahn
      heejong
    </nuxt-link>
    <div
      :class="navCollapsed ? $style.navToggle : [$style.navToggle, $style.opened]">
      <nuxt-link to="/about" :class="$style.navLink" :exact-active-class="$style.active">
        about
      </nuxt-link>
    </div>
    <octahedron :class="$style.octahedron" />
  </header>
</template>

<script>
import Octahedron from '~/components/Octahedron'

export default {
  data () {
    return {}
  },
  components: {
    octahedron: Octahedron
  }
}
</script>

<style module lang="scss">
@import '~assets/variables';
@import '~assets/media-query';
@import '~assets/placeholders';

$header-height: 60px;


header {
  z-index: 1000;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: rgba(white, 0.8);

  height: $header-height;
  padding: 0 1em;

  @include wide-screen {
    position: initial;

    height: auto;
    flex-direction: column;
    align-items: flex-start;

    padding: 5% 24px 5% 48px;

    flex-shrink: 0;
    flex-grow: 0;
    width: 272px;

    padding-bottom: 1rem;
  }
}

.name {
  @extend %reset-anchor-style;

  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1;

  &:hover {
    color: $text-color;
  }

  @include wide-screen {
    font-size: 3rem;
    white-space: pre-line;
    margin: 0;
  }
}

.nav {
  position: absolute;
  top: $header-height;
  right: 1em;

  margin-top: 10px;

  flex-direction: column;
  justify-content: space-between;

  @include wide-screen {
    position: initial;

    display: block;

    margin-top: 2em;
  }
}

.navLink {
  @extend %reset-anchor-style;
  display: flex;

  justify-content: center;
  align-items: center;

  @include wide-screen {
    margin: 1em 0;
    justify-content: flex-start;
    font-size: 1.25em;
  }
}

.nav.visible {
  display: flex;

  .navLink {
    opacity: initial;
    pointer-events: initial;
  }

  .disabled {
    pointer-events: none;
    cursor: not-allowed;
  }
}

.navLink {
  &.active {
    font-weight: 500;

    &:hover,
    &:active {
      color: black;
    }
  }

  @include wide-screen {
    &.disabled {
      opacity: 0.5;
    }
  }
}

.navLabel {
  margin-left: 12px;

  @include wide-screen {
    display: block;
  }
}

.octahedron {
  display: none;

  @include wide-screen {
    display: block;
  }
}
</style>
