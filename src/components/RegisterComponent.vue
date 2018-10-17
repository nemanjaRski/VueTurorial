<template>
  <div class="login">
    <img src="../assets/register.png">
    <br/>
     <v-flex xs12 sm4 offset-sm4>
        <v-text-field label="Username" type="text" v-model="input.username"/>
    </v-flex>
     <v-flex xs12 sm4 offset-sm4>
        <v-text-field label="Password" type="password" v-model="input.password"/>
    </v-flex>
     <v-flex xs12 sm4 offset-sm4>
        <v-text-field label="Repeat password" type="password" v-model="input.passwordRepeat"/>
    </v-flex>
    <v-btn v-on:click="register()">Register</v-btn>
  </div>
</template>

<script>
export default {
  name: 'RegisterComponent',
  data() {
      return {
          input: {
              username: "",
              password: "",
              passwordRepeat: ""
          }
      }
    },
  mounted() {
    if(this.$store.state.session.users.length != 0)
      this.$router.replace({ name: "MainPageComponent" });
  },
  methods:
  {
    register() {
        if(this.input.username !== "" && this.input.password !== "" && this.input.passwordRepeat !== "") {
          if(this.input.password === this.input.passwordRepeat){
            const user =
            {
              username : this.input.username,
              password : this.input.password
            }
            this.$store.commit('registerUser',user)
            this.$router.replace({ name: "LoginComponent" });
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

