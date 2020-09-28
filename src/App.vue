<template>
  <v-app style="background:none">
    <v-main>
      <!--<SideBar /> -->

      <Landing />
      <About />
      <Work/>
      
    </v-main>
    <Contact/>
  </v-app>
</template>

<script>
import Landing from "./components/Landing";
// import SideBar from "./components/SideBar";

import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact"
export default {
  name: "App",

  components: {
    Landing,
    // SideBar,
    About,
    Work,
    Contact
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
  height: 1000px;
}
</style>
