import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

import userBase from "./userBase"
import invoiceStore from "./invoiceStore"
import session from "./session"

const vuexLocalStorage = new VuexPersistence({
  key: 'vuex',
  storage: window.localStorage, 
})

export const store  = new Vuex.Store({
    modules:
    {
      login: userBase,
      invoices : invoiceStore,
      session: session
    },
    plugins: [vuexLocalStorage.plugin]
});