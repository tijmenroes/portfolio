<template>
  <v-container >
    <v-col xl="8" offset-xl="2" lg="10" offset-lg="1" xs="12">
      <v-row>
        <v-col cols="8" class="mt-4">
          <v-container>
            <h1 class="display-4 font-weight-bold mt-5" v-scroll-reveal>Work<span>.</span></h1>
          </v-container>
        </v-col>
        <v-col cols="4"> </v-col>

        <v-col xs="12" sm="6" v-for="(proj, i) in work" :key="proj.title" v-scroll-reveal>
          <v-card
            class="workCard mx-auto"
            :class="proj.activeClass"
            color="#2B3036"
            @click="openModal(i)"
            
          >
            <!-- color?-->
            <v-container>
              <v-card-text>
                <span class="subtitle">{{ proj.company }}</span>
                <h2 class="display-1 projTitle" color="white">
                  {{ proj.title }}
                </h2>
              </v-card-text>
            </v-container>
            <div>
              <v-img :src="getImgUrl(proj.img)" contain />
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-dialog
      v-model="modal"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card dark v-if="pickedWork" >
        <v-toolbar class="toolbar" color="none">
          <div class="backBtn">
            <div  class="text-center" @click="closeModal">
              <v-icon>mdi-arrow-left</v-icon> Terug
            </div>
          </div>
        </v-toolbar>
        <v-container>
          <v-col offset-lg="1" lg="11">
            <v-btn
              v-for="(tag, i) in pickedWork.indepth.tags"
              :key="i"
              depressed
              color="rgb(43, 48, 54)"
              class="text-none mr-2 mb-2"
              >{{ tag }}
            </v-btn>
          </v-col>
          <v-row class="workSection">
            <v-col lg="3" offset-lg="1" sm="12" xs="12">
              <h1>Stakeholder</h1>
            </v-col>
            <v-col lg="6" sm="12" xs="12">
              <p>
                {{ pickedWork.indepth.stakeholder }}
              </p>
            </v-col>
          </v-row>
          <v-row class="workSection">
            <v-col lg="3" offset-lg="1" sm="12" xs="12">
              <h1>Omschrijving</h1>
            </v-col>
            <v-col lg="6" sm="12" >
              <p>
                {{ pickedWork.indepth.description }}
              </p>
            </v-col>
          </v-row>
          <v-row v-if="pickedWork.indepth.proces" class="workSection">
            <v-col lg="3" offset-lg="1" sm="12">
              <h1>Proces</h1>
            </v-col>
            <v-col lg="6" sm="12">
              <p v-for="(key, i) in pickedWork.indepth.proces" :key="i">
                {{ key }}
              </p>
            </v-col>
          </v-row>
        </v-container>

        <v-container fluid class="demoSection">
          <h1 class="text-center">Demo</h1>
          <v-container>
            <v-col lg="6" offset-lg="3" md="10" offset-md="1" xs="12" v-if="pickedWork.title">
            <video width="100%" height="auto" autoplay controls  muted >
            <source :src="getVidUrl(pickedWork.indepth.vid)" type="video/mp4">
            Your browser does not support the video tag.
            </video>  
            </v-col> 
            
          </v-container>
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    modal: false,
    projectId: null,
    pickedWork: null,
    work: [
      {
        id: 0,
        company: "The Cre8ion.Lab",
        title: "Reporting dashboard",
        desc: "Internship project for cre8ion.lab",
        lang: "Vue, UI",
        activeClass: "redCard",
        color: "#FD413C",
        img: "cre8ion3",
        indepth: {
          tags: ["2019", "Research", "Adobe XD", "Usertesting", "Vue"],
          stakeholder:
            "The Cre8ion.Lab is een reclamebureau uit ‘s-Hertogenbosch dat zich specialiseert in ICT, met name front-end development. ",
          description:
            "Door een bestaande tool die gemaakt is door cre8ion, kwam de vraag om hier een uitbreding uit te maken. Namelijk een tool die de antwoorden van de formulieren displayt en eventueel ook tot mooie grafiekjes worden omgezet. Dit werd dan ook mijn stageopdracht.",
          proces: [
"Mijn stage periode begon vooral met het oriënteren van de opdracht. Hiervoor onderzoek gedaan naar bestaande oplossingen die op de mijne lijken. Hieruit zijn nog twee onderzoeken gekomen en dit heeft uiteindelijk geleid tot het eerste prototype.",
"Nu de opdracht duidelijk was ben ik begonnen met het leren van het javascript framework 'Vue.js'. Dit was namelijk een requirement van het stage bedrijf. Na hiermee een aantal weken te hebben gewerkt heb ik een testomgeving opgezet. Op deze testomgeving kon ik allerlei plugins testen en de skills die ik met de tutorials had geleerd toepassen.",
" Deze twee eerste onderdelen hebben geleid tot het uiteindelijke product, dit ging gepaard met een tweede versie van het prototype en usertesten hierop. Nu was geïmplementeerd in het CMS-systeem van The Cre8ion.Lab, dat gaf ook wat zekerheid dat mijn product ook daadwerkelijk gebruikt zou worden."],
        vid: "cre8ion-demo"
        },
      },
      {
        id: 1,
        company: "PIDZ",
        title: "WijPIDZ platform",
        desc: "School project for PIDZ",
        lang: "Vue, Nodejs, UI",
        color: "#2170B0",
        activeClass: "blueCard",
        img: "pidz3",
        indepth: {
          tags: [
            "2020",
            "Research",
            "Adobe XD",
            "Usertesting",
            "Vue",
            "NodeJS",
          ],
          stakeholder: "PIDZ is een detacheringsbureau voor zorg zzp'ers.  ",
          description:
            "Uit een marktonderzoek door PIDZ is gebleken dat zij een 1-stop-shop willen opzetten, waar de zorgprofessionals als een community van gebruik kunnen maken. Zij hebben aan Fontys studenten ",
          proces: [
            "Het was de bedoeling dat dit een groepsproject zou worden, echter door de pandemie heb ik ervoor gekozen om alleen te werken. Hierdoor was er niet genoeg tijd om alle punten aan te pakken, daarom heb ik mij gefocust op het punt over 'Opleidingen volgen'. ",
            "Uiteindelijk heb ik een aantal onderzoeken gedaan naar functionaliteiten, usability en concurrenten. Deze hebben weer geleidt tot het eindproduct, een backend met NodeJS, en een front-end met Vue-cli.",
          ],
          vid: "pidz-demo"
        },
      },

      {
        id: 2,
        company: "Coosto",
        title: "Flatline Redesign ",
        activeClass: "blueCard",
        img: "flatline3",
        indepth: {
          tags: ["Adobe XD", "Usertesting", "Vue", "Django"],
          stakeholder: "Coosto is een bedrijf gevestigd in Eindhoven, één van de producten die zij verkopen is de Coosto social media tool.",
          description:
            "Ik heb een tijd voor Coosto in loondienst gewerkt, dit was één van de projecten waar ik aan gewerkt heb. Er was een bestaande flatline, deze werd gebruikt om bij te houden welke scripts en sites niet weer goed werkte. Er kwamen veel klachten vanuit het team over deze flatline, daarom is gevraagd om deze een complete redesign te geven.",
          proces: [
            "Dit project is gestart met een aantal meetings over de verwachtingen en aanpak. Vervolgens heb ik een prototype gemaakt met Adobe XD, deze heb ik voor gelegd aan de rest van het team. Met de feedback hiervan heb ik een prototype met Vue gemaakt. Na een aantal usertesten en wat kleine aanpassingen was de front-end klaar. ",
          ],
          vid: "flatline-demo"
        },
      },
      {
        id: 3,
        company: "Natuurlijk4pets",
        title: "Dierenwinkel webshop",
        activeClass: "greenCard",
        img: "n4pets3",
        indepth: {
          tags: ["2019", "Adobe XD", "Wordpress", "PHP"],
          stakeholder: "Natuurlijk4pets is begonnen als hobby door een stel uit Eindhoven. Zij hadden al veel ervaring  als hondenfokkers, en wouden deze kennis en connecties verder in zetten met hun eigen dierenwinkel.",
          description:
            "Ik hoorde via via dat dit stel een website nodig had, dus heb ik contact opgenomen. Daarna is aan mij gevraagd om de website van natuurlijk4pets op te zetten, met als requirements dat het met wordpress wordt gebouwd en de logo’s en kleuren worden gebruikt die zij vooraf hebben gekozen",
          proces: [
            "Na een aantal gesprekken met de eigenaren van Natuurlijk4pets heb ik een aantal stijlen laten zien hoe de website eruit zou kunnen zien. Uiteindelijk zijn we met de stijl gegaan die nu op de huidige site staat. Daarna heb ik wat kleine aanpassingen gedaan aan de website, dingen zoals het installeren en aanpassen van plugins of wat CSS veranderingen in de site.",
          ],
          vid: "n4pets-demo"
        },
      },
      {
        id: 4,
        company: "The Cre8ion.Lab",
        title: "Stage portfolio",
        activeClass: "redCard",
        img: "stage3",
        indepth: {
          tags: ["Vue"],
          stakeholder: "Dit portfolio is gemaakt voor Fontys om de oplevering van mijn stage proces in kaart te brengen.",
          description:
            "Om de stage te behalen, kreeg ik de keuze of ik een ouderwets stageverslag wou maken of een product portfolio. Ik heb voor de laatste gekozen. ",
        vid: "stageptf-demo"
        },
      },
      {
        id: 5,
        company: "Coosto",
        title: "Coosto Lunch hackathon",
        activeClass: "blueCard",
        img: "flatline3",
        indepth: {
          tags: ["2019", "Adobe XD"],
          stakeholder: "Coosto is een bedrijf gevestigd in Eindhoven, één van de producten die zij verkopen is de Coosto social media tool.",
          description:
            "Ik heb een tijd voor Coosto in loondienst gewerkt, dit was één van de projecten waar ik aan gewerkt heb.  Coosto had een hackathon georganiseerd waar werknemers zo’n 7 uur hadden om een project op te leveren. ",
          proces: [
            "Deze tijd heb ik gebruikt om verschillende interviews af te leggen met betrokkenen, en daarna een prototype met Adobe XD te maken.",
          ],
          vid: "lunch-demo"
        },
      },
    ],
  }),
  methods: {
    getImgUrl(name) {
      var images = require.context("./../assets/", false, /\.png$/);
      return images("./" + name + ".png");
    },
    getVidUrl(name) {
      var vids = require.context("./../assets/", false, /\.mp4$/);
      return vids("./" + name + ".mp4");
      // return "http://i367471.hera.fhict.nl/vids/" + name + ".mp4"
    },
    openModal(id) {
      this.pickedWork = this.work[id];
      this.modal = true;
    },
    closeModal() {
      this.pickedWork = null;
      this.modal = false;
    },
    onEnd() {
      // console.log(this.$refs.demovideo.currentTime)
      //  this.$refs.demovideo.pause()
      // this.$refs.demovideo.currentTime  = 0;
      // this.$refs.demovideo.ended  =  false;

      // this.$refs.demovideo.play()
    }

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
.workSection {
  margin-top: 5%;
}
.demoSection {
  padding: 60px 0px;
  background: #101214;
}

.backBtn {
  top: 3%;
  left: 3%;
}
.toolbar {
  position:fixed; 
  background: none !important;
  box-shadow: none !important;
}
.projTitle {
  font-size: 1.5rem !important;
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
.greenCard:hover {
  background: #07b042 !important;
}
.subtitle {
  color: white;
  opacity: 0.5;
  font-size: 12px;
  font-family: "Gilroy" !important;
}
</style>
