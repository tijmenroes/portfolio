<template>
  <div>
    <v-toolbar color="transparent" class="elevation-0">
        <v-col cols="6" offset-lg="8">
          <h2 @click="$vuetify.goTo('about')">
            About
          </h2>
          <h2>
            Work
          </h2>
          <h2>
            Contact
          </h2>
        </v-col>
    </v-toolbar>
    <v-container fill-height class="containerDiv">
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
        <v-col xl="2" lg="1" sm="3">
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
    changeSize() {
      if (this.red === "90px") {
        this.red = "84px";
      } else {
        this.red = "90px";
      }
    },
  },
  created() {
    console.log("starting");
    // var vm = this;
    setInterval(function() {
      // console.log("jajaja");
      // vm.changeSize()
    }, 3000);
  },
};
</script>

<style scoped>
h1 {
  color: #fd413c;
}
h2 {
  color: white;
  transition: 0.4s;
  margin: 10px;
  display: inline-block;
}
h2:hover {
  color: red
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
</style>
