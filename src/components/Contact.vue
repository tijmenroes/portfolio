<template>
  <div class="demoSection">
    
    <v-container >
      <v-col xl="8" offset-xl="2" lg="10" offset-lg="1" offset-xs="0">
        <v-container>
          <h1 class="display-3 font-weight-bold mt-5" v-scroll-reveal>
            Contact<span>.</span>
          </h1>
        </v-container>
        <div>
        
        
          <v-row>
            <v-col
              cols="12"
              sm="6"
              v-for="contact in contacts"
              :key="contact.icon"
            >
              <v-card
                class="workCard mx-auto"
                color="#2B3036"
                :class="contact.class"
                min-height="250"
                dark
                :href="contact.href"
                v-scroll-reveal
              >
                <div class="text-center ">
                  <v-icon
                    class="text-center icon"
                    x-large
                    color="white"
                    dark
                    >{{ contact.icon }}</v-icon
                  >
                </div>
                <p
                  class="text-center projTitle pa-5 mb-0"
                  v-html="contact.text"
                ></p> 
              
              </v-card>
            </v-col>
          </v-row>
          </div>
      </v-col>
    </v-container>
    </div>
</template>

<script>
export default {
  data: () => ({
    contacts: [
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
    ],
  })
};
</script>

<style scoped>
.demoSection {
  padding: 60px 0px;
  background: #101214;
  color: white;
}
h1 {
  color: #fd413c;
}
h1 span {
  font-size: 14vh;
}
.projTitle {
  font-size: 1.25rem !important;
  /* text-transform: uppercase;*/
  color: white;
  font-weight: bold;
  /*font-family: 'Gilroy' !important;*/
}
.workCard {
  transition: 0.4s;
}
.redCard:hover {
  background: #fd413c !important;
}
.blueCard:hover {
  background: #2170b0 !important;
}
.icon {
  margin-top:50px;
  position: relative;
}
</style>
