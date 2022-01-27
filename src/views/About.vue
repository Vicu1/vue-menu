<script>
export default {
  name: "About",

  data: () => ({
    categories: ["ALL", "COFFEE", "SANDWICH", "TEA", "DONUTS"],
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
  }),

  computed: {
    sortedItems() {
      return this.cards.filter((item) => {
        if (this.activeCategory !== "ALL") {
          return item.category === this.activeCategory;
        }
        return item;
      });
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
      style="margin: 10px 10px 0"
      color="primary"
      elevation="7"
      large
      outlined
      rounded
      @click="setActiveCategory(category)"
      v-for="category of categories"
      :key="category"
    >
      {{ category }}
    </v-btn>
    <v-hover v-slot="{ hover }">
      <div class="cards-wrapper">
        <v-card
          style="position: relative"
          class="mx-auto"
          max-width="400px"
          height="400"
          outlined
          v-for="(item, index) in sortedItems"
          :key="index"
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
          <v-card-actions v-if="hover">
            <v-btn outlined text style="position: absolute"> Button </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-hover>
  </div>
</template>

<style>
.about {
  text-align: center;
}
.cards-wrapper {
  row-gap: 10px;
  max-width: 1200px;
  margin: 20px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
