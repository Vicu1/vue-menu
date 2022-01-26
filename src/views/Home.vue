<script>
export default {
  name: "Home",

  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],

    checkbox: false,
    autoUpdate: true,
    friends: ["Sandra Adams", "Britta Holt"],
    isUpdating: false,
    peopleName: "Midnight Crew",
    people: []
  }),

  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    },
  },

  async mounted() {
    await this.fetchAsyncTodos();
    console.log("test");
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
    remove(item) {
      const index = this.friends.indexOf(item.name);
      if (index >= 0) this.friends.splice(index, 1);
    },
    async fetchAsyncTodos() {
      const url = "https://jsonplaceholder.typicode.com/posts";

      try {
        const response = await fetch(url);
        const data = await response.json();
        this.people = data.map(item => ({name: item.title}));
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<template>
  <div class="home">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-autocomplete
        v-model="friends"
        :disabled="isUpdating"
        :items="people"
        filled
        chips
        color="blue-grey lighten-2"
        label="Select"
        item-text="name"
        item-value="name"
        multiple
      >
        <template v-slot:selection="data">
          <v-chip
            v-bind="data.attrs"
            :input-value="data.selected"
            close
            @click="data.select"
            @click:close="remove(data.item)"
          >
            {{ data.item.name }}
          </v-chip>
        </template>
        <template v-slot:item="data">
          <template v-if="typeof data.item !== 'object'">
            <v-list-item-content v-text="data.item"></v-list-item-content>
          </template>
          <template v-else>
            <v-list-item-content>
              <v-list-item-title v-html="data.item.name"></v-list-item-title>
              <v-list-item-subtitle
                v-html="data.item.group"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </template>
      </v-autocomplete>

      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Validate
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

      <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn>
    </v-form>
  </div>
</template>
<style>
.home {
  position: absolute;
}
</style>
