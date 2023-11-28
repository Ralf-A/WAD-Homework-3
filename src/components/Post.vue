<template>
  <li class="post-item">
    <div class="post-content">
      <div class="post-profile">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/512px-Windows_10_Default_Profile_Picture.svg.png" class="profile-picture"/>
        <p class="profile-name">{{ post.author }}</p>
      </div>
      <div class="post-text">
        <p>{{ post.content }}</p>
        <div v-if="post.picture" class="post-image-container">
          <img :src="post.picture" :alt="'Image for Post ' + post.ID" class="post-image" />
        </div>
        <p class="post-info">
          <strong>Date:</strong> {{ post.date }}
        </p>
        <div class="post-footer">
          <button @click="incrementLikes" class="like-button">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Facebook_Like_button.svg/1024px-Facebook_Like_button.svg.png"
              alt="Like Button"
            />
          </button>
          <p class="likes-count">{{ post.likes }} Likes</p>
        </div>
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
  box-shadow: 0 0 10px rgba(0,0,0,0.37);
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
  position: relative; 
  z-index: 1;
}
.post-profile {
  display: flex;
  align-items: center;
  padding: 16px;
  position: relative;
  z-index: 1;
}

.profile-picture {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 8px;
}

.post-info {
  position: absolute;
  top: 16px;
  right: 16px;
  margin: 0;
}

.profile-name {
  margin: 0;
}

.post-text {
  flex: 3;
  padding: 16px;
}

.post-content {
  text-align: center;
  display: flex;
  align-items: flex-start;
}

.post-image-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.post-image {
  max-width: 100%;
  max-height: 300px;
  padding: 10px;
  border-radius: 8px;
}

.post-footer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
}

.like-button {
  margin-top: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  bottom: 8px;
  left: 8px;
}

.like-button img {
  width: 30px;
  height: 30px;
}

.likes-count {
  margin-top: 8px;
  position: absolute;
  bottom: 8px;
  right: 8px;
}
</style>
