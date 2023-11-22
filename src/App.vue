<template>
    <div id="app">
      <Header />
      <router-view />
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  import Post from "@/components/Post.vue";
  
  export default {
    name: 'App',
    components: {
      Header,
      Footer,
      Post,
    },
  };
  </script>
  
  <style>
  /* Add your global styling here */
  body {
    margin: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  </style>
