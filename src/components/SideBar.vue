<template>
  <div>
    <v-container class="side-container">
      <v-row>
        <v-col cols="2">
          <h3 class="pa-5" v-for="page in pages" :key="page">
            {{ page }}
          </h3>
        </v-col>
        <v-col cols="3">
          <!--<v-progress-linear
            v-model="valueDeterminate"
            width="15"
            color="yellow accent-4"
            class="progress-bar"
          ></v-progress-linear> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: ["Landing", "About me", "Work"],
    };
  },
};
</script>

<style scoped>
.side-container {
  position: fixed;
  top: 50%;
}
.side-container h3 {
  font-size: 23px;
  color: white;
}
.progress-bar {
  transform: rotate(90deg);
}
</style>
