<template>
  <div>
    <v-col xl="8" offset-xl="2" lg="10" offset-lg="1" xs="12">
      <v-row>
        <v-container>
          <v-col cols="8" class="mt-4">
            <h1 class="display-4 font-weight-bold mt-5" vf>
              Work<span>.</span>
            </h1>
          </v-col>
          <v-col cols="4"> </v-col>
        </v-container>
      </v-row>
    </v-col>

    <div class="scrollContainer" ref="scrollContainer">
      <v-card
        v-for="(proj, i) in workConfig"
        :key="i"
        class="workCard panel"
        :class="proj.activeClass"
        color="#2B3036"
        @click="openModal(i)"
      >
        <v-container>
          <v-card-text>
            <span class="subtitle">{{ proj.company }}</span>
            <h2 class="display-1 projTitle" color="white">
              {{ proj.title }}
            </h2>
          </v-card-text>
        </v-container>
        <div
          class="imgContainer"
          :style="{ backgroundImage: `url(${getImgUrl(proj.img)})` }"
        />
      </v-card>
    </div>
  </div>

  <v-dialog
    v-model="modal"
    v-if="modal"
    class="workDialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <WorkDialog :item="pickedWork.dialog" @close="closeModal" />
  </v-dialog>
</template>

<script setup>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ref, onMounted, watch } from "vue";
import workConfig from "../config/work";
import { getImgUrl } from "../utils";
import WorkDialog from "./WorkDialog.vue";

gsap.registerPlugin(ScrollTrigger);

const scrollContainer = ref();

onMounted(() => {
  let sections = gsap.utils.toArray(".panel");
  console.log(sections);
  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".scrollContainer",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      end: () => "+=" + scrollContainer.value.offsetWidth,
      // base vertical scrolling on how wide the container is so it feels more natural.
      // end: "+=3500",
    },
  });
});
const emit = defineEmits(["modalOpen", "modalClose"]);
const modal = ref(false);
const projectId = ref(null);
const pickedWork = ref(null);
function openModal(id) {
  pickedWork.value = workConfig[id];
  modal.value = true;
}
function closeModal() {
  pickedWork.value = null;
  modal.value = false;
}

watch(modal, (val) => {
  if (val) emit("modalOpen");
  else emit("modalClose");
});
</script>

<style scoped>
.scrollContainer {
  width: max-content !important;
  height: 50vh;
  display: flex;
  flex-wrap: nowrap;
  padding-top: 100px;
}

.firstContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: yellow;
}

.panel {
  margin: 0 24px;
  width: 500px;
  /* height: 50vh; */
  color: white;
}

.blue {
  background: blue;
}

.orange {
  background: orange;
}

.red {
  background: red;
}

.purple {
  background: green;
}

.lastContainer {
  display: flex;
  height: 100vh;
  background: yellow;
}

/* old */

h1 {
  color: #fd413c;
}
h1 span {
  font-size: 14vh;
}
p {
  color: white;
  opacity: 0.9;
  font-size: 24px;
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
.workSection {
  margin-top: 2%;
}
.demoSection {
  padding: 60px 0px;
  background: #101214;
}

.backBtn {
  top: 3%;
  left: 3%;
}
.toolbar {
  position: fixed;
  background: none !important;
  box-shadow: none !important;
  z-index: 999;
}
.projTitle {
  font-size: 1.5rem !important;
  color: white;
  font-weight: bold;
}
.workCard {
  transition: 0.4s;
  overflow: hidden;
}
.workCard:hover .imgContainer {
  transform: scale(1.3);
  overflow: hidden;
}
.imgContainer {
  transition: 0.4s;
  height: 150px;
  width: 100%;
  background-size: contain;
  background-position: center;
  background-overflow: hidden;
}
.redCard:hover {
  background: #fd413c !important;
}
.blueCard:hover {
  background: #2170b0 !important;
}
.greenCard:hover {
  background: #07b042 !important;
}

.orangeCard:hover {
  background: #fdb63c !important;
}
.subtitle {
  color: white;
  opacity: 0.5;
  font-size: 12px;
  /* font-family: "Gilroy" !important; */
}

::-webkit-scrollbar {
  width: 16px;
  height: 16px;
}
</style>
