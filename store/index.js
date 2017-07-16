import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    articles: {}
  },
  mutations: {
    setArticles (state, articles) {
      state.articles = articles
    }
  }
})

export default store
