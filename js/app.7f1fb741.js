(function(e){function t(t){for(var o,i,s=t[0],d=t[1],l=t[2],p=0,u=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&u.push(a[i][0]),a[i]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);c&&c(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var d=n[s];0!==a[d]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/portfolio/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},1241:function(e,t,n){e.exports=n.p+"img/n4pets.2c73e095.png"},"15af":function(e,t,n){e.exports=n.p+"media/stageptf-demo.0c46d447.mp4"},2970:function(e,t,n){e.exports=n.p+"img/stage3.026a87e9.png"},"34aa":function(e,t,n){e.exports=n.p+"img/n4pets3.6617a338.png"},3501:function(e,t,n){e.exports=n.p+"img/pidz.a8eb1d50.png"},"3d7a":function(e,t,n){e.exports=n.p+"img/das3.d05f7908.png"},"548f":function(e,t,n){e.exports=n.p+"media/cre8ion-demo.9cd9398b.mp4"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{class:{scrollDisabled:e.scrollDisabled},staticStyle:{background:"none",height:"100vh"}},[n("v-main",[n("v-toolbar",{staticClass:"elevation-0 mt-3",attrs:{color:"transparent"}},[n("v-col",{attrs:{cols:"12","offset-lg":"8","offset-md":"6","offset-sm":"6"}},[n("h2",{staticClass:"menuOption",on:{click:function(t){return e.$vuetify.goTo(e.$refs.aboutpage)}}},[e._v(" About ")]),n("h2",{staticClass:"menuOption",on:{click:function(t){return e.$vuetify.goTo(e.$refs.workpage)}}},[e._v(" Work ")]),n("h2",{staticClass:"menuOption",on:{click:function(t){return e.$vuetify.goTo(e.$refs.contactpage)}}},[e._v(" Contact ")])])],1),n("Landing",{ref:"landingpage",on:{scroll:function(t){return e.$vuetify.goTo(e.$refs.aboutpage)}}}),n("About",{ref:"aboutpage"}),n("Work",{ref:"workpage",on:{modalOpen:function(t){e.scrollDisabled=!0},modalClose:function(t){e.scrollDisabled=!1}}})],1),n("Contact",{ref:"contactpage"})],1)},r=[],i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("v-container",{staticClass:"containerDiv landingPage",attrs:{"fill-height":""}},[o("v-row",[o("v-col",{staticClass:"mt-4",attrs:{xl:"6","offset-xl":"2",lg:"8","offset-lg":"1",md:"8",xs:"12"}},[o("v-container",[o("h1",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"display-4 font-weight-bold mt-5"},[e._v(" Tijmen Roes ")]),o("p",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"mt-5 display-1"},[e._v(" Developer, UX Designer ")])])],1),o("v-col",{staticClass:"hidden-sm-and-down",attrs:{xl:"3",lg:"3",md:"3"}},[o("div",[o("v-img",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],attrs:{src:n("9f2c")}})],1)])],1),o("v-btn",{staticClass:"scrollButton",attrs:{large:"",icon:"",color:"white"},on:{click:function(t){return e.$emit("scroll")}}},[o("v-icon",{attrs:{"x-large":""}},[e._v("mdi-arrow-down-thin")])],1)],1)],1)},s=[],d={name:"Landing",data:function(){return{red:"90px"}},methods:{}},l=d,c=(n("ba8d"),n("2877")),p=n("6544"),u=n.n(p),g=n("8336"),m=n("62ad"),v=n("a523"),f=n("132d"),h=n("adda"),b=n("0fd9"),k=Object(c["a"])(l,i,s,!1,null,"2ff82a84",null),w=k.exports;u()(k,{VBtn:g["a"],VCol:m["a"],VContainer:v["a"],VIcon:f["a"],VImg:h["a"],VRow:b["a"]});var y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"containerDiv about"},[n("v-row",[n("v-col",{attrs:{xl:"8","offset-xl":"2",lg:"10","offset-lg":"1",xs:"12"}},[n("v-container",[n("h1",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"display-4 font-weight-bold mt-5"},[e._v(" About me"),n("span",[e._v(".")])]),n("p",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"mt-5"},[e._v(" Hoi! Ik ben Tijmen, ik ben 24 jaar oud en woon in Eindhoven. ")]),n("p",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}]},[e._v(" Tijdens mijn tijd bij Fontys heb ik mijn passie voor front-end development ontdekt. Ik vind het geweldig om een product van begin af aan te designen, prototypen, testen en vervolgens te realiseren. Ook vind ik het tof om te zien hoe er daarna met dit om wordt gegaan door de gebruikers. ")]),n("p",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}]},[e._v(" Ik ben in 2019 begonnen als developer bij Coosto. In dit team had ik velen taken, zo deed ik hier design en UX taken maar ook front- en backend werk. Uiteindelijk ben ik gepromoveerd naar een andere afdeling waar ik de rol van frontender op mij heb genomen. ")])])],1)],1)],1)},x=[],j=(n("5c38"),{}),C=Object(c["a"])(j,y,x,!1,null,"adc44b92",null),z=C.exports;u()(C,{VCol:m["a"],VContainer:v["a"],VRow:b["a"]});var _=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"Work"},[n("v-col",{attrs:{xl:"8","offset-xl":"2",lg:"10","offset-lg":"1",xs:"12"}},[n("v-row",[n("v-col",{staticClass:"mt-4",attrs:{cols:"8"}},[n("v-container",[n("h1",{staticClass:"display-4 font-weight-bold mt-5",attrs:{vf:""}},[e._v(" Work"),n("span",[e._v(".")])])])],1),n("v-col",{attrs:{cols:"4"}}),e._l(e.work,(function(t,o){return n("v-col",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],key:o,attrs:{xs:"12",sm:"6"}},[n("v-card",{staticClass:"workCard mx-auto",class:t.activeClass,attrs:{color:"#2B3036"},on:{click:function(t){return e.openModal(o)}}},[n("v-container",[n("v-card-text",[n("span",{staticClass:"subtitle"},[e._v(e._s(t.company))]),n("h2",{staticClass:"display-1 projTitle",attrs:{color:"white"}},[e._v(" "+e._s(t.title)+" ")])])],1),n("div",{staticClass:"imgContainer",style:{backgroundImage:"url("+e.getImgUrl(t.img)+")"}})],1)],1)}))],2)],1),e.modal?n("v-dialog",{staticClass:"workDialog",attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[n("WorkDialog",{attrs:{item:e.pickedWork.dialog},on:{close:e.closeModal}})],1):e._e()],1)},D=[],V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"Work",attrs:{dark:""}},[n("v-toolbar",{staticClass:"toolbar",attrs:{color:"none"}},[n("div",{staticClass:"backBtn"},[n("div",{staticClass:"text-center",on:{click:function(t){return e.$emit("close")}}},[n("v-btn",{staticClass:"text-none"},[n("v-icon",[e._v("mdi-arrow-left")]),e._v(" Terug ")],1)],1)])]),n("v-container",{attrs:{fluid:""}},[n("v-col",{attrs:{"offset-xl":"2","offset-lg":"1",lg:"10"}},e._l(e.item.tags,(function(t){return n("v-btn",{key:t,staticClass:"text-none mr-2 mb-2",attrs:{depressed:"",color:"rgb(43, 48, 54)"}},[e._v(e._s(t)+" ")])})),1),n("v-row",e._l(e.item.content,(function(t,o){return n("v-col",{key:o,attrs:{"offset-xl":"2",lg:"10","offset-lg":"1",sm:"12"}},[t.title?n("h1",[e._v(" "+e._s(t.title)+" ")]):e._e(),"text"===t.type?n("div",[n("p",[e._v(" "+e._s(t.text)+" ")])]):e._e(),"largeText"===t.type?n("div",e._l(t.text,(function(t,o){return n("p",{key:o},[e._v(" "+e._s(t)+" ")])})),0):e._e(),"image"===t.type?n("div",[n("div",{staticClass:"imgContainer",style:{backgroundImage:"url("+e.getImgUrl(t.src)+")"}})]):e._e(),"video"===t.type?n("div",[n("video",{attrs:{width:"100%",height:"auto",autoplay:"",controls:"",muted:""},domProps:{muted:!0}},[n("source",{attrs:{src:e.getVidUrl(t.src),type:"video/mp4"}}),e._v(" Your browser does not support the video tag. ")])]):e._e()])})),1)],1)],1)},O=[],I={name:"WorkDialog",props:{item:{type:Object,required:!1}},methods:{getImgUrl:function(e){var t=n("9e01")("./".concat(e,".png"));return t||null},getVidUrl:function(e){var t=n("a67c")("./".concat(e,".mp4"));return t||null}}},T=I,P=(n("5e6d"),n("d1ae"),n("b0af")),N=n("71d9"),S=Object(c["a"])(T,V,O,!1,null,"6b715b30",null),U=S.exports;u()(S,{VBtn:g["a"],VCard:P["a"],VCol:m["a"],VContainer:v["a"],VIcon:f["a"],VRow:b["a"],VToolbar:N["a"]});var W="Stakeholder",$="Proces",A="Omschrijving",E="Coosto is een bedrijf gevestigd in Eindhoven, één van de producten die zij verkopen is de Coosto social media tool.",H=[{company:"Coosto",title:"Das Refactor",activeClass:"blueCard",img:"das3",dialog:{tags:["2021","Vue","Python","Adobe XD","Usertesting"],content:[{type:"text",title:W,text:E},{type:"text",title:A,text:"Coosto beheert een tool om een samenwerking met hun partner soepel te laten verlopen, namelijk de DAS of het Domain Administration System. Dit is een platform waar domeinen die gespiderd worden voor data bekeken en beheerd kunnen worden. Voor mijn afstudeerstage heb ik de DAS op de schop genomen."},{type:"image",src:"das-old"},{type:"text",text:"Hierboven is een screenshot te zien van de DAS, waarop een domein en de bijbehorende sub domeinen en statussen te zien zijn. De subdomeinen worden gespiderd."},{type:"largeText",title:$,text:["Ik ben begonnen met het tackelen van het probleem dat het meeste tijd zal kosten; de authenticatie. Dit onderzoek duurde erg lang en had verschillende wendingen. Ik had besloten om het onderzoek op een lager pitje te zetten en tegelijkertijd te werken aan het opzetten van het design.","Om het design te maken, zijn de pijnpunten in het achterhoofd gehouden. Deze zijn opgelost door inspiratie op te doen uit soortgelijke designs of door mijn ervaring als UX designer toe te passen. Dit heeft tot een clickable prototype geleid, wat is getest op de doelgroep en UX experts."]},{type:"image",src:"das-prototype"},{type:"largeText",text:["Ondertussen was de manier van authenticatie bekend. Ik ben toen begonnen aan het onderzoek naar de microservice architectuur. Hieruit is geresulteerd dat er een API gateway geïmplementeerd moet worden. Ik ben begonnen met het onderzoeken wat de rol is van een gateway, deze resultaten zijn besproken met het JobFeed team. Hieruit is een MoSCoW* opgesteld. Deze is aangehouden tijdens de development van de gateway.","Met de resultaten uit de usertests is een web interface gebouwd met Vue. Deze heeft in meerdere fases feedback gekregen van de stakeholders, waarna het opnieuw getest is op de doelgroep. Na de usertesten hebben de testpersonen een vragenlijst ingevuld, hieruit is een SUS score gekomen.","De laatste stap was het samenbrengen van alle processen. De gateway is opgesteld en het frontend kreeg hieruit de benodigde data. De gateway regelt authenticatie en autorisatie van de gebruikers. Beide systemen zijn code reviewed door senior developers. "]},{type:"video",src:"das-demo"},{type:"text",text:"Het bereikte resultaat is de oplevering van een nieuw frontend en een backend dat dient als API Gateway."}]}},{company:"The Cre8ion.Lab",title:"Reporting dashboard",desc:"Internship project for cre8ion.lab",activeClass:"redCard",color:"#FD413C",img:"cre8ion3",dialog:{tags:["2019","Research","Adobe XD","Usertesting","Vue"],content:[{type:"text",title:W,text:"The Cre8ion.Lab is een reclamebureau uit ‘s-Hertogenbosch dat zich specialiseert in ICT, met name front-end development. "},{type:"largeText",title:A,text:["Cre8ion had recent een nieuwe tool uitgebracht. Deze tool maakte het mogelijk om formulieren op te stellen en te versturen. Zij zagen potentie in een uitbreiding voor deze tool.","Zo zou de output van deze formulieren vertoond moeten worden binnen een data dashboard. Het data dashboard moest later ook in te zetten zijn voor andere data visualisatie doeleinden. "]},{type:"text",text:"Ik ben begonnen met het onderzoeken van de opdracht en het leren van Vue.js. Na een aantal onderzoeken naar hoe je het beste data kan visualiseren en wat voor vorm het dashboard moest gaan krijgen, is er een prototype uit gekomen. Dit prototype is uitvoerig getest met usability testing en is van feedback voorzien door de design afdeling van Cre8ion."},{type:"image",src:"survey-prototype"},{type:"largeText",text:["Tegen deze tijd had ik heel wat ervaring met Vue, en kon er dus gestart worden aan de Proof Of Concept. De resultaten van de testen op het prototype konden hier direct voor worden ingezet. Verder heb ik onderzoeken gedaan naar de beste tooling voor het product, dit heb ik op meerdere vlakken getest. Zo heb ik o.a. gekeken naar snelheid, gebruiksvriendelijkheid, overdraagbaarheid en schaalbaarheid van de tooling.","Dit heeft geleidt tot een Proof of Concent versie met mock data. Dit POC is opnieuw getest, de resultaten van deze testen zijn doorgevoerd in het eindproduct."]},{type:"video",src:"cre8ion-demo"},{type:"largeText",text:["Het eindproduct dat ik heb opgeleverd werkt een stuk sneller dan vergelijkbare andere tools, en heeft meer mogelijkheden om het dashboard zo in te richten als de klant wil.","Met de oplevering van het eindproduct beschikt Cre8ion over een compleet product dat bestaat uit losse modules, de eerder besproken tool en mijn oplevering."]}]}},{company:"PIDZ",title:"WijPIDZ platform",desc:"School project for PIDZ",lang:"Vue, Nodejs, UI",color:"#2170B0",activeClass:"blueCard",img:"pidz3",dialog:{tags:["2020","Research","Adobe XD","Usertesting","Vue","NodeJS"],content:[{type:"text",title:W,text:"PIDZ is een detacheringsbureau voor zorgprofessionals. Ter ondersteuning van dit proces hebben zij een platform opgericht genaamd “mijnPIDZ”. In dit platform kunnen de zorgprofessionals hun opdrachten beheren en extra administratie uitvoeren."},{type:"text",title:A,text:"PIDZ heeft een marktonderzoek uitgevoerd, uit dit onderzoek bleek dat een uitbreiding van het bestaande platform een grote kans zou zijn. De zorgprofessionals beschikken graag over een 1-stop-shop waar zij gezamenlijk van gebruik kunnen maken om te zorgen voor extra scholing, verbinding en administratie."},{type:"largeText",title:$,text:["Ik heb deze opdracht zelfstandig opgepakt, omdat ik dit zelfstandig heb gedaan kon ik maar op één punt focussen binnen de opdracht. Ik heb ervoor gekozen om het punt over scholing aan te pakken. Voor dit project had ik 6 weken de tijd.","Na een aantal onderzoeken te hebben uitgevoerd naar benodigde functionaliteiten en concurrenten, ben ik begonnen met het realiseren van een POC. De uiteindelijke oplevering bestond uit een REST API gebouwd met NodeJS, en een front-end gebouwd met Vue."]},{type:"video",src:"pidz-demo"}]}},{company:"Coosto",title:"Flatline Redesign ",activeClass:"blueCard",img:"flatline3",dialog:{tags:["2021","Adobe XD","Usertesting","Vue","Flask"],content:[{type:"text",title:W,text:E},{type:"largeText",title:A,text:["Een afdeling binnen Coosto maakte gebruik van een intern systeem, namelijk de “flatline”. Dit systeem werd gebruikt om bij te houden of scripts die data ophalen, niet meer goed werken. Wanneer een script door dit systeem geflagged werd, moest een scripter bepalen of het script gefixt moest worden.","Er kwamen vanuit de scripters velen klachten over dit systeem. Daarom is besloten om de flatline op de schop te nemen. Voor dit project had ik de lead genomen, twee andere collega’s hebben een handje geholpen met aanpassingen aan het back-end."]},{type:"largeText",title:A,text:["Na een aantal meetings met de teams die gebruik maken van de flatline, waren de pijnpunten in kaart gebracht. Het werd al snel duidelijk dat een geheel nieuw front-end benodigd was. Hiermee is het gemakkelijker om een nieuwe stijl toe te passen. Het back-end zou wat refactoring moeten ondergaan, maar een groot gedeelte van de codebase zou hetzelfde kunnen blijven.","Ik ben begonnen met onderzoeken naar verschillende style guidelines, door het opzetten van deze style guidelines blijft de kwaliteit van het nieuwe front-end gewaarborgd, ook als er in de toekomst andere developers aan moeten werken. Hieruit is Material Design uit gekomen, met als front-end framework ‘Vuetify’ om deze guidelines toe te passen.","De style guidelines en aanpak van de verschillende pijnpunten zijn doorgevoerd tot een clickable prototype, wat is getest op de stakeholders. In de tussentijd heb ik ook een aantal veranderingen aan het back-end toegepast. De meeste veranderingen waren toegepast zodat het back-end de data van een andere bron verkrijgt en op de juiste manier transformeert zodat het front-end dit kan plotten naar grafieken. ","De feedback op het prototype is doorgezet naar het POC. Eén van de grootste struikelblokken voor het front-end was het goed instellen en schaalbaar maken van de grafieken, en het verbinden met de andere platformen die gekoppeld zijn aan de flatline. Na een aantal weken de dev- en staging environments te hebben getest is uiteindelijk de nieuwe flatline gereleased."]},{type:"video",src:"flatline-demo"}]}},{company:"Natuurlijk4pets",title:"Dierenwinkel webshop",activeClass:"greenCard",img:"n4pets3",dialog:{tags:["2019","Adobe XD","Wordpress","PHP"],content:[{type:"text",title:W,text:"Natuurlijk4pets is begonnen als hobby door een stel uit Eindhoven. Zij hadden veel ervaring als hondenfokkers, en wouden deze kennis en connecties verder in zetten met hun eigen dierenwinkel. Deze hobby is een beetje uit de hand gelopen en nu hebben zij hun eigen webshop en winkel!"},{type:"text",title:A,text:"De eigenaren van Natuurlijk4pets hadden een site nodig. Hier waren een aantal requirements aan verbonden. Zo moest het met Wordpress worden opgezet, hier hadden zij namelijk enige ervaring in en zo zouden zij zelf aanpassingen kunnen doorvoeren zonder externe hulp. Een andere requirement was dat de logo’s en kleuren die zij vooraf hadden opgesteld werden doorgevoerd in de webshop."},{type:"text",title:$,text:"Na een gesprek over de wensen van de stakeholders heb ik een aantal protoypes laten zien die met wordpress doorgevoerd kunnen worden. Hier is een template met custom homepage uit gekomen die tot op heden wordt gebruikt. Om het plaatje af te maken heb ik extra CSS toegevoegd en een aantal plugins geïnstalleerd en aangepast zodat deze voldoen aan de wensen van de stakeholders. Tot op heden bied ik nog technische ondersteuning voor de webshop waar nodig."},{type:"video",src:"n4pets-demo"}]}},{company:"The Cre8ion.Lab",title:"Stage portfolio",activeClass:"redCard",img:"stage3",dialog:{tags:["2019","Vue"],content:[{type:"text",title:W,text:"Voor mijn eerste stage heb ik een product portfolio opgeleverd waarin alle producten en documenten te zien zijn."},{type:"text",title:A,text:"Ik stond voor de keuze om een ouderwetse scriptie op te leveren voor mijn stage, of een online product portfolio. Ik heb voor de portfolio gekozen. Het portfolio is gemaakt met de fonts en kleuren van het stage bedrijf, de rest was mijn eigen input."},{type:"video",src:"stageptf-demo"}]}}],M={name:"Work",components:{WorkDialog:U},data:function(){return{modal:!1,projectId:null,pickedWork:null}},computed:{work:function(){return H}},methods:{getImgUrl:function(e){var t=n("9e01")("./".concat(e,".png"));return t||null},openModal:function(e){this.pickedWork=this.work[e],this.modal=!0},closeModal:function(){this.pickedWork=null,this.modal=!1}},watch:{modal:function(e){e?this.$emit("modalOpen"):this.$emit("modalClose")}}},R=M,Z=(n("9998"),n("5cfd"),n("99d9")),L=n("169a"),X=Object(c["a"])(R,_,D,!1,null,"79ea22de",null),B=X.exports;u()(X,{VCard:P["a"],VCardText:Z["a"],VCol:m["a"],VContainer:v["a"],VDialog:L["a"],VRow:b["a"]});var F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demoSection"},[n("v-container",[n("v-col",{attrs:{xl:"8","offset-xl":"2",lg:"10","offset-lg":"1","offset-xs":"0"}},[n("v-container",[n("h1",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"display-3 font-weight-bold mt-5"},[e._v(" Contact"),n("span",[e._v(".")])])]),n("div",[n("v-row",e._l(e.contacts,(function(t){return n("v-col",{key:t.icon,attrs:{cols:"12",sm:"6"}},[n("v-card",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"workCard mx-auto",class:t.class,attrs:{color:"#2B3036","min-height":"250",dark:"",href:t.href}},[n("div",{staticClass:"text-center "},[n("v-icon",{staticClass:"text-center icon",attrs:{"x-large":"",color:"white",dark:""}},[e._v(e._s(t.icon))])],1),n("p",{staticClass:"text-center projTitle pa-5 mb-0",domProps:{innerHTML:e._s(t.text)}})])],1)})),1)],1)],1)],1)],1)},J=[],q={data:function(){return{contacts:[{icon:"mdi-email",text:"Verdere vragen of interesse? <br/> Stuur gerust een mailtje!",class:"redCard",href:"mailto:tijmen.roes@hotmail.com"},{icon:"mdi-linkedin",text:"Let's connect!",class:"blueCard",href:"https://www.linkedin.com/in/tijmen-roes-11020a161/"}]}}},G=q,Y=(n("aa32"),Object(c["a"])(G,F,J,!1,null,"4688c55f",null)),K=Y.exports;u()(Y,{VCard:P["a"],VCol:m["a"],VContainer:v["a"],VIcon:f["a"],VRow:b["a"]});var Q={name:"App",components:{Landing:w,About:z,Work:B,Contact:K},data:function(){return{scrollDisabled:!1}}},ee=Q,te=(n("034f"),n("7496")),ne=n("f6c4"),oe=Object(c["a"])(ee,a,r,!1,null,null,null),ae=oe.exports;u()(oe,{VApp:te["a"],VCol:m["a"],VMain:ne["a"],VToolbar:N["a"]});var re=n("f309");o["a"].use(re["a"]);var ie=new re["a"]({}),se=n("4c95"),de=n.n(se);o["a"].use(de.a,{class:"v-scroll-reveal",duration:800,delay:100,scale:1,distance:"20px",mobile:!0}),o["a"].config.productionTip=!1,new o["a"]({vuetify:ie,render:function(e){return e(ae)}}).$mount("#app")},"5c04":function(e,t,n){},"5c38":function(e,t,n){"use strict";var o=n("855b"),a=n.n(o);a.a},"5c4e":function(e,t,n){e.exports=n.p+"img/pidz-mockup.3db660af.png"},"5c9d":function(e,t,n){e.exports=n.p+"img/cre8ion3.1a6fe380.png"},"5cfd":function(e,t,n){"use strict";var o=n("5fe0"),a=n.n(o);a.a},"5e6d":function(e,t,n){"use strict";var o=n("ead7"),a=n.n(o);a.a},"5fe0":function(e,t,n){},"632f":function(e,t,n){e.exports=n.p+"media/pidz-demo.b0fef206.mp4"},"692e":function(e,t,n){},"78c5":function(e,t,n){e.exports=n.p+"media/flatline-demo.eac272d0.mp4"},"7fea":function(e,t,n){e.exports=n.p+"img/monitor.7d2c2502.png"},"855b":function(e,t,n){},"85ec":function(e,t,n){},"8f8c":function(e,t,n){e.exports=n.p+"img/das-old.39c0a9f0.png"},"922b":function(e,t,n){e.exports=n.p+"img/reporting.0d76801b.png"},9998:function(e,t,n){"use strict";var o=n("ff10"),a=n.n(o);a.a},"9e01":function(e,t,n){var o={"./cre8ion3.png":"5c9d","./das-old.png":"8f8c","./das-prototype.png":"a9aa","./das3.png":"3d7a","./flatline3.png":"b4ce","./me.png":"9f2c","./monitor.png":"7fea","./n4pets.png":"1241","./n4pets3.png":"34aa","./pidz-mockup.png":"5c4e","./pidz-mockup2.png":"9e50","./pidz.png":"3501","./pidz3.png":"cc31","./reporting.png":"922b","./stage3.png":"2970","./survey-prototype.png":"a59c"};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=r,e.exports=a,a.id="9e01"},"9e50":function(e,t,n){e.exports=n.p+"img/pidz-mockup2.2e8a9d0f.png"},"9f2c":function(e,t,n){e.exports=n.p+"img/me.ce5e1c33.png"},a13d:function(e,t,n){e.exports=n.p+"media/n4pets-demo.c635d98a.mp4"},a59c:function(e,t,n){e.exports=n.p+"img/survey-prototype.de28589f.png"},a67c:function(e,t,n){var o={"./cre8ion-demo.mp4":"548f","./das-demo.mp4":"f8db","./flatline-demo.mp4":"78c5","./n4pets-demo.mp4":"a13d","./pidz-demo.mp4":"632f","./stageptf-demo.mp4":"15af"};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=r,e.exports=a,a.id="a67c"},a9aa:function(e,t,n){e.exports=n.p+"img/das-prototype.47964aea.png"},aa32:function(e,t,n){"use strict";var o=n("ab13"),a=n.n(o);a.a},ab13:function(e,t,n){},b4ce:function(e,t,n){e.exports=n.p+"img/flatline3.1e10b277.png"},ba8d:function(e,t,n){"use strict";var o=n("692e"),a=n.n(o);a.a},cc31:function(e,t,n){e.exports=n.p+"img/pidz3.7ede828d.png"},d1ae:function(e,t,n){"use strict";var o=n("5c04"),a=n.n(o);a.a},ead7:function(e,t,n){},f8db:function(e,t,n){e.exports=n.p+"media/das-demo.11cefe20.mp4"},ff10:function(e,t,n){}});
//# sourceMappingURL=app.7f1fb741.js.map