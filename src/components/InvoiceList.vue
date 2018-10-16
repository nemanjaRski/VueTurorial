<template>
  <div class="invoicelist">
    <h1>Invoices:</h1>
    <br/>
    <label>Filter by number: &nbsp</label>
    <input type="number" min="1" v-model="invoices.filter"/>
    <button v-on:click="filterByNumber()">Filter</button>
    <button v-on:click="resetFilter()">Reset</button>
    <v-toolbar></v-toolbar>
    <br/>
     <h2 v-for="(invoice, index) in invoices.data">
      <p>
        <label>Number: {{invoice.number}}</label>
        <label>Description: {{invoice.description}}</label>
        <label>Date: {{invoice.date}}</label>
        <label>Amount: {{invoice.amount}}</label>
        <button v-on:click="duplicateInvoice(invoice)">Duplicate</button>
        <button v-on:click="deleteInvoice(index)">Delete</button>
      </p>
     </h2>
     <br/>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'InvoiceList',
  data () {
    return {
      invoices:
      {
        data : this.$store.state.invoices.invoices,
        filter : ""
      }
    }
  },
  methods:
  {
    duplicateInvoice(invoice)
    {
      this.$store.commit('duplicateInvoice', invoice)
    },
    deleteInvoice(index)
    {
      this.$store.commit('deleteInvoice', index)
    },
    filterByNumber: _.debounce(function() {
    console.log(this.invoices.filter)
    if(this.invoices.filter != '')
    {
      this.invoices.data = this.$store.state.invoices.invoices.filter((value) => value.number === parseInt(this.invoices.filter))
    }
    else
    {
      this.invoices.data = this.$store.state.invoices.invoices
    }
    }, 300),
    resetFilter()
    {
      this.invoices.filter = ""
      this.invoices.data = this.$store.state.invoices.invoices
    }
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
