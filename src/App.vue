<script>
/*import OfferCreate from "./components/OfferCreate";*/
export default {
  name: "App",
 /* components: {OfferCreate},*/
  data: () => ({
    drawer: null,
    items: [
      { title: "Home", icon: "mdi-view-dashboard", path: "/home" },
      { title: "About", icon: "mdi-forum", path: "/about" },
      { title: "Table", icon: "mdi-forum", path: "/table" },
      { title: "Details", icon: "mdi-forum", path: "/details" },
      { title: "Comments", icon: "mdi-forum", path: "/comments" },
      { title: "Gallery", icon: "mdi-forum", path: "/gallery" },
    ],
  }),
};
</script>

<template>
  <v-app>
    <v-navigation-drawer mini-variant v-model="drawer"  absolute>
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
    <div style="position: relative">
      <router-view></router-view>

    </div>
<!--    <offer-create/>-->
  </v-app>
</template>
