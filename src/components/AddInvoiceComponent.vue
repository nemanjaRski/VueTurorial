<template>
  <div class="mainpage">
    <h1>Create invoice:</h1>
     <v-flex xs12 sm4 offset-sm4>
        <v-text-field label="Number" type="number" min="1" v-model="input.number"/>
    </v-flex>
     <v-flex xs12 sm4 offset-sm4>
        <v-text-field label="Description" type="text" v-model="input.description"/>
    </v-flex>
     <v-flex xs12 sm4 offset-sm4>
        <v-text-field label="Date" type="date" v-model="input.date"/>
    </v-flex>
     <v-flex xs12 sm4 offset-sm4>
        <v-text-field label="Amount" type="number" step="any" min="0" v-model="input.amount"/>
    </v-flex>
    <v-btn v-on:click="append()">Create</v-btn>
  </div>
</template>

<script>
export default {
  name: 'AddInvoiceComponent',
  data() {
        return {
            input: {
                number: "",
                description: "",
                date: "",
                amount: ""
            }
        }
    },
  mounted() {
    if(this.$store.state.session.users.length == 0)
      this.$router.replace({ name: "LoginComponent" });
  },
  computed:
  {
    isValidInput: function()
    {
      if(this.input.number === '' || parseInt(this.input.number) <= 0)
        return false;
      if(this.input.description === '')
        return false;
      if(this.input.date === '')
        return false;
      if(this.input.amount === '' || parseFloat(this.input.amount) <= 0)
        return false;
      return true;
    }
  },
  methods:
  {
    append()
    {
      if(this.isValidInput)
      {
        const obj =  {
          number : parseInt(this.input.number),
          description : this.input.description,
          date : this.input.date,
          amount : parseFloat(this.input.amount)
        }
        this.$store.commit('addinvoice', obj)

      } else {
        console.log('Invalid input')
      }
    },
  }
}
</script>