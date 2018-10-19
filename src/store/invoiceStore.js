import moment from 'moment'

const invoiceStore = {
    state: {
      invoices : [],
      id : 0
    },
    getters:
    {
      getId: state => {
        return state.id
      }
    },
    mutations: {
      addinvoice(state, invoice){
        if(state.invoices.filter(function(element){
          return element.number === invoice.number
        }).length === 0)
        {
          state.invoices.push(invoice)
          ++state.id
        }
      },
      deleteInvoice(state, invoice)
      {
        state.invoices.splice(state.invoices.findIndex((value) => value.number === invoice.number),1)
      },
      duplicateInvoice(state, invoice)
      {
        const duplicate = {
          id: ++state.id,
          number:  Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 6),
          description: invoice.description,
          date: moment().format("YYYY-MM-DD").toString(),
          amount: invoice.amount
        }
        state.invoices.push(duplicate)
      }
    }
  }

export default invoiceStore