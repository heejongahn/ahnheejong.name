<template>
  <section class="container" :class="$style.palette">
    <h1>Palette</h1>
    <p>Small paintings I drew with code.</p>
    <section :class="[$style.section, $style.ui]">
      <h2>UI</h2>
      <div :class="$style.paintings">
        <painting
          v-for="painting in ui"
          :key="painting.title"
          :id="painting.id"
          :title="painting.title"
          :description="painting.description"
        >
          <component :is="painting.component" />
        </painting>
      </div>
    </section>
    <section :class="[$style.section, $style.graphics]">
      <h2>Graphics</h2>
      <div :class="$style.paintings">
        <painting
          v-for="painting in graphics"
          :key="painting.title"
          :id="painting.id"
          :title="painting.title"
          :description="painting.description"
        >
          <component :is="painting.component" />
        </painting>
      </div>
    </section>
  </section>
</template>

<script>
import Painting from '~/components/Painting'

/* UI */
import FBShimmer from './fb-shimmer/_FBShimmer'

/* Graphics */
import Octahedron from '~/components/Octahedron'

export default {
  components: {
    painting: Painting
  },
  data () {
    return {
      ui: [
        { id: 'fb-shimmer', title: 'FB Shimmer', description: 'Facebook\'s shimmering placeholder', component: FBShimmer }
      ],
      graphics: [
        { id: 'octahedron', title: 'Octahedron', description: 'My first three.js experiment', component: Octahedron }
      ]
    }
  }
}
</script>


<style module lang="scss">
.section {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
}

.paintings {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

</style>

<style scoped>
.octahedron {
  width: 200px;
  height: 200px;
}
</style>
