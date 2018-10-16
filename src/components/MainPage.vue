<template>
  <div class="mainpage">
    <h1>Create invoice:</h1>
    <label>Number: </label>
    <input type="number" min="1" v-model="input.number"/>
    <label>Description: </label>
    <input type="text" v-model="input.description"/>
    <label>Date: </label>
    <input type="date" v-model="input.date"/>
    <label>Amount: </label>
    <input type="number" step="any" min="0" v-model="input.amount"/>
    <button v-on:click="append()">Create</button>
    <br/>
    <InvoiceList/>
  </div>
</template>

<script>
import InvoiceList from './InvoiceList'
export default {
  name: 'MainPage',
  components:
  {
    InvoiceList,
  },
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
      this.$router.replace({ name: "Login" });
  },
  computed:
  {
    isValidInput: function()
    {
      console.log('1')
      if(this.input.number === '' || parseInt(this.input.number) <= 0)
        return false;
        console.log('2')
      if(this.input.description === '')
        return false;
        console.log('3')
      if(this.input.date === '')
        return false;
        console.log('4')
      if(this.input.amount === '' || parseFloat(this.input.amount) <= 0)
        return false;
        console.log('5')
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
