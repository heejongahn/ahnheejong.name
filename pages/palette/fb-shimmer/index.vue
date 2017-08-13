<template>
  <article class="container">
    <painting title="Facebook Shimmer" githubHref="fb-shimmer/_FBShimmer.vue">
      <div slot="component" :class="$style.shimmerWrap">
        <fb-shimmer />
      </div>
      <div slot="description" :class="$style.description">
        Facebook's famous shimmering effect for placeholders.
        The trick here is, you don't actually apply animations on several gray bars.
        Rather, you apply linear-gradient animation on the rectangular background and ‘mask’ the rest part using white rectangle (inspecting with DevTool might help you understand what's going on).
        So implementing this effect requires labor, not fancy library or anything.
        <p :class="$style.kudos">Kudos to the smart person who first thought of this idea 👏</p>
      </div>
    </painting>
  </article>
</template>

<script>
import Painting from '~/components/Painting'
import FBShimmer from './_FBShimmer'

export default {
  components: {
    'painting': Painting,
    'fb-shimmer': FBShimmer
  }
}
</script>

<style lang="scss" module>
.shimmerWrap {
  max-width: 424px;
  width: 100%;
}
</style>
