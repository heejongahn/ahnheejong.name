<template>
  <section class="container">
    <div v-if="body != null" v-html="compiledArticle"></div>
    <div v-else>로딩 중..</div>
  </section>
</template>

<script>
import axios from 'axios'
import marked from 'marked'

const S3_BASE_PATH = 'https://s3.ap-northeast-2.amazonaws.com/ahnheejong.name-articles'

export default {
  async asyncData (context) {
    const { params } = context
    const r = await axios(`${S3_BASE_PATH}/${params.slug}/article.md`)

    return { body: r.data }
  },
  computed: {
    compiledArticle: function () {
      return this.body ? marked(this.body) : ''
    }
  }
}
</script>

<style scoped lang="scss">
</style>
