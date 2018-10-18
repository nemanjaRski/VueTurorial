import moment from 'moment'

const invoiceStore = {
    state: {
      invoices : []
    },
    mutations: {
      addinvoice(state, invoice){
        if(state.invoices.filter(function(element){
          return element.number === invoice.number
        }).length === 0)
        {
          state.invoices.push(invoice)
        }
      },
      deleteInvoice(state, index)
      {
        state.invoices.splice(index,1)
      },
      duplicateInvoice(state, invoice)
      {
        const duplicate = {
          number: Math.max.apply(Math, state.invoices.map(function(o) { return o.number; })) + 1,
          description: invoice.description,
          date: moment().format("YYYY-MM-DD").toString(),
          amount: invoice.amount
        }
        state.invoices.push(duplicate)
      }
    }
  }

export default invoiceStore