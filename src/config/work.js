const stakeholder = "Stakeholder";
const proces = "Proces";
const description = "Omschrijving";
const coostoStakeholder =
  "Coosto is een bedrijf gevestigd in Eindhoven, één van de producten die zij verkopen is de Coosto social media tool.";

export default [
  {
    company: "The Cre8ion.Lab",
    title: "Ecco italia",
    activeClass: "greenCard",
    img: null,
  },

  {
    company: "The Cre8ion.Lab",
    title: "Checkpoint",
    activeClass: "orangeCard",
    img: null,
  },

  {
    company: "Coosto",
    title: "Das Refactor",
    activeClass: "blueCard",
    img: "das3",
    dialog: {
      tags: ["2021", "Vue", "Python", "Adobe XD", "Usertesting"],
      content: [
        { type: "text", title: stakeholder, text: coostoStakeholder },
        {
          type: "text",
          title: description,
          text: "Coosto beheert een tool om een samenwerking met hun partner soepel te laten verlopen, namelijk de DAS of het Domain Administration System. Dit is een platform waar domeinen die gespiderd worden voor data bekeken en beheerd kunnen worden. Voor mijn afstudeerstage heb ik de DAS op de schop genomen.",
        },
        { type: "image", src: "das-old" },
        {
          type: "text",
          text: "Hierboven is een screenshot te zien van de DAS, waarop een domein en de bijbehorende sub domeinen en statussen te zien zijn. De subdomeinen worden gespiderd.",
        },
        {
          type: "largeText",
          title: proces,
          text: [
            "Ik ben begonnen met het tackelen van het probleem dat het meeste tijd zal kosten; de authenticatie. Dit onderzoek duurde erg lang en had verschillende wendingen. Ik had besloten om het onderzoek op een lager pitje te zetten en tegelijkertijd te werken aan het opzetten van het design.",
            "Om het design te maken, zijn de pijnpunten in het achterhoofd gehouden. Deze zijn opgelost door inspiratie op te doen uit soortgelijke designs of door mijn ervaring als UX designer toe te passen. Dit heeft tot een clickable prototype geleid, wat is getest op de doelgroep en UX experts.",
          ],
        },
        { type: "image", src: "das-prototype" },
        {
          type: "largeText",
          text: [
            "Ondertussen was de manier van authenticatie bekend. Ik ben toen begonnen aan het onderzoek naar de microservice architectuur. Hieruit is geresulteerd dat er een API gateway geïmplementeerd moet worden. Ik ben begonnen met het onderzoeken wat de rol is van een gateway, deze resultaten zijn besproken met het JobFeed team. Hieruit is een MoSCoW* opgesteld. Deze is aangehouden tijdens de development van de gateway.",
            "Met de resultaten uit de usertests is een web interface gebouwd met Vue. Deze heeft in meerdere fases feedback gekregen van de stakeholders, waarna het opnieuw getest is op de doelgroep. Na de usertesten hebben de testpersonen een vragenlijst ingevuld, hieruit is een SUS score gekomen.",
            "De laatste stap was het samenbrengen van alle processen. De gateway is opgesteld en het frontend kreeg hieruit de benodigde data. De gateway regelt authenticatie en autorisatie van de gebruikers. Beide systemen zijn code reviewed door senior developers. ",
          ],
        },
        { type: "video", src: "das-demo" },
        {
          type: "text",
          text: "Het bereikte resultaat is de oplevering van een nieuw frontend en een backend dat dient als API Gateway.",
        },
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
      tags: ["2019", "Research", "Adobe XD", "Usertesting", "Vue"],
      content: [
        {
          type: "text",
          title: stakeholder,
          text: "The Cre8ion.Lab is een reclamebureau uit ‘s-Hertogenbosch dat zich specialiseert in ICT, met name front-end development. ",
        },

        {
          type: "largeText",
          title: description,
          text: [
            "Cre8ion had recent een nieuwe tool uitgebracht. Deze tool maakte het mogelijk om formulieren op te stellen en te versturen. Zij zagen potentie in een uitbreiding voor deze tool.",
            "Zo zou de output van deze formulieren vertoond moeten worden binnen een data dashboard. Het data dashboard moest later ook in te zetten zijn voor andere data visualisatie doeleinden. ",
          ],
        },
        {
          type: "text",
          text: "Ik ben begonnen met het onderzoeken van de opdracht en het leren van Vue.js. Na een aantal onderzoeken naar hoe je het beste data kan visualiseren en wat voor vorm het dashboard moest gaan krijgen, is er een prototype uit gekomen. Dit prototype is uitvoerig getest met usability testing en is van feedback voorzien door de design afdeling van Cre8ion.",
        },
        { type: "image", src: "survey-prototype" },
        {
          type: "largeText",
          text: [
            "Tegen deze tijd had ik heel wat ervaring met Vue, en kon er dus gestart worden aan de Proof Of Concept. De resultaten van de testen op het prototype konden hier direct voor worden ingezet. Verder heb ik onderzoeken gedaan naar de beste tooling voor het product, dit heb ik op meerdere vlakken getest. Zo heb ik o.a. gekeken naar snelheid, gebruiksvriendelijkheid, overdraagbaarheid en schaalbaarheid van de tooling.",
            "Dit heeft geleidt tot een Proof of Concent versie met mock data. Dit POC is opnieuw getest, de resultaten van deze testen zijn doorgevoerd in het eindproduct.",
          ],
        },
        { type: "video", src: "cre8ion-demo" },
        {
          type: "largeText",
          text: [
            "Het eindproduct dat ik heb opgeleverd werkt een stuk sneller dan vergelijkbare andere tools, en heeft meer mogelijkheden om het dashboard zo in te richten als de klant wil.",
            "Met de oplevering van het eindproduct beschikt Cre8ion over een compleet product dat bestaat uit losse modules, de eerder besproken tool en mijn oplevering.",
          ],
        },
      ],
    },
  },
  {
    company: "PIDZ",
    title: "WijPIDZ platform",
    desc: "School project for PIDZ",
    lang: "Vue, Nodejs, UI",
    color: "#2170B0",
    activeClass: "blueCard",
    img: "pidz3",
    dialog: {
      tags: ["2020", "Research", "Adobe XD", "Usertesting", "Vue", "NodeJS"],
      content: [
        {
          type: "text",
          title: stakeholder,
          text: "PIDZ is een detacheringsbureau voor zorgprofessionals. Ter ondersteuning van dit proces hebben zij een platform opgericht genaamd “mijnPIDZ”. In dit platform kunnen de zorgprofessionals hun opdrachten beheren en extra administratie uitvoeren.",
        },
        {
          type: "text",
          title: description,
          text: "PIDZ heeft een marktonderzoek uitgevoerd, uit dit onderzoek bleek dat een uitbreiding van het bestaande platform een grote kans zou zijn. De zorgprofessionals beschikken graag over een 1-stop-shop waar zij gezamenlijk van gebruik kunnen maken om te zorgen voor extra scholing, verbinding en administratie.",
        },
        {
          type: "largeText",
          title: proces,
          text: [
            "Ik heb deze opdracht zelfstandig opgepakt, omdat ik dit zelfstandig heb gedaan kon ik maar op één punt focussen binnen de opdracht. Ik heb ervoor gekozen om het punt over scholing aan te pakken. Voor dit project had ik 6 weken de tijd.",
            "Na een aantal onderzoeken te hebben uitgevoerd naar benodigde functionaliteiten en concurrenten, ben ik begonnen met het realiseren van een POC. De uiteindelijke oplevering bestond uit een REST API gebouwd met NodeJS, en een front-end gebouwd met Vue.",
          ],
        },
        { type: "video", src: "pidz-demo" },
      ],
    },
  },

  {
    company: "Coosto",
    title: "Flatline Redesign ",
    activeClass: "blueCard",
    img: "flatline3",
    dialog: {
      tags: ["2021", "Adobe XD", "Usertesting", "Vue", "Flask"],
      content: [
        { type: "text", title: stakeholder, text: coostoStakeholder },
        {
          type: "largeText",
          title: description,
          text: [
            "Een afdeling binnen Coosto maakte gebruik van een intern systeem, namelijk de “flatline”. Dit systeem werd gebruikt om bij te houden of scripts die data ophalen, niet meer goed werken. Wanneer een script door dit systeem geflagged werd, moest een scripter bepalen of het script gefixt moest worden.",
            "Er kwamen vanuit de scripters velen klachten over dit systeem. Daarom is besloten om de flatline op de schop te nemen. Voor dit project had ik de lead genomen, twee andere collega’s hebben een handje geholpen met aanpassingen aan het back-end.",
          ],
        },
        {
          type: "largeText",
          title: description,
          text: [
            "Na een aantal meetings met de teams die gebruik maken van de flatline, waren de pijnpunten in kaart gebracht. Het werd al snel duidelijk dat een geheel nieuw front-end benodigd was. Hiermee is het gemakkelijker om een nieuwe stijl toe te passen. Het back-end zou wat refactoring moeten ondergaan, maar een groot gedeelte van de codebase zou hetzelfde kunnen blijven.",
            "Ik ben begonnen met onderzoeken naar verschillende style guidelines, door het opzetten van deze style guidelines blijft de kwaliteit van het nieuwe front-end gewaarborgd, ook als er in de toekomst andere developers aan moeten werken. Hieruit is Material Design uit gekomen, met als front-end framework ‘Vuetify’ om deze guidelines toe te passen.",
            "De style guidelines en aanpak van de verschillende pijnpunten zijn doorgevoerd tot een clickable prototype, wat is getest op de stakeholders. In de tussentijd heb ik ook een aantal veranderingen aan het back-end toegepast. De meeste veranderingen waren toegepast zodat het back-end de data van een andere bron verkrijgt en op de juiste manier transformeert zodat het front-end dit kan plotten naar grafieken. ",
            "De feedback op het prototype is doorgezet naar het POC. Eén van de grootste struikelblokken voor het front-end was het goed instellen en schaalbaar maken van de grafieken, en het verbinden met de andere platformen die gekoppeld zijn aan de flatline. Na een aantal weken de dev- en staging environments te hebben getest is uiteindelijk de nieuwe flatline gereleased.",
          ],
        },
        { type: "video", src: "flatline-demo" },
      ],
    },
  },
  {
    company: "Natuurlijk4pets",
    title: "Dierenwinkel webshop",
    activeClass: "greenCard",
    img: "n4pets3",
    dialog: {
      tags: ["2019", "Adobe XD", "Wordpress", "PHP"],
      content: [
        {
          type: "text",
          title: stakeholder,
          text: "Natuurlijk4pets is begonnen als hobby door een stel uit Eindhoven. Zij hadden veel ervaring als hondenfokkers, en wouden deze kennis en connecties verder in zetten met hun eigen dierenwinkel. Deze hobby is een beetje uit de hand gelopen en nu hebben zij hun eigen webshop en winkel!",
        },
        {
          type: "text",
          title: description,
          text: "De eigenaren van Natuurlijk4pets hadden een site nodig. Hier waren een aantal requirements aan verbonden. Zo moest het met Wordpress worden opgezet, hier hadden zij namelijk enige ervaring in en zo zouden zij zelf aanpassingen kunnen doorvoeren zonder externe hulp. Een andere requirement was dat de logo’s en kleuren die zij vooraf hadden opgesteld werden doorgevoerd in de webshop.",
        },
        {
          type: "text",
          title: proces,
          text: "Na een gesprek over de wensen van de stakeholders heb ik een aantal protoypes laten zien die met wordpress doorgevoerd kunnen worden. Hier is een template met custom homepage uit gekomen die tot op heden wordt gebruikt. Om het plaatje af te maken heb ik extra CSS toegevoegd en een aantal plugins geïnstalleerd en aangepast zodat deze voldoen aan de wensen van de stakeholders. Tot op heden bied ik nog technische ondersteuning voor de webshop waar nodig.",
        },
        { type: "video", src: "n4pets-demo" },
      ],
    },
  },
  {
    company: "The Cre8ion.Lab",
    title: "Stage portfolio",
    activeClass: "redCard",
    img: "stage3",
    dialog: {
      tags: ["2019", "Vue"],
      content: [
        {
          type: "text",
          title: stakeholder,
          text: "Voor mijn eerste stage heb ik een product portfolio opgeleverd waarin alle producten en documenten te zien zijn.",
        },
        {
          type: "text",
          title: description,
          text: "Ik stond voor de keuze om een ouderwetse scriptie op te leveren voor mijn stage, of een online product portfolio. Ik heb voor de portfolio gekozen. Het portfolio is gemaakt met de fonts en kleuren van het stage bedrijf, de rest was mijn eigen input.",
        },
        { type: "video", src: "stageptf-demo" },
      ],
    },
  },
];
