import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: []
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        // Make a fetch request to your server API
        const response = await fetch('http://localhost:3000/api/receivePosts');
        
        // Check if the response status is okay (e.g., 200)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();

        // Assuming data is an array of posts
        const posts = data;

        // Commit the mutation to update the state with the fetched posts
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
