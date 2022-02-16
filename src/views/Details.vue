<script>
import json from "@/json/data.json";
export default {
  name: "Details",

  data: () => ({
    json: json,
    array: [],
    isSame: {},
  }),
  mounted() {
    this.json.forEach((item, index) => {
      for (const key in item.details.old_values) {
        this.isSame[`${key}_${index}`] =
          item.details.old_values[key] === item.details.new_values[key];
      }
    });
    this.$forceUpdate()
  },
};
</script>

<template>
  <div>
    <div class="container">
      <div class="old_data">
        <h1>OLD</h1>
        <div v-for="(item, index) of json" :key="index">
          <div
            v-for="(element, name) in item.details.old_values"
            :key="`${name}_1`"
          >
            <p
              :class="{
                'color-green': isSame[`${name}_${index}`],
                'color-red': !isSame[`${name}_${index}`],
              }"
            >
              {{ name }}: {{ element }}
            </p>
          </div>
        </div>
      </div>
      <div class="new_data">
        <h1>NEW</h1>
        <div v-for="(item, index) of json" :key="index">
          <div
            v-for="(element, name) in item.details.new_values"
            :key="`${name}_1`"
          >
            <p :class="{
                'color-green': isSame[`${name}_${index}`],
                'color-red': !isSame[`${name}_${index}`],
              }">{{ name }}: {{ element }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="final__data">
      <div class="items" v-for="(item, index) of json" :key="index">
        <div v-for="(element, name) in item.details.new_values"  :key="`${name}_1`">
          <p>
            <strong> {{ name }}: </strong>
            <span>{{ element }}</span
            >;
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
.old_data {
  margin-right: 20px;
  border-right: 2px solid red;
}
.items {
  border: 1px solid grey;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.final__data {
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
}
p {
  margin: 0;
}
.color-red {
  color: red;
}
.color-green {
  color: green;
}
</style>
