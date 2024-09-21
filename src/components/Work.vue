<template>
  <div class="workPage">
    <v-col xl="8" offset-xl="2" lg="10" offset-lg="1" xs="12">
      <v-row>
        <v-container>
          <v-col cols="8" class="mt-4">
            <HeadingComponent title="Werk" heading-type="h1" :idx="2" />
          </v-col>
        </v-container>
      </v-row>
    </v-col>

    <v-col xl="8" offset-xl="2" lg="10" offset-lg="1" xs="12">
      <v-row>
        <v-col cols="12" lg="6" sm="6" v-for="(proj, i) in workConfig" :key="i">
          <div
            class="workCard panel"
            :class="proj.activeClass"
            @click="openModal(i)"
          >
            <v-container>
              <div class="visual" data-aos="fade-up">
                <v-img
                  :src="getImgUrl(proj.img)"
                  class="img"
                  @click="openModal(i)"
                />
              </div>
            </v-container>
            <v-container>
              <v-card-text>
                <!-- <span class="subtitle">{{ proj.company }}</span> -->
                <h2 class="display-1 projTitle" color="white">
                  {{ proj.title }}
                </h2>
              </v-card-text>
            </v-container>
          </div>
        </v-col>
      </v-row>
    </v-col>

    <!-- Maybe for later, for now only 4 proj. -->
    <!-- <div class="buttonContainer">
      <v-btn
        class="showAllButton"
        rounded
        color="primary"
        @click="scrollTo(landingPage)"
      >
        Bekijk alle projecten
      </v-btn>
    </div> -->
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
import { ref, onMounted, watch } from "vue";
import workConfig from "../config/work";
import { getImgUrl } from "../utils";
import WorkDialog from "./WorkDialog.vue";
import HeadingComponent from "./HeadingComponent.vue";

const scrollContainer = ref();

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

<style scoped lang="scss">
@import "@/assets/styles/variables.sass";

.workPage {
  // background: $grey;
}

.showAllButton {
  text-transform: none;
}

.panel {
  // margin: 0 24px;
  width: 100%;
}

.v-card-text {
  padding-top: 0;
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
  font-weight: bold;
}
.workCard {
  cursor: pointer;
  margin: 12px;
  transition: 0.4s;
  overflow: hidden;
}

.visual {
  height: 250px;
  width: 100%;
  background: $grey;
  overflow: hidden;
  border-radius: 16px;
  position: relative;

  .img {
    position: absolute;
    bottom: 0;
    width: 100%;
    border-radius: 16px;
    transition: 0.4s;

    &:hover {
      transform: scale(1.1);
    }
  }
}

.subtitle {
  opacity: 0.5;
  font-size: 12px;
  /* font-family: "Gilroy" !important; */
}

::-webkit-scrollbar {
  width: 16px;
  height: 16px;
}

@media (max-width: 768px) {
  .workCard {
    margin: 0;
  }
  .visual {
    height: 150px;
  }
}
</style>
