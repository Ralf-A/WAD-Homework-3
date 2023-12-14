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
    async createPost({ commit }, body) {
      try {
        const currentDate = new Date().toISOString();

        // Make a request to create a new post
        const response = await fetch('http://localhost:3000/api/createPost', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            body,
            date: currentDate,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const newPost = await response.json();

        // Commit the mutation to update the state with the new post
        commit('addPost', newPost);

        console.log('Post created successfully:', newPost);
      } catch (error) {
        console.error('Error creating post:', error);
      }
    },
    async deleteAllPosts({ commit }) {
      try {
        // Make a request to delete all posts
        const response = await fetch('http://localhost:3000/api/deleteAllPosts', {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Commit the mutation to update the state and remove all posts
        commit('deleteAllPosts');

        console.log('All posts deleted successfully');
      } catch (error) {
        console.error('Error deleting all posts:', error);
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
    addPost(state, newPost) {
      state.posts = [newPost, ...state.posts];
    },
    deletePosts(state) {
      state.posts = [];
    }
  },
});
