<template>
  <div>

    <v-container fill-height class="containerDiv landingPage">
      <v-row>
        <v-col xl="6" offset-xl="2" lg="8" offset-lg="1" xs="12" class="mt-4">
          <v-container>
            <h1 class="display-4 font-weight-bold mt-5" v-scroll-reveal>
              Tijmen Roes
            </h1>
            <p class="mt-5 display-1" v-scroll-reveal>
              Developer, UX Designer
            </p>
          </v-container>
        </v-col>
        <v-col xl="3" lg="3" sm="3" class="hidden-sm-and-down">
          <div>
            <v-img v-scroll-reveal src="./../assets/me.png" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    red: "90px",
  }),
  methods: {

  },
};
</script>

<style scoped>
h1 {
  color: #fd413c;
}

p {
  color: #febc2c;
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

.landingPage {
  height: 1000px;
}
</style>
