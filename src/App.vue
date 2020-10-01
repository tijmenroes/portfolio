<template>
  <v-app style="background:none">
    <v-main>
      <!--<SideBar /> -->
      <v-toolbar color="transparent" class="elevation-0 mt-3">
        <v-col xs="6"  offset-lg="8" offset-sm="3">
          <h2 class="menuOption" @click="$vuetify.goTo($refs.aboutpage)">
            About
          </h2>
          <h2 class="menuOption" @click="$vuetify.goTo($refs.workpage)">
            Work
          </h2>
          <h2 class="menuOption" @click="$vuetify.goTo($refs.contactpage)">
            Contact
          </h2>
        </v-col>
      </v-toolbar>
      <Landing  ref="landingpage"/>
      <About  ref="aboutpage" />
      <Work  ref="workpage" />
    </v-main>
    <Contact  ref="contactpage"/>
  </v-app>
</template>

<script>
import Landing from "./components/Landing";
// import SideBar from "./components/SideBar";

import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
export default {
  name: "App",

  components: {
    Landing,
    // SideBar,
    About,
    Work,
    Contact,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
body,
html {
  background: #212529;
}
.containerDiv {

   padding-bottom: 200px;
}
.menuOption {
  color: white;
  transition: 0.4s;
  margin: 10px;
  display: inline-block;
  cursor: pointer;
}
.menuOption:hover {
  color: #fd413c;
}
</style>
