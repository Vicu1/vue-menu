<script>
export default {
  name: "Home",

  data: () => ({
    model: {},
    rules: {
      required: (v) => !!v || "This field is required",
      requiredSelect: (v) => !!v.length || "This field is required",
      maxLength: (v) => v.length <= 3 || "Select must be less than 3 items",
    },
    people: [],
  }),

  async mounted() {
    await this.fetchAsyncTodos();
  },

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    async fetchAsyncTodos() {
      const url = "https://jsonplaceholder.typicode.com/posts";

      try {
        const response = await fetch(url);
        const data = await response.json();
        this.people = data;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<template>
  <div class="home">
    <v-form ref="form" style="max-width: 1000px; position: absolute; left: 300px" lazy-validation>
      <v-text-field
        v-model="model.name"
        :counter="10"
        :rules="[rules.required]"
        label="Name"
      ></v-text-field>
      <v-text-field
        v-model="model.surname"
        :counter="10"
        :rules="[rules.required]"
        label="Surname"
      ></v-text-field>
      <v-autocomplete
        v-model="model.people"
        :items="people"
        filled
        chips
        multiple
        deletable-chips
        color="blue-grey lighten-2"
        label="Select"
        item-text="title"
        item-value="id"
        :rules="[rules.requiredSelect, rules.maxLength]"
      >
      </v-autocomplete>
      <v-checkbox
        v-model="model.checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>
      <v-btn color="success" class="mr-4" @click="validate"> Validate </v-btn>
      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
      <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn>
    </v-form>
  </div>
</template>
<style>

</style>
