const path = require('path')
const fs = require('mz/fs')

const BASE_PATH = path.join(__dirname, '../assets/_articles/')

async function fetchArticles() {
  const articles = await fs.readdir(BASE_PATH)

  articles.forEach(article => parseArticle(path.join(BASE_PATH, article)))
}

async function parseArticle(articlePath) {
  const contents = await fs.readdir(articlePath)

  const metaFileName = contents.find(fileName => fileName === 'meta.json')
  const articleFileName = contents.find(fileName => fileName === 'article.md')

  const meta = await fs.readFile(path.join(articlePath, metaFileName), { encoding: 'utf-8' })
  const article = await fs.readFile(path.join(articlePath, articleFileName), { encoding: 'utf-8' })

  console.log(JSON.parse(meta))
  console.log(article)
}

fetchArticles()
