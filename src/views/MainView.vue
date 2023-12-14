<template>
  <div>
    <div id="posts-container">
      <ul class="post-list" v-if="posts.length">
        <!-- Use router-link to make each post clickable -->
        <router-link
          v-for="post in posts"
          :key="post.id"
          :to="{ name: 'PostDetail', params: { postId: post.id } }"
        >
          <Post :post="post" />
        </router-link>
      </ul>

      <div v-if="loading">
        <!-- Loading indicator or message -->
        Loading...
      </div>
      <router-link :to="{ name: 'AddPost' }">
        <button>Add Post</button>
      </router-link>
      <button @click="handleDeleteAllPosts">Delete All Posts</button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Post from "@/components/Post.vue";
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['posts']),
    loading() {
      // Add a computed property for loading state
      return this.posts.length === 0;
    },
  },
  components: {
    Header,
    Footer,
    Post,
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    ...mapActions(['fetchPosts', 'deleteAllPosts']),
    handleDeleteAllPosts() {
      // Call the deleteAllPosts action when the button is clicked
      this.deleteAllPosts();
    },
  },
};
</script>

<style>
  /* Add your styles if needed */
</style>
