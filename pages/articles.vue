<template>
  <section class="container">
    <h1>글</h1>
    <div :key="article.id" v-for="article in articles">
      <nuxt-link :to="`/article/${article.id}`">
        <h2>{{article.title}}</h2>
        <div>2017.07.03</div>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      articles: [
        { id: 1, title: '나의 버건디 8면체' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
