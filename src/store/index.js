// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    fetchPosts({ commit }) {
      // Fetch posts from API and commit mutation
      fetch('https://gist.githubusercontent.com/Ralf-A/bd247c4126a4af73edb3fd21c4e8e22f/raw/data.json')
        .then(response => response.json())
        .then(data => {
          commit('setPosts', data.posts);
        })
        .catch(error => console.error('Error fetching posts:', error));
    },
  },
  getters: {
    // Any additional getters for post-related logic
  },
});
