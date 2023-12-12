<template>
    <div>
        <div id="posts-container">
            <ul class="post-list" v-if="posts.length">
                <Post v-for="post in posts" :key="post.id" :post="post" />
            </ul>
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

</style>
  