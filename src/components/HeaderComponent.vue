<template>
    <v-card>
        <v-toolbar color="cyan" dark>
            <v-btn v-on:click="returnToStartPage()" color="success">Home</v-btn>
            <v-spacer></v-spacer>
            <v-btn v-if="canDisplayButton()" v-on:click="goToInvoicePage()" color="warning">Invoices</v-btn>
            <v-spacer></v-spacer>
            <v-btn v-if="canDisplayButton()" v-on:click="logout()" color="error">Logout</v-btn>
        </v-toolbar>
    </v-card>
</template>

<script>
export default {
  name: 'HeaderComponent',
  methods:
  {
    canDisplayButton()
    {
        return this.$store.state.session.users.length !== 0
    },
    goToInvoicePage()
    {
        this.$router.push({ name: "MainPageComponent" });
    },
    returnToStartPage()
    {
        this.$router.push({ name: "StartPageComponent" });
    },
    logout()
    {
        this.$store.commit('logoutUser')
        this.$router.push({ name: "StartPageComponent" });
    }
  },
}
</script>