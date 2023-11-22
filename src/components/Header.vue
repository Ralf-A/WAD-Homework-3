<!-- Header.vue -->
<template>
    <header>
        <nav>
            | <router-link to="/">Sign Up</router-link> |
            <router-link to="/main">Main</router-link> |
        </nav>
    </header>
</template>
  
<script>
export default {
    // Add any necessary logic or styling here
};
</script>
  
  

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>

  