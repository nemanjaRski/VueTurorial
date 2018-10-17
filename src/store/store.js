import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import userBase from "./userBase"
import invoiceStore from "./invoiceStore"
import session from "./session"

export const store  = new Vuex.Store({
    modules:
    {
      login: userBase,
      invoices : invoiceStore,
      session: session
    }
});
