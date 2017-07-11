<template>
  <section class="container">
    <h1>글</h1>
    <div :key="article.slug" v-for="article in articles">
      <nuxt-link :to="`/articles/${article.slug}`">
        <h2>{{article.title}}</h2>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

const S3_BASE_PATH = 'https://s3.ap-northeast-2.amazonaws.com/ahnheejong.name-articles'

export default {
  async asyncData () {
    const r = await axios(`${S3_BASE_PATH}/index.json`, { responseType: 'json' })
    return { articles: r.data }
  }
}
</script>

<style scoped lang="scss">
</style>
