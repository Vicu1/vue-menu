<script>
export default {
  name: "MainPage",

  data: () => {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-view-dashboard", path: "/home" },
        { title: "About", icon: "mdi-forum", path: "/about" },
      ],
    };
  },
};
</script>

<template>
  <v-sheet height="100vh" class="overflow-hidden" >
    <v-navigation-drawer v-model="drawer" >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-icon>
            <v-img
              max-height="100px"
              max-width="100px"
              src="https://seeklogo.com/images/V/vuetify-logo-3BCF73C928-seeklogo.com.png"
            ></v-img>
          </v-list-item-icon>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.path"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>
