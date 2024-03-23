<template>
  <v-container class="containerDiv about">
    <v-row>
      <v-col xl="8" offset-xl="2" lg="10" offset-lg="1" xs="12">
        <v-container>
          <h1 class="text-h1 font-weight-bold mt-5" v-scroll-reveal>
            About me<span>.</span>
          </h1>
          <p class="mt-5" v-scroll-reveal>
            Hoi! Ik ben Tijmen, ik ben {{ yearsOld }} jaar oud en woon in
            Eindhoven.
          </p>
          <p v-scroll-reveal>
            Tijdens mijn tijd bij Fontys heb ik mijn passie voor front-end
            development ontdekt. Ik vind het geweldig om een product van begin
            af aan te designen, prototypen, testen en vervolgens te realiseren.
            Ook vind ik het tof om te zien hoe er daarna met dit om wordt gegaan
            door de gebruikers.
          </p>
          <p v-scroll-reveal>
            Ik ben in 2019 begonnen als developer bij Coosto. In dit team had ik
            velen taken, zo deed ik hier design en UX taken maar ook front- en
            backend werk. Uiteindelijk ben ik gepromoveerd naar een andere
            afdeling waar ik de rol van frontender op mij heb genomen.
          </p>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const birthDate = new Date("1998-04-18");
const diff = Date.now() - birthDate;
const yearsOld = Math.abs(new Date(diff).getUTCFullYear() - 1970);
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
</style>
