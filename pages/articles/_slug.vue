<template>
  <section class="container">
    <div v-if="meta != null && body != null">
      <div :class="$style.meta">
        <h1 :class="$style.title">{{meta.title}}</h1>
        <div :class="$style.date">{{meta.date}}</div>
        <div :class="$style.tags">
          <div :key="tag" :class="$style.tag" v-for="tag in meta.tags">{{tag}}</div>
        </div>
      </div>
      <div :class="$style.markdown" v-html="compiledArticle"></div>
    </div>
    <div v-else>로딩 중..</div>
  </section>
</template>

<script>
import axios from 'axios'
import marked from 'marked'

const S3_BASE_PATH = 'https://s3.ap-northeast-2.amazonaws.com/ahnheejong.name-articles'

export default {
  async asyncData (context) {
    const { params, payload } = context
    const r = await axios(`${S3_BASE_PATH}/${params.slug}/article.md`)

    return { slug: params.slug, body: r.data, meta: payload || null }
  },
  mounted () {
    const { articles } = this.$store.state

    if (articles[this.slug] != null) {
      this.meta = articles[this.slug]
    } else {
      axios(`${S3_BASE_PATH}/index.json`, { responseType: 'json' })
      .then(res => {
        const articles = res.data
        const meta = articles.find(article => article.slug === this.slug)
        this.meta = meta
      })
    }
  },
  computed: {
    compiledArticle: function () {
      return this.body ? marked(this.body) : ''
    }
  }
}
</script>

<style module lang="scss">
.title {
  margin: 0;
  font-size: 4em;
  word-break: keep-all;
}

.date {
  margin-top: 1em;
}

.tags {
  display: flex;
  margin-top: 1em;
}

.tag {
  font-size: 0.75em;

  padding: 4px;
  border-radius: 6px;
  background-color: rgba(#000000, 0.1);
  margin-right: 8px;
}

.markdown{
  margin-top: 3em;

  p,
  li {
    word-break: keep-all;
    line-height: 1.8;
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }

  a:active,
  a:hover {
    outline-width: 0;
  }

  strong {
    font-weight: inherit;
  }

  strong {
    font-weight: bolder;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  img {
    border-style: none;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  code,
  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  input {
    font: inherit;
    margin: 0;
  }

  input {
    overflow: visible;
  }

  [type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
  }

  input {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  strong {
    font-weight: 600;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  td,
  th {
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0;
  }

  h1 {
    font-size: 32px;
    font-weight: 600;
  }

  h2 {
    font-size: 24px;
    font-weight: 600;
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
  }

  h4 {
    font-size: 16px;
    font-weight: 600;
  }

  h5 {
    font-size: 14px;
    font-weight: 600;
  }

  h6 {
    font-size: 12px;
    font-weight: 600;
  }

  p {
    margin-top: 0;
    margin-bottom: 10px;
  }

  blockquote {
    margin: 0;
  }

  ul,
  ol {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  ol ol,
  ul ol {
    list-style-type: lower-roman;
  }

  ul ul ol,
  ul ol ol,
  ol ul ol,
  ol ol ol {
    list-style-type: lower-alpha;
  }

  dd {
    margin-left: 0;
  }

  code {
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
    font-size: 12px;
  }

  pre {
    margin-top: 0;
    margin-bottom: 0;
    font: 12px "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
  }

  .markdown>*:first-child {
    margin-top: 0 !important;
  }

  .markdown>*:last-child {
    margin-bottom: 0 !important;
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  table,
  pre {
    margin-top: 0;
    margin-bottom: 16px;
  }

  blockquote {
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
  }

  blockquote>:first-child {
    margin-top: 0;
  }

  blockquote>:last-child {
    margin-bottom: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }

  h1 {
    padding-bottom: 0.3em;
    font-size: 2em;
  }

  h2 {
    padding-bottom: 0.3em;
    font-size: 1.5em;
  }

  h3 {
    font-size: 1.25em;
  }

  h4 {
    font-size: 1em;
  }

  h5 {
    font-size: 0.875em;
  }

  h6 {
    font-size: 0.85em;
    color: #6a737d;
  }

  ul,
  ol {
    padding-left: 2em;
  }

  ul ul,
  ul ol,
  ol ol,
  ol ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  li>p {
    margin-top: 16px;
  }

  li+li {
    margin-top: 0.25em;
  }

  dl {
    padding: 0;
  }

  dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: 600;
  }

  dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
  }

  table {
    display: block;
    width: 100%;
    overflow: auto;
  }

  table th {
    font-weight: 600;
  }

  table th,
  table td {
    padding: 6px 13px;
    border: 1px solid #dfe2e5;
  }

  table tr {
    background-color: #fff;
    border-top: 1px solid #c6cbd1;
  }

  table tr:nth-child(2n) {
    background-color: #f6f8fa;
  }

  img {
    max-width: 100%;
    box-sizing: content-box;
    background-color: #fff;
  }

  code {
    padding: 0;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(27,31,35,0.05);
    border-radius: 3px;
  }

  code::before,
  code::after {
    letter-spacing: -0.2em;
    content: "\00a0";
  }

  pre {
    word-wrap: normal;
  }

  pre>code {
    padding: 0;
    margin: 0;
    font-size: 100%;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
  }

  .highlight {
    margin-bottom: 16px;
  }

  .highlight pre {
    margin-bottom: 0;
    word-break: normal;
  }

  .highlight pre,
  pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: 3px;
  }

  pre code {
    display: inline;
    max-width: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
  }

  pre code::before,
  pre code::after {
    content: normal;
  }

  > :first-child {
    margin-top: 0;
  }

  > :last-child {
    margin-bottom: 0;
  }
}
</style>
