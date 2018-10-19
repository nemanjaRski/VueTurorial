<template>
  <div class="invoicelist">
    <br/>
    <h1>Invoices:</h1>
    <br/>
    <v-layout row wrap justify-center>
      <v-flex xs3 sm4>
        <v-text-field label="Filter by number" type="text" v-model="invoices.filter"/>
      </v-flex>
    </v-layout>
    <v-btn v-on:click="filterByNumber()">Filter</v-btn>
    <v-btn v-on:click="resetFilter()">Reset</v-btn>
    <br/>
    <v-data-table
      :headers="invoices.headers"
      :items="invoices.data"
      :rows-per-page-items="invoices.rowsPerPageItems" 
      :pagination.sync="invoices.pagination">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.number }}</td>
        <td>{{ props.item.description }}</td>
        <td>{{ props.item.date }}</td>
        <td>{{ props.item.amount }}</td>
        <td>
          <v-menu offset-y>
              <v-btn slot="activator" color="primary" icon>
                  <v-icon>list</v-icon>
              </v-btn>
              <v-list>
                <v-list-tile v-on:click=duplicateInvoice(props.item)>
                <v-list-tile-title>Duplicate</v-list-tile-title>
                </v-list-tile>
                <v-list-tile v-on:click="deleteInvoice(props.item)">
                <v-list-tile-title>Delete</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'InvoiceListComponent',
  data () {
    return {
      invoices:
      {
        data : this.$store.state.invoices.invoices,
        rowsPerPageItems: [5, 10, 15],
        pagination: {
          page: 1,
          rowsPerPage: 5,
        },
        filter : "",
        headers: [
        { text: '#', value: '#', sortable: false },
        { text: 'Number', value: 'number', sortable: false },
        { text: 'Description', value: 'description', sortable: false },
        { text: 'Date', value: 'date', sortable: false },
        { text: 'Amount', value: 'amount', sortable: false },
      ],
      }
    }
  },
  methods:
  {
    duplicateInvoice(invoice)
    {
      this.$store.commit('duplicateInvoice', invoice)
      this.resetFilter()
    },
    deleteInvoice(invoice)
    {
      this.$store.commit('deleteInvoice', invoice)
      this.resetFilter()
    },
    filterByNumber: _.debounce(function() {
      this.invoices.data = this.$store.getters.getFilteredInvoices(this.invoices.filter)
      this.invoices.pagination.page = 1
    }, 300),
    resetFilter()
    {
      this.invoices.filter = ""
      this.invoices.data = this.$store.getters.getFilteredInvoices(this.invoices.filter)
    }
  }
}
</script>
