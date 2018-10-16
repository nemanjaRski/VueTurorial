<template>
  <div class="login">
    <img src="../assets/LoginIcon.jpg">
    <br/>
    <input placeholder="Username" type="text" v-model="input.username"/>
    <input placeholder="Password" type="password" v-model="input.password"/>
    <button v-on:click="login()">Login</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
  mounted() {
    console.log(this.$store.state.session.users.length)
    if(this.$store.state.session.users.length != 0)
      this.$router.replace({ name: "MainPage" });
  },
  methods:
  {
    login() {
        if(this.input.username != "" && this.input.password != "") {
            const user =
            {
              username : this.input.username,
              password : this.input.password
            }
            if(this.$store.getters.userExists(user)){
                this.$store.commit('loginUser',user)
                this.$router.replace({ name: "MainPage" });
            } else {
                console.log("The username and / or password is incorrect");
            }
        } else {
            console.log("A username and password must be present");
        }
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
