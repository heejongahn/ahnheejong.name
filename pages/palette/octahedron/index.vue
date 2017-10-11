<template>
  <article class="container" ref="container">
    <painting title="Octahedron" githubHref="fb-shimmer/_FBShimmer.vue">
      <div slot="component">
        <octahedron />
      </div>
      <div slot="description" :class="$style.description">
        Result of my first three.js experiment. You can read the detailed article (in Korean) on this here. Just look at the way it rotates, isn't it adorable? You can also try to hold and rotate it by yourself ;)
      </div>
    </painting>
  </article>
</template>

<script>
import Painting from '~/components/Painting'
import Octahedron from '~/components/Octahedron'

const title = '🎨 Octahedron'
const url = 'http://ahnheejong.name/palette/octahedron/'

const meta = {
  'og:title': title,
  'og:url': url,
  'twitter:title': title,
  'twitter:url': url
}

export default {
  components: {
    'painting': Painting,
    'octahedron': Octahedron
  },
  head: {
    title,
    meta: Object.keys(meta).map(name => ({
      hid: name,
      name,
      content: meta[name]
    }))
  },
  mounted () {
    this.$refs.container.parentElement.scrollTop = 0
  }
}
</script>

<style lang="scss" module>
</style>
