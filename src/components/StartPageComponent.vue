<template>
  <div class="start">
    <img src="../assets/start_page.png">
    <br/>
    <v-btn v-on:click="login()">Login</v-btn>
    <v-btn v-on:click="register()">Register</v-btn>
  </div>
</template>

<script>
export default {
  name: 'StartPageComponent',
  methods:
  {
    login() {
        this.$router.push({ name: "LoginComponent" });
    },
    register() {
        this.$router.push({ name: "RegisterComponent" });
    }
  },
}
</script>
