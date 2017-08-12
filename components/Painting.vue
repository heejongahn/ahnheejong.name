<template>
  <div :class="$style.painting">
    <slot />
    <div :class="$style.commentary">
      <strong :class="$style.title">{{this.title}}</strong>
      <div :class="$style.description">{{this.description}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String
  }
}
</script>

<style module lang="scss">
.painting {
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 250px;
  padding: 16px;
  border-radius: 20px;

  transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
}

.title {
  margin-bottom: 0;
}

.description {
  font-size: 0.75em;
}
</style>
