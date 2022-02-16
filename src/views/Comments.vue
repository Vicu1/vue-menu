<script>
import axios from "axios";
export default {
  name: "Comments",
  data: () => ({
    axios,
    posts: [],
    comments: [],
    panel: [],
    rules: {
      required: (v) => !!v || "This field is required",
    },
    model: {

    },
    isLoadingComments: false,
  }),
  async mounted() {
    await this.loadData();
  },

  methods: {
    async loadData() {
      try {
        const response = await this.axios.get(
          "https://jsonplaceholder.typicode.com/posts"

        );
        this.posts = response.data;
        console.log(this.posts);
      } catch (e) {
        console.log(e);
      }
    },
    async getComments(id) {
      console.log(id)
      try {
        this.comments = [];
        const { data } = await this.axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}/comments`
        );
        this.comments = data;
        this.isLoadingComments = true;
      } catch (e) {
        console.log(e);
      }
    },
    async submit() {
      try {
        await this.axios.post(`https://jsonplaceholder.typicode.com/posts`, this.model );
        await this.loadData();
        this.model = {};
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <v-expansion-panels v-model="panel" inset>
      <v-expansion-panel @click="getComments(item.id)" v-for="(item, index) of posts" :key="index">
        <v-expansion-panel-header>
          <div>
            <span>Title: {{ item.title }}</span>
            <div>Body: {{ item.body }}</div>
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="text-center">Comments</div>
          <span>Add new comment:</span>
          <v-form ref="form">
            <v-text-field
              v-model="model.name"
              :rules="[rules.required]"
              label="Name"
              outlined
              dense
            >
            </v-text-field>
            <v-textarea
              v-model="model.comment"
              :rules="[rules.required]"
              label="Comment"
              outlined
              dense
            >
            </v-textarea>
            <v-btn color="success" @click="submit()"> Add comment </v-btn>
          </v-form>
          <div v-if="!isLoadingComments">
            <v-progress-circular
              indeterminate
              color="primary"
            ></v-progress-circular>
          </div>
          <div
            v-else
            v-for="(item, index) of comments"
            :key="index"
            class="comment"
          >
            <div>Name: {{ item.name }}</div>
            <div>Comment: {{ item.body }}</div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
}
.comment {
  margin: 20px 0;
}
</style>
