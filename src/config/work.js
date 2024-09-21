const stakeholder = "Stakeholder";
const proces = "Proces";
const description = "Omschrijving";
const coostoStakeholder =
  "Coosto is een bedrijf gevestigd in Eindhoven, één van de producten die zij verkopen is de Coosto social media tool.";

// Made this a long time ago, not sure if I wanna keep the old projects. For now it's commented because I will lose it otherwise.
export default [
  {
    company: "The Cre8ion.Lab",
    title: "Ecco italia",
    activeClass: "greenCard",
    img: "ecco3",
    dialog: {
      tags: ["Werk project 2024", "Vue", "Nuxt", "TypeScript"],
      content: [
        {
          type: "text",
          title: "Vraag",
          text: "Hoe kan ik het front-end van een bestaand platform vernieuwen met moderne technieken, zodat het kan concurreren met grote spelers?",
        },
        {
          type: "text",
          title: "Aanpak",
          text: "Door verschillende modules te ontwikkelen zijn complete workflows vanaf scracth opgebouwd, van filtering tot het boeken van een reis. Ik heb zelf het hele front-end gebouwd, koppelingen zijn gemaakt in samenwerking met team Back-end.",
        },
        {
          type: "text",
          title: "Resultaat",
          text: "Een nieuw platform gebouwd met Vue en NuxtJS, waarmee gebruikers zelfstandig reizen kunnen boeken. Het platform omvat een admin panel waarin medewerkers van JoyForItaly reizen kunnen aanbieden en configureren. Daarnaast is het uitgerust met een nieuwe architectuur, waardoor Cre8ion in staat is om verdere Nuxt-applicaties te implementeren.",
        },
        {
          type: "button",
          link: "https://www.eccoitalia.nl/",
          text: "Bekijk resultaat",
        },
      ],
    },
  },

  {
    company: "Self",
    title: "Whatsapp chat visualiser ",
    activeClass: "blueCard",
    img: "whatsapp3",
    dialog: {
      tags: ["Side project 2024", "Vue", "TypeScript"],
      content: [
        {
          type: "text",
          title: "Vraag",
          text: "Hoe kan ik interessante tid-bits uit WhatsApp-data halen en deze op een interactieve manier visualiseren?",
        },
        {
          type: "text",
          title: "Aanpak",
          text: "Door samen te werken met een UX-expert voor het ontwerp en een agile werkwijze te hanteren, kunnen we continu itereren op de tool na het uitvoeren van gebruikerstests.",
        },
        {
          type: "text",
          title: "Resultaat",
          text: "Een tool die WhatsApp-data in elk formaat of taal kan visualiseren, waarbij specifieke aspecten worden uitgelicht. Dit wordt ondersteund door een datadashboard waarin je diep in de data kunt duiken.",
        },
        {
          type: "button",
          link: "https://tijmenroes.github.io/whatsapp-chat-visualiser/#/",
          text: "Bekijk resultaat",
        },
      ],
    },
  },

  {
    company: "Coosto",
    title: "Das Refactor",
    activeClass: "blueCard",
    img: "das3",
    dialog: {
      tags: [
        "Eindstage project 2021",
        "Vue",
        "Python",
        "Docker",
        "Kubernetes",
        "Adobe XD",
        "Usertesting",
      ],
      content: [
        {
          type: "text",
          title: "Vraag",
          text: "Hoe kan het huidige Domain Administration System (DAS) worden uitgebreid, zonder dat JobFeed zijn systemen hoeft aan te passen?",
        },
        {
          type: "text",
          title: "Aanpak",
          text: "Door het afnemen van diverse interviews met gebruikers van het huidige systeem zijn de pijnpunten in kaart gebracht. Op basis hiervan is een interactief prototype ontwikkeld, dat herhaaldelijk gevalideerd is met zowel gebruikers als UX-experts binnen het bedrijf. Het back-end is ontworpen na uitvoerig onderzoek naar authenticatie en autorisatie, evenals de toepassing van microservice-architectuur.",
        },
        {
          type: "text",
          title: "Resultaat",
          text: "Het eindresultaat is een front-end met een vernieuwde look en feel, aangevuld met een back-end als API-gateway die data efficiënt voorbereidt en autorisatie en authenticatie beheert via OAuth2.0. Dee architectuur is volledig ingericht met Docker en Kubernetes, ondersteund door een bijbehorende CI/CD-pijplijn.",
        },
        { type: "video", src: "das-demo" },
      ],
    },
  },
  {
    company: "The Cre8ion.Lab",
    title: "Reporting dashboard",
    desc: "Internship project for cre8ion.lab",
    activeClass: "redCard",
    color: "#FD413C",
    img: "cre8ion3",
    dialog: {
      tags: [
        "Stage project 2019",
        "Research",
        "Adobe XD",
        "Usertesting",
        "Vue",
      ],
      content: [
        {
          type: "text",
          title: "Vraag",
          text: "Hoe visualiseert Cre8ion de output van de recent gelanceerde survey tool?",
        },
        {
          type: "text",
          title: "Aanpak",
          text: "Door uitgebreide onderzoeken en intensieve samenwerking met gebruikers en designers is een eerste prototype ontwikkeld, dat verder is verfijnd tot een functioneel eindproduct.",
        },
        {
          type: "text",
          title: "Resultaat",
          text: "Het eindproduct presteert merkbaar sneller dan concurrenten en biedt gebruikers uitgebreide mogelijkheden om hun dashboard aan te passen naar hun voorkeuren. Hierdoor heeft Cre8ion een volledig product dat het mogelijk maakt om data uit formulieren effectief op te halen en te visualiseren.",
        },
        { type: "video", src: "cre8ion-demo" },
      ],
    },
  },
];
