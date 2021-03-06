<template>
  <section class="container" ref="container">
    <a :class="$style.atomFeed" href="/atom.xml" target="_blank">atom feed</a>
    <nuxt-link :key="article.slug" v-for="article in articles" :class="$style.article" :to="`/articles/${article.slug}`">
      <h2 :class="$style.title">{{article.title}}</h2>
      <div :class="$style.date">{{article.date}}</div>
      <div :class="$style.tags">
        <div :key="tag" v-for="tag in article.tags" :class="$style.tag">{{tag}}</div>
      </div>
    </nuxt-link>
  </section>
</template>

<script>
import axios from 'axios'

import { getHead } from '~/utils'

const S3_BASE_PATH = 'https://s3.ap-northeast-2.amazonaws.com/ahnheejong.name-articles'

const title = '📝 [from] ahj'
const url = 'http://ahnheejong.name/articles/'

export default {
  async asyncData () {
    const r = await axios(`${S3_BASE_PATH}/index.json`, { responseType: 'json' })
    return { articles: r.data }
  },
  head: getHead(title, url),
  mounted () {
    this.$refs.container.parentElement.scrollTop = 0
    const { articles } = this
    const storeArticles = {}

    articles.forEach(article => {
      storeArticles[article.slug] = article
    })

    this.$store.commit('setArticles', storeArticles)
  }
}
</script>

<style module lang="scss">
@import '~assets/media-query';
@import '~assets/placeholders';

.atomFeed {
  font-weight: bold;
  color: $text-color;
  text-decoration: none;

  padding-left: 8px;
  @include wide-screen {
    padding-left: 12px;
  }
}

.article {
  @extend %reset-anchor-style;
  display: block;
  transition: background-color 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955);

  margin: 12px 0;
  padding: 12px 8px;
  border-radius: 8px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }

  @include wide-screen {
    padding: 12px;
  }
}

.title {
  margin-top: 0;
}

.date {
  font-size: 14px;
}

.tags {
  display: flex;
  margin-top: 12px;
  flex-wrap: wrap;
}

.tag {
  font-size: 0.75em;
  letter-spacing: 1px;
  padding: 4px;
  border-radius: 6px;
  background-color: rgba(#000000, 0.1);
  margin-right: 8px;
  margin-bottom: 8px;
}

</style>
