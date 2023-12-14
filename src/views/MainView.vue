<template>
  <div>
    <div id="posts-container">
      <router-link :to="{ name: 'AddPost' }">
        <button>Add Post</button>
      </router-link>
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
      <div v-else-if="loading">
        <!-- Loading indicator or message -->
        Loading...
      </div>
      <div v-else>
        <!-- Message when there are no posts -->
        No posts available.
      </div>
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
    ...mapActions(['fetchPosts']),
  },
};
</script>

<style>
  /* Add your styles if needed */
</style>
