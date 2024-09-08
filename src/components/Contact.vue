<template>
  <div class="demoSection">
    <v-container>
      <v-col xl="8" offset-xl="2" lg="10" offset-lg="1" offset-xs="0">
        <HeadingComponent title="Contact" heading-type="h1" :idx="3" />
        <div class="mt-10">
          <v-row>
            <div
              v-for="contact in contacts"
              :key="contact.icon"
              class="workCard contactCard"
            >
              <div
                :class="contact.class"
                dark
                :href="contact.href"
                data-aos="fade-up"
              >
                <div class="text-center">
                  <v-icon class="text-center icon" x-large color="white" dark>{{
                    contact.icon
                  }}</v-icon>
                </div>
              </div>
            </div>
          </v-row>
        </div>
      </v-col>
    </v-container>
  </div>
</template>

<script setup>
import HeadingComponent from "./HeadingComponent.vue";
// import { ref } from "vue";
const contacts = [
  {
    icon: "mdi-email",
    text: "Verdere vragen of interesse? <br/> Stuur gerust een mailtje!",
    class: "redCard",
    href: "mailto:tijmen.roes@hotmail.com",
  },
  {
    icon: "mdi-linkedin",
    text: "Let's connect!",
    class: "blueCard",
    href: "https://www.linkedin.com/in/tijmen-roes-11020a161/",
  },
  {
    icon: "mdi-github",
    text: "Let's connect!",
    class: "blueCard",
    href: "https://github.com/tijmenroes",
  },
];
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.sass";

.demoSection {
  padding: 60px 0px;
  color: white;
  background: black;
}

.icon {
  font-size: 48px;
}
h1 span {
  font-size: 14vh;
}
.projTitle {
  font-size: 1.25rem !important;
  color: white;
  font-weight: bold;
}
.contactCard {
  transition: 0.4s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin: 0 12px;
  border-radius: 8px;
  cursor: pointer;
}
.contactCard:hover {
  background: $primary !important;
}
</style>
