<template>
    <div class="form">

        <h1>Add Post</h1>
        <label for="body">body</label> <input name="body" required><br>
        <button @click='this.$router.push("/")' class="center">Add</button>

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
created() {},
};
</script>