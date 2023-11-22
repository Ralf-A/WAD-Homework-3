<template>
    <li class="post-item" style="margin-bottom: 30px;">
      <p class="date-top-right">Date: {{ post.date }}</p>
      <img v-if="post.picture" :src="post.picture" :alt="'Image for Post ' + post.id" style="width: 100%; height: auto;" />
      <div>
        <p>{{ post.content }}</p>
      </div>
    </li>
  </template>  
  
  <script>
  export default {
    props: {
      post: {
        type: Object,
        required: true,
      },
    },
  };
  </script>