<script>
export default {
  name: "Table",

  data: () => ({
    headers: [
          {
            text: 'Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Username', value: 'username' },
          { text: 'Address', value: 'address.city', sortable: false },
          { text: 'Website', value: 'website' },
          { text: 'Company', value: 'company.name' },
          { text: 'Email', value: 'email' },
          { text: 'Phone', value: 'phone' },
        ],
        items: [],
    
  }),

  async mounted() {
    const axios = require("axios");
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(data);
      this.items = data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<template>
<div class="table">
    <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</div>
 
</template>

<style>
.table{
  width: 1000px;
  margin: 0 auto;
}
</style>
