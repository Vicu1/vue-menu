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
        <div v-for="(item, index) of myjson" :key="item">
          <div>
            {{ index }}
            {{ item.details.old_values}} 
          </div> 
        </div>
      </div>
      <div class="new_data">
        <h1>NEW</h1>
        <div v-for="(item, index) of myjson" :key="item">
          <div>
            {{ index }}
            {{ item.details.new_values}} 
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
  display: flex;
  justify-content: space-around;
}
</style>