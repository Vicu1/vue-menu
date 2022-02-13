<script>
import json from "@/json/data.json";
export default {
  name: "Details",

  data: () => ({
    myjson: json,
  }),

  mounted() {
   
    
  },
}
</script>

<template>
  <div>
    <div class="container">
      <div class="old_data">
        <h1>OLD</h1>
        <div v-for="(item) of myjson" :key="item">
          <div v-if="item.details.old_values">
           <p v-if="item.details.old_values['Start date']">
            <strong>Start date:</strong>  {{ item.details.old_values['Start date']}}; 
          </p>
          <p v-if="item.details.old_values['End date']">
            <strong>End date:</strong>  {{ item.details.old_values['End date']}}; 
          </p>
          <p v-if="item.details.old_values['Amount'] ">
            <strong>Amount:</strong>  {{ item.details.old_values['Amount']}}; 
          </p>
          <p v-if="item.details.old_values['Comment']">
            <strong>Comment:</strong>  {{ item.details.old_values['Comment']}}; 
          </p>
          <p v-if="item.details.old_values['Car ID']">
            <strong>Car ID:</strong>  {{ item.details.old_values['Car ID']}}; 
          </p>
          <p v-if="item.details.old_values['Collateral amount']">
            <strong>Collateral amount:</strong>  {{ item.details.old_values['Collateral amount']}}; 
          </p>
          <p v-if="item.details.old_values['Address']">
            <strong>Address:</strong>  {{ item.details.old_values['Address']}}; 
          </p>
          <p v-if="item.details.old_values['Client ID']">
            <strong>Client ID:</strong>  {{ item.details.old_values['Client ID']}}; 
          </p>
          <p v-if="item.details.old_values['Is Paid']">
            <strong>Is Paid:</strong>  {{ item.details.old_values['Is Paid']}}; 
          </p>
          <p v-if="item.details.old_values['Author ID']">
            <strong>Author ID:</strong>  {{ item.details.old_values['Author ID']}}; 
          </p>
          <p v-if="item.details.old_values['ID']">
            <strong>ID:</strong>  {{ item.details.old_values['ID']}}; 
          </p>
          <p v-if="item.details.old_values['Payment ID']">
            <strong>Payment ID:</strong>  {{ item.details.old_values['Payment ID']}}; 
          </p>
          </div> 
        </div>
      </div>
      <div class="new_data">
        <h1>NEW</h1>
        <div v-for="(item) of myjson" :key="item">
          <div ref='item'>
            <p v-if="item.details.new_values['Start date']">
            <strong>Start date:</strong>  {{ item.details.new_values['Start date']}}; 
          </p>
          <p v-if="item.details.new_values['End date']">
            <strong>End date:</strong>  {{ item.details.new_values['End date']}}; 
          </p>
          <p v-if="item.details.new_values['Amount'] ">
            <strong>Amount:</strong>  {{ item.details.new_values['Amount']}}; 
          </p>
          <p v-if="item.details.new_values['Comment']">
            <strong>Comment:</strong>  {{ item.details.new_values['Comment']}}; 
          </p>
          <p v-if="item.details.new_values['Car ID']">
            <strong>Car ID:</strong>  {{ item.details.new_values['Car ID']}}; 
          </p>
          <p v-if="item.details.new_values['Collateral amount']">
            <strong>Collateral amount:</strong>  {{ item.details.new_values['Collateral amount']}}; 
          </p>
          <p v-if="item.details.new_values['Address']">
            <strong>Address:</strong>  {{ item.details.new_values['Address']}}; 
          </p>
          <p v-if="item.details.new_values['Client ID']">
            <strong>Client ID:</strong>  {{ item.details.new_values['Client ID']}}; 
          </p>
          <p v-if="item.details.new_values['Is Paid']">
            <strong>Is Paid:</strong>  {{ item.details.new_values['Is Paid']}}; 
          </p>
          <p v-if="item.details.new_values['Author ID']">
            <strong>Author ID:</strong>  {{ item.details.new_values['Author ID']}}; 
          </p>
          <p v-if="item.details.new_values['ID']">
            <strong>ID:</strong>  {{ item.details.new_values['ID']}}; 
          </p>
          <p v-if="item.details.new_values['Payment ID']">
            <strong>Payment ID:</strong>  {{ item.details.new_values['Payment ID']}}; 
          </p>
          </div> 
        </div>
      </div>
    </div>

    <div class="final__data">
      <div v-for="item of myjson" :key="item"> 
        <div class="items">
          <p v-if="item.details.new_values['Start date']">
            <strong>Start date:</strong>  {{ item.details.new_values['Start date']}}; 
          </p>
          <p v-if="item.details.new_values['End date']">
            <strong>End date:</strong>  {{ item.details.new_values['End date']}}; 
          </p>
          <p v-if="item.details.new_values['Amount'] ">
            <strong>Amount:</strong>  {{ item.details.new_values['Amount']}}; 
          </p>
          <p v-if="item.details.new_values['Comment']">
            <strong>Comment:</strong>  {{ item.details.new_values['Comment']}}; 
          </p>
          <p v-if="item.details.new_values['Car ID']">
            <strong>Car ID:</strong>  {{ item.details.new_values['Car ID']}}; 
          </p>
          <p v-if="item.details.new_values['Collateral amount']">
            <strong>Collateral amount:</strong>  {{ item.details.new_values['Collateral amount']}}; 
          </p>
          <p v-if="item.details.new_values['Address']">
            <strong>Address:</strong>  {{ item.details.new_values['Address']}}; 
          </p>
          <p v-if="item.details.new_values['Client ID']">
            <strong>Client ID:</strong>  {{ item.details.new_values['Client ID']}}; 
          </p>
          <p v-if="item.details.new_values['Is Paid']">
            <strong>Is Paid:</strong>  {{ item.details.new_values['Is Paid']}}; 
          </p>
          <p v-if="item.details.new_values['Author ID']">
            <strong>Author ID:</strong>  {{ item.details.new_values['Author ID']}}; 
          </p>
          <p v-if="item.details.new_values['ID']">
            <strong>ID:</strong>  {{ item.details.new_values['ID']}}; 
          </p>
          <p v-if="item.details.new_values['Payment ID']">
            <strong>Payment ID:</strong>  {{ item.details.new_values['Payment ID']}}; 
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1{
  text-align: center;
}
.old_data{
  margin-right: 20px;
  border-right: 2px solid red;
}
.items{
  border: 1px solid grey;
}
.container{
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.final__data{
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
}
p{
  margin: 0;
}
</style>