<template>
  <div class="login">
    <img src="../assets/register.png">
    <br/>
    <input placeholder="Username" type="text" v-model="input.username"/>
    <input placeholder="Password" type="password" v-model="input.password"/>
    <input placeholder="Repeat password" type="password" v-model="input.password2"/>
    <button v-on:click="register()">Register</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
            return {
                input: {
                    username: "",
                    password: "",
                    password2: ""
                }
            }
        },
  mounted() {
    if(this.$store.state.session.users.length != 0)
      this.$router.replace({ name: "MainPage" });
  },
  methods:
  {
    register() {
        if(this.input.username != "" && this.input.password != "" && this.input.password2 != "") {
          if(this.input.password === this.input.password2){
            const user =
            {
              username : this.input.username,
              password : this.input.password
            }
            this.$store.commit('registerUser',user)
            this.$router.replace({ name: "Login" });
          } else {
            console.log("Passwords must match")
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
