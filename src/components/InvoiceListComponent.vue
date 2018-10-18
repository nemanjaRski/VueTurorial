<template>
  <div class="invoicelist">
    <br/>
    <h1>Invoices:</h1>
    <br/>
    <v-layout row wrap justify-center>
      <v-flex xs3 sm4>
        <v-text-field label="Filter by number" type="number" min="1" v-model="invoices.filter"/>
      </v-flex>
    </v-layout>
    <v-btn v-on:click="filterByNumber()">Filter</v-btn>
    <v-btn v-on:click="resetFilter()">Reset</v-btn>
    <br/>
    <v-data-table
      :headers="invoices.headers"
      :items="invoices.data"
      :total-items="invoices.pagination.totalItems"
      :rows-per-page-items="invoices.rowsPerPageItems" 
      :pagination.sync="invoices.pagination">
      <template slot="items" slot-scope="props">
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
                <v-list-tile v-on:click="deleteInvoice(props.item.index)">
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
        { text: 'No#', value: 'no', sortable: false },
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
    },
    deleteInvoice(index)
    {
      this.$store.commit('deleteInvoice', index)
    },
    filterByNumber: _.debounce(function() {
      if(this.invoices.filter !== '')
      {
        this.invoices.data = this.$store.state.invoices.invoices.filter((value) => (value.number+'').includes(this.invoices.filter+''))
      }
      else
      {
        this.invoices.data = this.$store.state.invoices.invoices
      }
      this.invoices.pagination.page = 1
    }, 300),
    resetFilter()
    {
      this.invoices.filter = ""
      this.invoices.data = this.$store.state.invoices.invoices
    }
  }
}
</script>
