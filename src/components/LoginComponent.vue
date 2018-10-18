<template>
  <div class="login">
    <HeaderComponent/>
    <img src="../assets/login.png"/>
    <br/>
    <v-flex xs12 sm4 offset-sm4>
        <v-text-field label="Username" type="text" v-model="input.username"/>
    </v-flex>
    <v-flex xs12 sm4 offset-sm4>
        <v-text-field label="Password" type="password" v-model="input.password"/>
    </v-flex>
    <v-btn v-on:click="login()">Login</v-btn>
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent'
export default {
  name: 'LoginComponent',
  components: {
      HeaderComponent
  },
  data() {
      return {
          input: {
              username: "",
              password: ""
          }
      }
    },
  mounted() {
    if(this.$store.state.session.users.length != 0)
      this.$router.replace({ name: "MainPageComponent" });
  },
  methods:
  {
    login() {
        if(this.input.username !== "" && this.input.password !== "") {
            const user =
            {
              username : this.input.username,
              password : this.input.password
            }
            if(this.$store.getters.checkUsernamPassword(user)){
                this.$store.commit('loginUser',user)
                this.$router.push({ name: "MainPageComponent" });
            } else {
                console.log("The username and / or password is incorrect");
            }
        } else {
            console.log("A username and password must be present");
        }
    },
  },
}
</script>

