<template>
  <section class="container" :class="$style.palette">
    <h1>Draw by Code</h1>
    <section :class="[$style.section, $style.ui]">
      <h2>UI</h2>
      <div :class="$style.paintings">
        <painting
          v-for="painting in ui"
          :key="painting.title"
          :title="painting.title"
          :description="painting.description"
        >
        </painting>
      </div>
    </section>
    <section :class="[$style.section, $style.graphics]">
      <h2>Graphics</h2>
      <div :class="$style.paintings">
        <painting
          v-for="painting in graphics"
          :id="painting.id"
          :key="painting.title"
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
import Octahedron from '~/components/Octahedron'
import Painting from '~/components/Painting'

export default {
  components: {
    painting: Painting
  },
  data () {
    return {
      ui: [],
      graphics: [
        { title: 'Octahedron', description: 'Three.js를 이용해 처음 그려본 다면체', component: Octahedron, id: 'octahedron' }
      ]
    }
  }
}
</script>


<style module lang="scss">
.section {
  display: flex;
  flex-direction: column;
}

.paintings {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

</style>
