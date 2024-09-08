<template>
  <div>
    <v-app class="main">
      <v-main>
        <v-toolbar color="transparent" class="mt-3">
          <v-col cols="12" offset-lg="8" offset-md="6" offset-sm="6">
            <h2 class="menuOption" @click="scrollTo(aboutPage)">Over mij</h2>
            <h2 class="menuOption" @click="scrollTo(workPage)">Werk</h2>
            <h2 class="menuOption" @click="scrollTo(contactPage)">Contact</h2>
          </v-col>
        </v-toolbar>
        <div class="landingContainer">
          <Landing ref="landingpage" @scroll="scrollTo(workPage)" />
        </div>
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
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Landing from "./components/Landing.vue";
import About from "./components/About.vue";
import Work from "./components/Work.vue";
import Contact from "./components/Contact.vue";
import { ref } from "vue";
import AOS from "aos";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollToPlugin from "gsap/ScrollToPlugin";

const aboutPage = ref();
const workPage = ref(null);
const contactPage = ref(null);
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

AOS.init({
  once: true,
});

onMounted(() => {
  ScrollSmoother.create({
    smooth: 1.2, // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true, // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  });
});

function scrollTo(elem) {
  gsap.to(window, {
    duration: 1,
    scrollTo: elem,
    ease: "power4.inOut",
  });
  // elem.scrollIntoView();
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.sass";

.v-toolbar {
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
}

.menuOption {
  font-size: 1.2rem;
  transition: 0.4s;
  font-weight: normal;
  margin: 22px;
  display: inline-block;
  cursor: pointer;
}
.menuOption:hover {
  color: $primary;
}
.landingContainer {
  /* overflow: hidden; */
}
/*
.scrollDisabled {
  overflow: hidden;
}*/
</style>
