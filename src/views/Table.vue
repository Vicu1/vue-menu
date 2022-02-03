<script>
export default {
  name: "Table",

  data: () => ({
    headers: [
      {
        text: "Name",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Username", value: "username" },
      { text: "Address", value: "address", sortable: false },
      { text: "Website", value: "website" },
      { text: "Company", value: "company" },
      { text: "Email", value: "email" },
      { text: "Phone", value: "phone" },
    ],
    items: [],
    dialog: false,
    selectedItem: {
      address: {}
    },
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

  methods: {
    openModal(item) {
      this.dialog = true;
      this.selectedItem = JSON.parse(JSON.stringify(item));
    },
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
    >
      <template #item.address="{ item }">
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-chip
              @click="openModal(item)"
              v-bind="attrs"
              v-on="on"
              link
              outlined
            >
              {{ item.address.city }}
            </v-chip>
          </template>
          <span>
            <div>
              {{ item.address.street }}
            </div>
            <div>
              {{ item.address.suite }}
            </div>
            <div>
              {{ item.address.zipcode }}
            </div>
          </span>
        </v-tooltip>
      </template>
      <template #item.company="{ item }">
        {{ item.company.name}}
      </template>
    </v-data-table>
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title>
          <span class="text-h5">Address</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="selectedItem.address.street" label="street" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="selectedItem.address.suite" label="suite" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="selectedItem.address.zipcode"
                  label="zipcode"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style>
.table {
  width: 1000px;
  margin: 0 auto;
}
</style>
