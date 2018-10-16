import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const moduleSession = {
  state : {
    users: []
  },
  mutations: {
    loginUser(state, user)
    {
      state.users.push(user)
    }
  },
}

const moduleLoginData = {
  state: {
      users: [{ username: 'manas', password: 'manas' }]
  },
  getters: {
    userExists(state)
    {
      return user => state.users.filter(
        (value) => value.username === user.username && value.password === user.password
      ).length != 0
    }
  },
  mutations: {
    registerUser(state, user)
    {
      state.users.push(user)
    }
  },
}

const moduleInvoice = {
  state: {
    invoices : []
  },
  mutations: {
    addinvoice(state, invoice){
      if(state.invoices.filter(function(element){
        return element.number === invoice.number
      }).length == 0)
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
        date: invoice.date,
        amount: invoice.amount
      }
      state.invoices.push(duplicate)
    }
  }
}

export const store  = new Vuex.Store({
    modules:
    {
      login: moduleLoginData,
      invoices : moduleInvoice,
      session: moduleSession
    }
});
