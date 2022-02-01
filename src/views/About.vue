<script>
export default {
  name: "About",

  data: () => ({
    categories: ["ALL", "COFFEE", "SANDWICH", "TEA", "DONUTS", "Meat"],
    cards: [
      {
        id: 1,
        name: "Cappuccino",
        category: "COFFEE",
        price: "5",
        src: require("@/assets/cappuccino.png"),
      },
      {
        id: 2,
        name: "Black Tea",
        category: "TEA",
        price: "2",
        src: require("@/assets/tea.png"),
      },
      {
        id: 3,
        name: "Royal Donuts",
        category: "DONUTS",
        price: "3",
        src: require("@/assets/donuts.png"),
      },
      {
        id: 4,
        name: "Latte",
        category: "COFFEE",
        price: "4",
        src: require("@/assets/cappuccino.png"),
      },
      {
        id: 5,
        name: "Sandwich",
        category: "SANDWICH",
        price: "5",
        src: require("@/assets/sandwich.png"),
      },
      {
        id: 6,
        name: "White Donuts",
        category: "DONUTS",
        price: "3",
        src: require("@/assets/donuts.png"),
      },
    ],
    activeCategory: "ALL",
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  }),

  computed: {
    sortedItems() {
      if (this.activeCategory === "ALL") {
        return this.cards;
      }
      if (this.activeCategory !== this.categories) {
        console.log("hi");
      }
      return this.cards.filter((item) => item.category === this.activeCategory);
    },
  },

  mounted() {
    this.activeCategory = this.$route.params.category || "ALL";
  },
  methods: {
    setActiveCategory(category) {
      this.$router.push(`/about/${category}`);
      this.activeCategory = category;
    },
  },
};
</script>

<template>
  <div class="about">
    <v-btn
      color="primary"
      elevation="7"
      large
      outlined
      rounded
      @click="setActiveCategory(category)"
      v-for="category in categories"
      :key="category"
    >
      {{ category }}
    </v-btn>
    <v-row
      class="fill-height"
      align="center"
      justify="center"
      style="max-width: 1000px; margin: 0 auto"
    >
      <div v-if="sortedItems.length">
        <v-col v-for="(item, i) in sortedItems" :key="i" cols="12" md="4">
          <v-hover v-slot="{ hover }">
            <v-card
              style="position: relative"
              class="mx-auto"
              transition="slide-x-transition"
              max-width="400px"
              height="400"
              outlined
            >
              <v-list-item>
                <v-list-item-content>
                  <v-img :src="item.src" width="100px" height="300px"></v-img>
                  <v-list-item-title class="text-h5 mb-1">
                    {{ item.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="text-h5">
                    Price {{ item.price }}$
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-slide-y-transition>
                <v-card-actions v-if="hover">
                  <v-btn outlined text> Button </v-btn>
                </v-card-actions>
              </v-slide-y-transition>
            </v-card>
          </v-hover>
        </v-col>
      </div>
      <div v-else>Category is empty</div>
    </v-row>
  </div>
</template>

<style>
.about {
  text-align: center;
}
</style>
