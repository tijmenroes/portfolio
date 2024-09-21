<template>
  <div class="containerDiv landingPage">
    <v-container fill-height class="container">
      <v-row class="info">
        <v-col
          xl="6"
          offset-xl="2"
          lg="8"
          offset-lg="1"
          md="8"
          xs="12"
          class="mt-4"
        >
          <v-container>
            <HeadingComponent
              class="name"
              title="Hey, Ik ben Tijmen Roes"
              heading-type="h1"
              :idx="0"
            />
            <div data-aos="fade" data-aos-delay="1200">
              <p class="function mt-5 text-h4 font-weight-bold">
                Full-stack <span>developer</span>
              </p>
            </div>
            <v-btn
              color="primary"
              class="elevation-0 mt-5"
              data-aos="fade"
              data-aos-delay="1800"
              @click="emit('scroll')"
            >
              Bekijk projecten
            </v-btn>
          </v-container>
        </v-col>
        <v-col cols="12" xl="3" lg="3" md="4">
          <div>
            <v-img :src="getImgUrl('me', 'jpeg')" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import HeadingComponent from "./HeadingComponent.vue";
import { getImgUrl } from "../utils";

const emit = defineEmits(["scroll"]);
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.sass";
.scrollButton {
  left: 50%;
  margin: 0 auto 0 auto;
}
.scrollButton:hover {
  background: #fd413c !important;
  color: white;
  transition: 0.3s;
}

.info {
  height: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* padding: 100px 0; */
}

.v-img {
  border-radius: 16px;
  width: 100%;
  height: 100%;
}

.function {
  span {
    color: $primary;
  }
}

.landingPage {
  display: flex;
  background: $grey;
  min-height: 75vh;
}

:deep(.name) {
  span:nth-child(4) span {
    color: $primary;
  }
}

@media (max-width: 600px) {
  .info {
    height: unset;
    flex-direction: column-reverse;
  }
}
</style>
