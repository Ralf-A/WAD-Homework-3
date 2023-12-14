<template>
    <div>
      <h1>Post Detail</h1>
      <div v-if="post">
        <p>{{ post.content }}</p>
        <p>Posted on: {{ post.date }}</p>
        <button @click="updatePost">Update</button>
        <button @click="deletePost">Delete</button>
      </div>
    </div>
  </template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
computed: {},
components: {
    Header,
    Footer,
},
  data() {
    return {
      post: null,
    };
  },
  created() {
    // Fetch the specific post when the component is created
    this.fetchPost();
  },
  methods: {
    async fetchPost() {
      try {
        const postId = this.$route.params.id;
        const response = await fetch(`http://localhost:3000/api/post/${postId}`);
        const data = await response.json();
        this.post = data;
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    },
    async updatePost() {
      // Implement logic to update the post in the database
      // You may need to create an API endpoint for updating a post
    },
    async deletePost() {
      // Implement logic to delete the post from the database
      // You may need to create an API endpoint for deleting a post
    },
  },
};
</script>