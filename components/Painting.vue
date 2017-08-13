<template>
  <article class="container">
    <h1 :class="$style.title">{{title}}</h1>
    <slot name="component" />
    <div :class="$style.description">
      <slot name="description" />
    </div>
    <a target="_blank" :href="`https://github.com/heejongahn/ahnheejong.name/blob/master/pages/palette/${githubHref}`">
      <small>view source code for this component</small>
    </a>
  </article>
</template>

<script>
export default {
  props: {
    title: String,
    githubHref: String
  }
}
</script>

<style lang="scss" module>
.description {
  margin-top: 1em;
  max-width: 600px;
  line-height: 1.8;
}
</style>
