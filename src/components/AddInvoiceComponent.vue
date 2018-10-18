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
        <v-menu
          ref="menu"
          :close-on-content-click="false"
          v-model="input.menu"
          :nudge-right="40"
          :return-value.sync="input.date"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px">
          <v-text-field
            slot="activator"
            v-model="input.date"
            label="Date"
            prepend-icon="event"
            readonly
          ></v-text-field>
          <v-date-picker v-model="input.date" @input="$refs.menu.save(input.date)"></v-date-picker>
        </v-menu>
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
                amount: "",
                menu: false
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
      const errorsOutput = []
      if(this.input.number === '' || parseInt(this.input.number) <= 0)
      {
        errorsOutput.push("Invalid entry in number field")
      }
      if(this.input.description === '')
      {
        errorsOutput.push("Invalid entry in description field")
      }
      if(this.input.date === '')
      {
        errorsOutput.push("Invalid entry in date field")
      }
      if(this.input.amount === '' || parseFloat(this.input.amount) < 0)
      {
        errorsOutput.push("Invalid entry in amount field")
      }
      console.log(errorsOutput.join(';'))
      return errorsOutput.length === 0;
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