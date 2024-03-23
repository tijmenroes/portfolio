<template>
  <div>
    <v-container fill-height class="containerDiv landingPage">
      <v-row class="info">
        <v-col
          xl="6"
          offset-xl="2"
          lg="8"
          offset-lg="1"
          md="8"
          xs="12"
          class="mt-4"
        >
          <v-container>
            <h1 class="text-h1 font-weight-bold mt-5" v-scroll-reveal>
              Tijmen Roes
            </h1>
            <p class="mt-5 text-h3" v-scroll-reveal>Developer, UX Designer</p>
          </v-container>
        </v-col>
        <v-col xl="3" lg="3" md="3" class="hidden-sm-and-down">
          <div>
            <v-img :src="getImgUrl('me')" />
          </div>
        </v-col>
      </v-row>
      <v-btn
        class="scrollButton"
        large
        icon
        color="white"
        @click="emit('scroll')"
      >
        <v-icon x-large>mdi-arrow-down-thin</v-icon>
      </v-btn>
    </v-container>
  </div>
</template>

<script setup>
import { getImgUrl } from "../utils";

const emit = defineEmits(["scroll"]);
const red = "90px";
</script>

<style scoped>
h1 {
  color: #fd413c;
}

p {
  color: #febc2c;
}
.scrollButton {
  left: 50%;
  margin: 0 auto 0 auto;
}
.scrollButton:hover {
  background: #fd413c !important;
  color: white;
  transition: 0.3s;
}
.red-sphere {
  width: 80px;
  height: 80px;
  background: #fd413c;
  border-radius: 50%;
  transition: 0.5s;
  transition-timing-function: ease-in-out;
  position: absolute;
}

.info {
  height: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* padding: 100px 0; */
}

.landingPage {
  height: 80vh;
}
</style>
