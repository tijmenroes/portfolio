<template>
  <v-container class="containerDiv about">
    <v-row>
      <v-col xl="8" offset-xl="2" lg="10" offset-lg="1" xs="12">
        <v-container>
          <v-container>
            <HeadingComponent title="Over mij" heading-type="h1" :idx="1" />
          </v-container>

          <v-row class="mt-5">
            <v-col cols="12" lg="8">
              <div class="container">
                <h2 data-aos="fade">Info</h2>
                <p class="mt-5" data-aos="fade">
                  Hoi! Ik ben Tijmen, ik ben {{ yearsOld }} jaar oud en woon in
                  Eindhoven.
                </p>
                <p data-aos="fade">
                  Ik ben een full-stack developer met een passie voor front-end.
                  Ik vind het geweldig om een product van begin af aan te
                  designen, prototypen, testen en vervolgens te realiseren. Het
                  is vooral tof om te zien hoe eindgebruikers met het product
                  omgaan dat jij gebouwd hebt.
                </p>
                <p data-aos="fade">
                  In mijn vrije tijd houd ik van reizen, sporten en volg ik
                  graag de UFC. Verder ben ik graag in de natuur met mijn hond
                  Aiko.
                </p>
              </div>
            </v-col>

            <v-col cols="12" lg="4">
              <div class="container" id="aboutDiv" data-aos="fade">
                <h2>Skills</h2>
                <div data-aos="fade">
                  <v-chip
                    v-for="skill in skills"
                    :key="skill"
                    label
                    size="large"
                    class="mr-2 mt-5"
                  >
                    {{ skill }}
                  </v-chip>
                </div>
              </div>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.06561801,18.9432081 L14.565618,4.44320807 C14.7350545,4.06523433 15.1788182,3.8961815 15.5567919,4.06561801 C15.9032679,4.2209348 16.0741922,4.60676263 15.9697642,4.9611247 L15.934382,5.05679193 L9.43438199,19.5567919 C9.26494549,19.9347657 8.82118181,20.1038185 8.44320807,19.934382 C8.09673215,19.7790652 7.92580781,19.3932374 8.03023576,19.0388753 L8.06561801,18.9432081 L14.565618,4.44320807 L8.06561801,18.9432081 Z M2.21966991,11.4696699 L6.46966991,7.21966991 C6.76256313,6.9267767 7.23743687,6.9267767 7.53033009,7.21966991 C7.79659665,7.48593648 7.8208027,7.90260016 7.60294824,8.19621165 L7.53033009,8.28033009 L3.81066017,12 L7.53033009,15.7196699 C7.8232233,16.0125631 7.8232233,16.4874369 7.53033009,16.7803301 C7.26406352,17.0465966 6.84739984,17.0708027 6.55378835,16.8529482 L6.46966991,16.7803301 L2.21966991,12.5303301 C1.95340335,12.2640635 1.9291973,11.8473998 2.14705176,11.5537883 L2.21966991,11.4696699 L6.46966991,7.21966991 L2.21966991,11.4696699 Z M16.4696699,7.21966991 C16.7359365,6.95340335 17.1526002,6.9291973 17.4462117,7.14705176 L17.5303301,7.21966991 L21.7803301,11.4696699 C22.0465966,11.7359365 22.0708027,12.1526002 21.8529482,12.4462117 L21.7803301,12.5303301 L17.5303301,16.7803301 C17.2374369,17.0732233 16.7625631,17.0732233 16.4696699,16.7803301 C16.2034034,16.5140635 16.1791973,16.0973998 16.3970518,15.8037883 L16.4696699,15.7196699 L20.1893398,12 L16.4696699,8.28033009 C16.1767767,7.98743687 16.1767767,7.51256313 16.4696699,7.21966991 Z"
                  id="house"
                  stroke="black"
                  stroke-width="0.4"
                ></path>
              </svg>

              <!-- <img src="@/assets/icons/code.svg" id="code" /> -->

              <!-- <img src="@/assets/icons/javascript.svg" id="javascript" /> -->
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted } from "vue";
import HeadingComponent from "./HeadingComponent.vue";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin);

function startAnimation() {
  let paths = splitPaths("#house");
  let duration = 3,
    distance = 0,
    tl = gsap.timeline();
  paths.forEach((segment) => (distance += segment.getTotalLength()));
  paths.forEach((segment) => {
    tl.from(segment, {
      drawSVG: 0,
      ease: "none",
      duration: duration * (segment.getTotalLength() / distance),
    });
  });
}

// helper function that busts apart a single <path> that has multiple segments into a <path> for each segment (indicated by an "M" command);
function splitPaths(paths) {
  let toSplit = gsap.utils.toArray(paths),
    newPaths = [];
  if (toSplit.length > 1) {
    toSplit.forEach((path) => newPaths.push(...splitPaths(path)));
  } else {
    let path = toSplit[0],
      rawPath = MotionPathPlugin.getRawPath(path),
      parent = path.parentNode,
      attributes = [].slice.call(path.attributes);
    newPaths = rawPath.map((segment) => {
      let newPath = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        ),
        i = attributes.length;
      while (i--) {
        newPath.setAttributeNS(
          null,
          attributes[i].nodeName,
          attributes[i].nodeValue
        );
      }
      newPath.setAttributeNS(
        null,
        "d",
        "M" +
          segment[0] +
          "," +
          segment[1] +
          "C" +
          segment.slice(2).join(",") +
          (segment.closed ? "z" : "")
      );
      parent.insertBefore(newPath, path);
      return newPath;
    });
    parent.removeChild(path);
  }
  return newPaths;
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.unobserve(entry.target); // Stop observing after animation starts
        }
      });
    },
    { threshold: 0.9 } // Adjust threshold as needed
  );

  const elem = document.querySelector("#aboutDiv");
  if (elem) {
    observer.observe(elem);
  }
});

const birthDate = new Date("1998-04-18");
const diff = Date.now() - birthDate;
const yearsOld = Math.abs(new Date(diff).getUTCFullYear() - 1970);

const skills = [
  "JavaScript",
  "Vue",
  "Nuxt",
  "TypeScript",
  "HTML",
  "SCSS",
  "PHP",
  "GraphQL",
  "NodeJS",
  "Python",
  "Docker",
];
</script>

<style scoped lang="scss">
.containerDiv {
  padding: 200px 0;
}

p {
  padding: 8px 0;
}
.v-col {
  padding: 0;

  .container {
    padding: 0 12px;
  }
}

svg {
  width: 50%;
  margin: auto;
  display: flex;
}

@media (max-width: 600px) {
  .v-container {
    padding-bottom: 0;
  }

  .containerDiv {
    padding: 100px 0;
  }
}
</style>
