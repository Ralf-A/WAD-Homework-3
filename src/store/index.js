import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: [],
    currentPost: null,
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const response = await fetch('http://localhost:3000/api/receivePosts');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        commit('setPosts', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async fetchPost({ commit }, postId) {
      try {
        const response = await fetch(`http://localhost:3000/api/receivePost/${postId}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        commit('setCurrentPost', data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    },
    async deletePost({ commit }, postId) {
      try {
        await fetch(`http://localhost:3000/api/deletePost/${postId}`, {
          method: 'DELETE',
        });

        commit('deletePost', postId);
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    },
    async updatePost({ commit, state }, { postId, updatedBody }) {
      try {
        const currentDate = new Date().toISOString();

        const response = await fetch(`http://localhost:3000/api/updatePost/${postId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            body: updatedBody,
            date: currentDate,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const updatedPost = await response.json();
        commit('updatePost', updatedPost);

        console.log('Post updated successfully:', updatedPost);
      } catch (error) {
        console.error('Error updating post:', error);
      }
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setCurrentPost(state, post) {
      state.currentPost = post;
    },
    deletePost(state, postId) {
      state.posts = state.posts.filter(post => post.id !== postId);
    },
    updatePost(state, updatedPost) {
      state.currentPost = updatedPost;
    },
  },
});
