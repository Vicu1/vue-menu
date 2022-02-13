<script>
import json from "@/json/data.json";
export default {
  name: "Details",

  data: () => ({
    myjson: json,
  }),

  mounted() {
    this.myjson.forEach(element => {
      if (element.details.old_values['Start date'] === element.details.new_values['Start date']){
        this.$refs.item.style.color = 'red';
      }
    });
    
  },
}
</script>

<template>
  <div>
    <div class="container">
      <div class="old_data">
        <h1>OLD</h1>
        <div v-for="(item) of myjson" :key="item">
          <div>
           <p>
             {{ item.details.old_values}} 
            </p>
          </div> 
        </div>
      </div>
      <div class="new_data">
        <h1>NEW</h1>
        <div v-for="(item) of myjson" :key="item">
          <div ref='item'>
            <p>
             ID: {{ item.details.new_values.ID}} 
            </p>
            <p>
             Amount: {{ item.details.new_values.Amount}} 
            </p>
            <p>
             Start date: {{ item.details.new_values['Start date']}} 
            </p>
            <p>
             End date: {{ item.details.new_values['End date']}} 
            </p>
            <p>
             Comment: {{ item.details.new_values['Comment']}} 
            </p>
            <p>
             Address: {{ item.details.new_values['Address']}} 
            </p>
          </div> 
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
}

.container{
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
p{
  margin: 0;
}
</style>