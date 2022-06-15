<template>
  <v-container class="Work">
    <v-col xl="8" offset-xl="2" lg="10" offset-lg="1" xs="12">
      <v-row>
        <v-col cols="8" class="mt-4">
          <v-container>
            <h1 class="display-4 font-weight-bold mt-5" vf>
              Work<span>.</span>
            </h1>
          </v-container>
        </v-col>
        <v-col cols="4"> </v-col>

        <v-col
          xs="12"
          sm="6"
          v-for="(proj, i) in work"
          :key="i"
          v-scroll-reveal
        >
          <v-card
            class="workCard mx-auto"
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
            <div class="imgContainer" :style="{ backgroundImage: `url(${ getImgUrl(proj.img) })` }" />
          </v-card>
        </v-col>
      </v-row>
    </v-col>

    <v-dialog
      v-model="modal"
      v-if="modal"
      class="workDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <WorkDialog :item="pickedWork.dialog" @close="closeModal"/>

    </v-dialog>
    
  </v-container>
</template>

<script>
import WorkDialog from './WorkDialog'
import workConfig from '@/config/work'

export default {
  name: "Work",

  components: {
    WorkDialog
  },

  data: () => ({
    modal: false,
    projectId: null,
    pickedWork: null,
  }),

  computed: {
    work () {
      return workConfig
    }
  },
  methods: {
    getImgUrl(name) {
      const image = require(`@/assets/${name}.png`) 
      if (image) return image
      return null
    },

    openModal(id) {
      this.pickedWork = this.work[id];
      this.modal = true;
    },
    closeModal() {
      this.pickedWork = null;
      this.modal = false;
    },
  },
  watch: {
    modal (value) {
      if (value) this.$emit('modalOpen')
      else this.$emit('modalClose')
    }
  }
};
</script>

<style scoped>
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
.workCard:hover .imgContainer  {
  transform: scale(1.3);
  overflow:hidden;
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
.subtitle {
  color: white;
  opacity: 0.5;
  font-size: 12px;
  font-family: "Gilroy" !important;
}

::-webkit-scrollbar {
    width: 16px;
    height: 16px;
}
</style>

<style>


/* Scroll 5 */
.v-dialog::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.v-dialog::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
}
.v-dialog::-webkit-scrollbar-thumb {
  background: #fd413c;
  border-radius: 10px;
	-webkit-box-shadow: rgba(0,0,0,.12) 0 3px 13px 1px;
}
</style>
