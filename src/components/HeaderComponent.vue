<template>
    <v-card>
        <v-toolbar color="cyan" dark>
            <v-layout align-center justify-space-around row fill-height>
                <v-btn v-on:click="returnToStartPage()" color="success">Home</v-btn>
                <v-btn v-if="canDisplayButton()" v-on:click="goToInvoicePage()" color="warning">Invoices</v-btn>
                <v-btn v-if="canDisplayButton()" v-on:click="logout()" color="error">Logout</v-btn>
            </v-layout>
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