<template>
    <div>
        <div id="posts-container">
            <ul class="post-list" v-if="posts.length">
                <Post v-for="post in posts" :key="post.id" :post="post" />
            </ul>
            <button @click="resetAllLikes" class="reset-likes-button">Reset Likes</button>
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
    },
    methods: {
        ...mapActions(['fetchPosts']),
        resetAllLikes() {
            // Reset likes for all posts
            this.posts.forEach(post => {
                post.likes = 0;
            });
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
};

</script>
  
<style>
.reset-likes-button {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.37);
    background-color: rgb(32, 248, 237);
    color: rgb(0, 0, 0);
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    display: block;
    text-align: center;
    margin: auto;
}
button:hover {
  background-color: rgb(22, 228, 217);
}
</style>
  