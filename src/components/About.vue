<template>
  <v-container fill-height class="containerDiv about">
    <v-row>
      <v-col xl="8" offset-xl="2" lg="10" offset-lg="1" xs="12">
        <v-container>
          <h1 class="display-4 font-weight-bold mt-5" v-scroll-reveal>
            About me<span>.</span>
          </h1>
          <p class="mt-5" v-scroll-reveal>
            Hoi! Ik ben Tijmen, ik ben 22 jaar oud en studeer momenteel ICT-media design op Fontys. 
          </p>
          <p v-scroll-reveal>
            Tijdens mijn tijd bij Fontys heb ik mijn passie voor front-end development gevonden. Ik vind het top om een product van begin af aan te designen, prototypen, testen en vervolgens te realiseren. Het is erg leuk om mensen jouw product zien te gebruiken.
          </p>
          <p v-scroll-reveal>
            Ik heb recent een tussenjaar genomen als Full-stack developer bij Coosto. Hier heb ik kennis leren te maken met backend development. Dit is iets wat ik zeker wil uitbreiden in mijn carrière.
          </p>
          <p v-scroll-reveal>
            Buiten school en werk, heb ik ook een normaal leven! In mijn vrije tijd ga ik graag naar de bioscoop, concerten en festival, en volg ik UFC met wat vrienden op de bank vergezeld met een paar biertjes. 
          </p>
        </v-container>
      </v-col>
      
    </v-row>
  </v-container>
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
</style>
