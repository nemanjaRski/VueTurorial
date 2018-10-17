<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    if(this.$store.state.session.users.length === 0)
      this.$router.replace({ name: "StartPageComponent" });
    else
      this.$router.replace({ name: "MainPageComponent" });
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
