<template>
  <v-app style="background:none; height: 100vh;" :class="{ scrollDisabled: scrollDisabled }">
    <v-main>
      <!--<SideBar /> -->
      <v-toolbar color="transparent" class="elevation-0 mt-3">
        <v-col cols="12"  offset-lg="8" offset-md="6" offset-sm="6">
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
      <Landing  ref="landingpage" @scroll="$vuetify.goTo($refs.aboutpage)"/>
      <About  ref="aboutpage" />
      <Work  ref="workpage" @modalOpen="scrollDisabled = true" @modalClose="scrollDisabled = false"/>
    </v-main>
    <Contact  ref="contactpage"/>
  </v-app>
</template>

<script>
import Landing from "./components/Landing";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default {
  name: "App",

  components: {
    Landing,
    About,
    Work,
    Contact,
  },

  data () {
    return {
      scrollDisabled: false
    }
  }
};
</script>

<style>
body,
html {
  background: #212529;
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
/*
.scrollDisabled {
  overflow: hidden;
}*/
</style>
