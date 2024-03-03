<template>
  <v-app class="main">
    <v-main>
      <v-toolbar color="transparent" class="elevation-0 mt-3">
        <v-col cols="12" offset-lg="8" offset-md="6" offset-sm="6">
          <h2 class="menuOption" @click="scrollTo(aboutPage)">About</h2>
          <h2 class="menuOption" @click="scrollTo(workPage)">Work</h2>
          <h2 class="menuOption" @click="scrollTo(contactPage)">Contact</h2>
        </v-col>
      </v-toolbar>
      <Landing ref="landingpage" @scroll="scrollTo(aboutPage)" />
      <div ref="aboutPage">
        <About id="aboutPage" />
      </div>
      <div ref="workPage">
        <Work />
      </div>
    </v-main>
    <div ref="contactPage">
      <Contact />
    </div>
  </v-app>
</template>

<script setup>
import Landing from "./components/Landing.vue";
import About from "./components/About.vue";
import Work from "./components/Work.vue";
import Contact from "./components/Contact.vue";
import { ref } from "vue";

const aboutPage = ref();
const workPage = ref(null);
const contactPage = ref(null);

function scrollTo(elem) {
  console.log(elem);
  elem.scrollIntoView({ behavior: "smooth" });
}
</script>

<style scoped>
.main {
  background: none;
}

.menuOption {
  color: white;
  transition: 0.4s;
  margin: 10px;
  display: inline-block;
  cursor: pointer;
}
.menuOption:hover {
  color: #fd413c;
}
/*
.scrollDisabled {
  overflow: hidden;
}*/
</style>
