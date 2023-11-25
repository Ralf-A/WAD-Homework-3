// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: []
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const response = await fetch('https://gist.githubusercontent.com/Ralf-A/bd247c4126a4af73edb3fd21c4e8e22f/raw/e6273bba855f831466e028cfb93f13056ce1a7aa/data.json');
        const data = await response.json();

        // Assuming data.posts is the array of posts
        const posts = data.posts;

        commit('setPosts', posts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  },

  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    }
  }
});
