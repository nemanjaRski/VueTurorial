<template>
  <div class="mainpage">
    <AddInvoiceComponent/>
    <InvoiceListComponent/>
  </div>
</template>

<script>
import InvoiceListComponent from './InvoiceListComponent'
import AddInvoiceComponent from './AddInvoiceComponent'
export default {
  name: 'MainPageComponent',
  components:
  {
    InvoiceListComponent,
    AddInvoiceComponent
  },
  mounted() {
    if(this.$store.state.session.users.length === 0)
      this.$router.replace({ name: "LoginComponent" });
  }
}
</script>
