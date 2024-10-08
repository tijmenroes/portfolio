import { createApp } from "vue";
import App from "./App.vue";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import AOS from "aos";
import "aos/dist/aos.css";
import "@mdi/font/css/materialdesignicons.css";
import "./assets/styles/main.scss";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).use(AOS).mount("#app");
