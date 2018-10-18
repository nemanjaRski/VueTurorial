<template>
  <div class="mainpage">
    <HeaderComponent/>
    <AddInvoiceComponent/>
    <InvoiceListComponent/>
  </div>
</template>

<script>
import InvoiceListComponent from './InvoiceListComponent'
import AddInvoiceComponent from './AddInvoiceComponent'
import HeaderComponent from './HeaderComponent'
export default {
  name: 'MainPageComponent',
  components:
  {
    InvoiceListComponent,
    AddInvoiceComponent,
    HeaderComponent
  },
  mounted() {
    if(this.$store.state.session.users.length === 0)
      this.$router.replace({ name: "LoginComponent" });
  }
}
</script>
