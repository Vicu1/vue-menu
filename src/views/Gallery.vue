<script>
export default {
  name: "Gallery",
  data: () => ({
    model: null,
    file: null,
    currentImg: 0,
    images: [
      { src: require("@/assets/bg1.jpeg") },
      { src: require("@/assets/bg2.jpeg") },
      { src: require("@/assets/bg3.jpeg") },
      { src: require("@/assets/bg1.jpeg") },
      { src: require("@/assets/bg2.jpeg") },
      { src: require("@/assets/bg3.jpeg") },
      { src: require("@/assets/bg1.jpeg") },
      { src: require("@/assets/bg2.jpeg") },
      { src: require("@/assets/bg3.jpeg") },
    ],
  }),

  methods: {
    toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    },
    async addFile() {
      this.images.push({ src: await this.toBase64(this.file) });
      this.file = null;
    },
    changeImg(index) {
      this.currentImg = index;
    },
    deleteImg(index) {
      this.images.splice(index, 1);
      if (this.images.length === 0) {
        console.log('hi');
      }
    },
  },
};
</script>

<template>
  <div>
    <v-sheet class="mx-auto mt-5" elevation="8" max-width="800">
      <v-expand-transition>
        <v-sheet  width="90%" class="mx-auto" tile>
          <v-row class="fill-height pt-4" align="center" justify="center">
            <div v-if="(this.images.length <= 0)">
              Gallery is empty
            </div>
            <v-img
              v-else
              height="400"
              :src="images[currentImg]"
              justify="center"
            ></v-img>
          </v-row>
        </v-sheet>
      </v-expand-transition>
      <v-slide-group v-model="model" class="pa-4" show-arrows mandatory>
        <v-slide-item
          v-for="(item, index) of images"
          :key="index"
          v-slot="{ active, toggle }"
        >
          <v-card class="ma-4" @click="changeImg(index)">
            <v-img
              :src="item.src"
              width="200"
              height="200"
              @click="toggle(index)"
            >
              <v-row class="fill-height">
                <v-scale-transition style="position: relative">
                  <v-icon
                    class="icon"
                    v-if="active"
                    color="white"
                    @click="deleteImg(index)"
                    v-text="'mdi-close-circle-outline'"
                  ></v-icon>
                </v-scale-transition>
              </v-row>
            </v-img>
          </v-card>
        </v-slide-item>
      </v-slide-group>
      <div class="d-flex input">
        <v-file-input
          v-model="file"
          accept="image/*"
          label="Image"
          prepend-icon="mdi-camera"
        ></v-file-input>
        <v-btn color="primary" elevation="7" large @click="addFile()">
          Load Image</v-btn
        >
      </div>
    </v-sheet>
  </div>
</template>

<style scoped>
.input {
  max-width: 600px;
  margin: 0 auto;
}
.icon {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
