<template>
  <div class="start">
    <img src="../assets/start_page.png">
    <br/>
    <button v-on:click="login()">Login</button>
    <button v-on:click="register()">Register</button>
  </div>
</template>

<script>
export default {
  name: 'StartPage',
  methods:
  {
    login() {
        this.$router.replace({ name: "Login" });
    },
    register() {
        this.$router.replace({ name: "Register" });
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
