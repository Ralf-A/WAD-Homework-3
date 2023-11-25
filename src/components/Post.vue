<template>
  <li class="post-item">
    <div class="post-content">
      <div class="post-text">
        <p>{{ post.content }}</p>
        <div v-if="post.picture" class="post-image-container">
          <img :src="post.picture" :alt="'Image for Post ' + post.ID" class="post-image" />
        </div>
        <p><strong>Date:</strong> {{ post.date }}</p>
        <p><strong>Author:</strong> {{ post.author }}</p>
        <p><strong>Likes:</strong> {{ post.likes }}</p>
        <button @click="incrementLikes" class="like-button">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Facebook_Like_button.svg/1024px-Facebook_Like_button.svg.png"
            alt="Like Button" />
        </button>
      </div>
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
  methods: {
    incrementLikes() {
      // Updates the likes directly in the post object
      this.post.likes += 1;
    },
  },
};
</script>

<style scoped>
.post-item {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.37);
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
}

.post-content {
  text-align: center;
  display: flex;
  align-items: flex-start;
}

.post-text {
  flex: 2;
  padding: 16px;
}

.post-text p {
  margin: 0;
  margin-bottom: 8px;
}

.post-image-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.post-image {
  max-width: 500px;
  max-height: 100%;
  padding: 10px;
}

.like-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.like-button img {
  width: 30px;
  height: 30px;
}
</style>
