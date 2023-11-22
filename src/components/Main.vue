

<script>
import Post from '@/components/Post.vue';

export default {
  components: {
    Post,
  },
  data() {
    return {
      posts: [],
      isDropdownVisible: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },

    fetchPosts() {
      fetch('https://gist.githubusercontent.com/Ralf-A/bd247c4126a4af73edb3fd21c4e8e22f/raw/data.json')
        .then(response => response.json())
        .then(data => {
          this.posts = data.posts;
        })
        .catch(error => console.error('Error fetching posts:', error));
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>