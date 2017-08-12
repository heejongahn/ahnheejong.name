<template>
  <nuxt-link :class="$style.paintingLink" :to="`/palette/${this.id}`">
    <div :class="$style.painting">
      <slot />
      <div :class="$style.commentary">
        <strong :class="$style.title">{{this.title}}</strong>
        <div :class="$style.description">{{this.description}}</div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    description: String
  }
}
</script>

<style module lang="scss">
@import '~assets/variables';

.paintingLink {
  width: 100%;
  text-decoration: none;
}

.painting {
  position: relative;

  display: flex;
  flex-direction: column;

  padding: 1em;
  border-radius: 20px;

  transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
}

.commentary {
  position: absolute;
  text-align: right;
  bottom: 2em;
  right: 2em;
}

.title {
  font-size: 1.25em;
  margin-bottom: 0;
}

.description {
  color: $text-color-gray;
}
</style>
