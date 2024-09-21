<template>
  <v-card dark class="WorkDialog Work">
    <div class="backBtn">
      <v-btn class="text-none" color="transparent" icon @click="emit('close')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <v-container class="contentContainer">
      <v-chip
        v-for="tag in item.tags"
        :key="tag"
        label
        light
        size="large"
        color="white"
        class="mr-2 mt-5"
      >
        {{ tag }}
      </v-chip>

      <div
        v-for="(entry, index) in item.content"
        :key="index"
        :class="[entry.type]"
      >
        <p v-if="entry.title" class="title">
          {{ entry.title }}
        </p>
        <div v-if="entry.type === 'text'">
          <p>
            {{ entry.text }}
          </p>
        </div>

        <div v-if="entry.type === 'largeText'">
          <p v-for="(paragraph, index) in entry.text" :key="index">
            {{ paragraph }}
          </p>
        </div>

        <div v-if="entry.type === 'image'">
          <div
            class="imgContainer"
            :style="{ backgroundImage: `url(${getImgUrl(entry.src)})` }"
          />
        </div>

        <div v-if="entry.type === 'video'" class="videoContainer">
          <video width="100%" height="auto" autoplay controls muted>
            <source :src="getVidUrl(entry.src)" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div v-else-if="entry.type === 'button'" class="videoContainer">
          <v-btn
            :href="entry.link"
            target="_blank"
            color="white"
            :label="entry.text"
            class="mt-5"
          >
            {{ entry.text }}
          </v-btn>
        </div>
      </div>
    </v-container>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { getImgUrl, getVidUrl } from "../utils";

const props = defineProps({
  item: {
    type: Object,
    required: false,
  },
});

const emit = defineEmits(["close"]);
</script>

<style scoped>
.contentContainer {
  margin-bottom: 120px;
}

.title {
  font-weight: bold;
}

p {
  color: white;
  opacity: 0.9;
  font-size: 1.6rem;
  margin: 2.4rem 0;
}

.text {
  width: 66%;
}

.workSection {
  margin-top: 2%;
}

.backBtn {
  top: 20px;
  right: 20px;
  color: white;
  position: fixed;
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
  height: 350px;
  width: 100%;
  background-size: contain;
  background-position: center;
  background-overflow: hidden;
}

.videoContainer {
  width: 100%;
}

.subtitle {
  color: white;
  opacity: 0.5;
  font-size: 12px;
  /* font-family: "Gilroy" !important; */
}

.WorkDialog {
  background: black;
}

@media (max-width: 768px) {
  .text {
    width: 100%;
  }
}
</style>

<style>
.Work::-webkit-scrollbar {
  /* width: 16px; */
  /* height: 16px; */
  /* background: blue; */
}
</style>
