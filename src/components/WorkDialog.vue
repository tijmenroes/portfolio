<template>
    
      <v-card dark class="Work">
        <v-toolbar class="toolbar" color="none">
          <div class="backBtn">
              <div class="text-center" @click="$emit('close')">
                <v-btn class="text-none">
                  <v-icon>mdi-arrow-left</v-icon> Terug
                </v-btn>
              </div>
          </div>
        </v-toolbar>
        <v-container fluid>
          <v-col offset-xl="2" offset-lg="1" lg="10" >
            <v-btn
              v-for="tag in item.tags"
              :key="tag"
              depressed
              color="rgb(43, 48, 54)"
              class="text-none mr-2 mb-2"
              >{{ tag }}
            </v-btn>
          </v-col>
          <v-row>
            <v-col v-for="(entry, index) in item.content" :key="index" offset-xl="2" lg="10" offset-lg="1" sm="12">
              <h1 v-if="entry.title">
                {{ entry.title }}
              </h1>
              <div v-if="entry.type === 'text'">
                <p>
                  {{entry.text}}
                </p>
              </div>

              <div v-if="entry.type === 'largeText'">
                <p  v-for="(paragraph, index) in entry.text" :key="index">
                  {{paragraph}}
              </p>
              </div>

              <div v-if="entry.type === 'image'">
                <div class="imgContainer" :style="{ backgroundImage: `url(${ getImgUrl(entry.src) })` }" />
              </div>

              <div v-if="entry.type === 'video'">
                <video width="100%" height="auto" autoplay controls muted>
                <source
                  :src="getVidUrl(entry.src)"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              </div>
              
            </v-col>
          </v-row>
        </v-container>
      </v-card>
</template>

<script>
export default {
  name: "WorkDialog",

  props: {
    item: {
      type: Object,
      required: false
    },
  },

  methods: {
    getImgUrl(name) {
      const image = require(`@/assets/${name}.png`) 
      if (image) return image
      return null
    },

    getVidUrl(name) {
      const vid = require(`@/assets/${name}.mp4`) 
      if (vid) return vid
      return null
    },
  },
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
  height: 350px;
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
</style>

<style>

.Work::-webkit-scrollbar {
    width: 16px;
    height: 16px;
    background: blue;
}
</style>
