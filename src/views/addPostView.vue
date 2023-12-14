<template>
    <div class="form">
      <h1>Add Post</h1>
      <label for="body">Body</label>
      <input v-model="postBody" name="body" required><br>
      <button @click="addPost" class="center">Add</button>
    </div>
  </template>
  
  <script>
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  
  export default {
    data() {
      return {
        postBody: "", 
      };
    },
    computed: {},
    components: {
      Header,
      Footer,
    },
    methods: {
      async addPost() {
        await this.$store.dispatch('createPost', this.postBody);
        this.$router.push("/");
      },
    },
  };
  </script>
  