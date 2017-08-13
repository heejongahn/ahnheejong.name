<template>
  <article class="container">
    <h1 :class="$style.title">Facebook Shimmer</h1>
    <div :class="$style.shimmerWrap">
      <fb-shimmer />
    </div>
    <p :class="$style.description">
      Facebook's famous shimmering effect for placeholders.
      The trick here is, you don't actually apply animations on several gray bars.
      Rather, you apply linear-gradient animation on the rectangular background and ‘mask’ the rest part using white rectangle (inspecting with DevTool might help you understand what's going on).
      So implementing this effect requires labor, not fancy library or anything.
      <div>Kudos to the smart person who first thought of this idea 👏</div>
    </p>
    <a target="_blank" href="https://github.com/heejongahn/ahnheejong.name/blob/master/pages/palette/fb-shimmer/_FBShimmer.vue">
      <small>view source code for this component</small>
    </a>
  </article>
</template>

<script>
import FBShimmer from './_FBShimmer'

export default {
  components: {
    'fb-shimmer': FBShimmer
  }
}
</script>

<style lang="scss" module>
.shimmerWrap {
  max-width: 424px;
  width: 100%;
}

.description {
  max-width: 600px;
  line-height: 1.8;
}
</style>
