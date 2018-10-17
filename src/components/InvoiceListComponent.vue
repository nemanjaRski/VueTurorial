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
    <v-container fluid grid-list-md>
      <v-data-iterator :items="invoices.data" 
      :rows-per-page-items="invoices.rowsPerPageItems" 
      :pagination.sync="invoices.pagination" content-tag="v-layout" row wrap>
        <v-flex slot="item" slot-scope="props" xs12 sm6 md4 lg3>
          <v-card>
            <v-card-title>
            <h4>Invoice#{{ props.item.number }}</h4>
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
            </v-card-title>
            <v-divider></v-divider>
            <v-list dense>
              <v-list-tile>
                <v-list-tile-content>Description:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.description }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Date:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.date }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Amount:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.amount }}</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-data-iterator>
    </v-container>
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
        filter : "",
        rowsPerPageItems: [4, 8, 12],
        pagination: {
          rowsPerPage: 4
        },
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
      if(this.invoices.filter !== '')
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
