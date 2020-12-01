<template>
  <div>
    <TooEarlyPopUp v-show="isTooEarlyPopUpOpen"></TooEarlyPopUp>
    <CalendarModal v-show="isModalOpen" :DayData="DayData"></CalendarModal>

    <div class="row">
      
        <div @click="openModalForDay(1)" class="puerta numbers">1</div>
      
        <div @click="openModalForDay(2)" class="puerta numbers">2</div>
      
        <div @click="openModalForDay(3)" class="puerta numbers">3</div>
     
        <div @click="openModalForDay(4)" class="puerta numbers">4</div>
      
        <div @click="openModalForDay(5)" class="puerta numbers">5</div>
      
        <div @click="openModalForDay(6)" class="puerta numbers">6</div>
      
    </div>

    <div class="row">
      
        <div @click="openModalForDay(7)" class="puerta numbers">7</div>
      
        <div @click="openModalForDay(8)" class="puerta numbers">8</div>
      
        <div @click="openModalForDay(9)" class="puerta numbers">9</div>
      
        <div @click="openModalForDay(10)" class="puerta numbers">10</div>
     
        <div @click="openModalForDay(11)" class="puerta numbers">11</div>
      
        <div @click="openModalForDay(12)" class="puerta numbers">12</div>
      
    </div>

    <div class="row">
      
        <div @click="openModalForDay(13)" class="puerta numbers">13</div>
     
        <div @click="openModalForDay(14)" class="puerta numbers">14</div>
      
        <div @click="openModalForDay(15)" class="puerta numbers">15</div>
      
        <div @click="openModalForDay(16)" class="puerta numbers">16</div>
     
        <div @click="openModalForDay(17)" class="puerta numbers">17</div>
      
        <div @click="openModalForDay(18)" class="puerta numbers">18</div>
      
    </div>

    <div class="row">
      
        <div @click="openModalForDay(19)" class="puerta numbers">19</div>
     
        <div @click="openModalForDay(20)" class="puerta numbers">20</div>
      
        <div @click="openModalForDay(21)" class="puerta numbers">21</div>
      
        <div @click="openModalForDay(22)" class="puerta numbers">22</div>
    
        <div @click="openModalForDay(23)" class="puerta numbers">23</div>
     
        <div @click="openModalForDay(24)" class="puerta numbers">24</div>
     
    </div>
  </div>
</template>

<script>
//cada anio puedo cambiar el contenido del calendario cambiando sólo esta parte!
let DaysData = {
  1: {
    dateCode: "2020-12-01",
    date: "Martes 1 de diciembre 2020",
    question:
      "Cómo se llamaba el primer coche del abuelo? Ese que Jose estrelló intentando venderlo: ",
    answer: "lujoso" || "el lujoso" || "anabanana",
    successmessage: "Eres un Montalvo!",
    failmessage: "Mal, mal, mal... Acaso estás intentando colarte?",
    img_url: "#.jpg",
    dailyMessage: "Hola familia! Para ir preparando el espíritu de Navidad he hecho una recopilación de momentos que nos saquen una sonrisa cada día! Vamos con el primero... cuando Carlos y Santiago aun no eran gigantes!",
    audiovisual: require("./images/1.jpg"),
    video:"",
  },
  2: {
    dateCode: "2020-12-02",
    date: "Miércoles 2 de diciembre 2020",
    question: "Cómo llamamos en la familia al Parque Reina Sofía de Guardamar?",
    answer: "parque de los patos" || "el parque de los patos" || "parque de patos" || "anabanana",
    successmessage: "Exacto!",
    failmessage: "Intentalo otra vez sin el artículo delante",
    img_url: "#.jpg",
    dailyMessage: "Hoy comparto con vosotros mi anuncio favorito de todos los tiempos, por si alguien necesita una dosis de alegría!",
    audiovisual:" " ,
    video:"https://www.youtube.com/embed/BEhd2S5GbUg",
  },
  3: {
    dateCode: "2020-12-03",
    date: "Jueves 3 de diciembre 2020",
    question: "Cómo se llama la vecina de Raquel en Guardamar?",
    answer: "yoli" || "la yoli" || "anabanana",
    successmessage: "Efectivamente! (además quería con Carlos clarisimamente",
    failmessage: "Estás seguro de que eres un Montalvo?",
    img_url: "#.jpg",
    dailyMessage: "Disfruta la vida como Teresa disfruta el algodón de azúcar!!!",
    audiovisual: require("./images/3.jpg"),
    video:" ",
  },
  4: {
    dateCode: "2020-12-04",
    date: "Viernes 4 de diciembre 2020",
    question: "Cuál es el nombre de el/la menor de la familia?",
    answer: "maría" || "anabanana",
    successmessage: "Efectivamente!",
    failmessage: "Te has olvidado la tilde? o es que no eres Montalvo?",
    img_url: "#.jpg",
    dailyMessage: "Venga que es viernes! Este video es de la peli Love Actually, muy recomendable para ir abriendo el apetito naviño este fin de semana!",
    audiovisual: " ",
    video:"https://www.youtube.com/embed/_ghkHlthIqM ",
  },
  5: {
    dateCode: "2020-12-05",
    date: "Sábado 5 de diciembre 2020",
    question: "Cómo se llama la viejita de la mecedora en Guardamar? ",
    answer: "nieves"|| "anabanana",
    successmessage: "Así es! siempre con su mecedora",
    failmessage: "No lo sabes? La mujer de El Roca!",
    img_url: "#.jpg",
    dailyMessage: "En Alemania dicen que la noche del 5 al 6 de Diciembre es la noche en la que San Nicolás y Krampus visitan las casas. A quien ha sido bueno San Nicolás le trae mandarinas y nueces, a quien ha sido malo Krampus se lo lleva en un saco y se lo come. Si tenéis dudas... yo cerraría con llave esta noche...",
    audiovisual: require("./images/krampus1.jpg"),
    video:" ",
  },
  6: {
    dateCode: "2020-12-06",
    date: "Domingo 6 de diciembre 2020",
    question:
      "Dónde estuvimos a punto de pasar el puente de la Hispanidad antes de que Ayuso nos confinara?",
    answer: "guardamar" || "anabanana",
    successmessage: "Eres un Montalvo!",
    failmessage: "Mal, mal, mal... Acaso estás intentando colarte?",
    img_url: "#.jpg",
    dailyMessage: "Espero que sigáis todos de una pieza y que a nadie le haya secuestrado Krampus! ",
    audiovisual: require("./images/9.jpg"),
    video:" ",
  },
  7: {
    dateCode: "2020-12-07",
    date: "Lunes 7 de diciembre 2020",
    question:
      "Qué app usaban Teresa y María para hacer videos? (nombre antiguo) ",
    answer: "musically" || "musicali" || "musicalli" || "anabanana",
    successmessage: "Eres un Montalvo!",
    failmessage: "Acaso lo has deletreado mal? o es que no los sabes?",
    img_url: "#.jpg",
    dailyMessage: "Os acordáis de aquel día en el Juan Carlos I?",
    audiovisual: require("./images/7.jpg"),
    video:" ",
  },
  8: {
    dateCode: "2020-12-08",
    date: "Martes 8 de diciembre 2020",
    question: "De los hermanos Montalvo Sánchez, quién canta peor? ",
    answer: "jose" || "tio jose" || "el tio jose" || "anabanana",
    successmessage: "Obviamente",
    failmessage: "Mal, mal, mal... Acaso estás intentando colarte?",
    img_url: "#.jpg",
    dailyMessage: "Hoy toca un villancico muy mono! A mi esta canción me da ganas de ponerme guapa para las fiestas",
    audiovisual: " ",
    video:" https://www.youtube.com/embed/6bbuBubZ1yE",
  },
  9: {
    dateCode: "2020-12-09",
    date: "Miércoles 9 de diciembre 2020",
    question: "Quién tiene el pelo más largo en la familia? ",
    answer: "raquel" || "anabanana",
    successmessage: "Aunque Teresa se va acercando...",
    failmessage: "Mal, mal, mal... Acaso estás intentando colarte?",
    img_url: "#.jpg",
    dailyMessage: "No sé qué le habríamos hecho a María en esa foto... menuda cara de enfado!",
    audiovisual: require("./images/0.jpg"),
    video:" ",
  },
  10: {
    dateCode: "2020-12-10",
    date: "Jueves 10 de diciembre 2020",
    question: "Color del coche de Santiago ",
    answer: "azul" || "cian" || "cyan" || "anabanana",
    successmessage: "Esta era fácil",
    failmessage: "Si no te sabes esta, no eres un Montalvo",
    img_url: "#.jpg",
    dailyMessage: "Esta canción a mi me sube el ánimo! Justo lo que necesitamos para este último tirón antes de que llegue el fin de semana verdad? Yo pienso bailarla mientras me maquillo para salir de casa",
    audiovisual: " ",
    video:"https://www.youtube.com/embed/GqOvxbFLwjY",
  },
  11: {
    dateCode: "2020-12-11",
    date: "Viernes 11 de diciembre 2020",
    question: "De qué color es el caballo blanco de Santiago?",
    answer:
      "blanco" ||
      "marron porque se cayo a un charco" ||
      "marrón porque se cayó a un charco" || "anabanana",
    successmessage: "qué tontá, pero no me resistí",
    failmessage: "venga hombre...",
    img_url: "#.jpg",
    dailyMessage: "El azúcar a puñados y las risas a carcajadas",
    audiovisual: require("./images/11.jpg"),
    video:" ",
  },
  12: {
    dateCode: "2020-12-12",
    date: "Sábado 12 de diciembre 2020",
    question: "Quién esta aprendiendo a tocar la guitarra?  ",
    answer: "maría" || "maria" || "anabanana",
    successmessage: "estas navidades nos tocará un villancico o algo no?",
    failmessage: "cómo no has adivinado esta?",
    img_url: "#.jpg",
    dailyMessage: "Hoy toca villancico mono! Para disfrutar del fin de semana!",
    audiovisual: " ",
    video:" https://www.youtube.com/embed/QbnB5npEc7g",
  },
  13: {
    dateCode: "2020-12-13",
    date: "Domingo 13 de diciembre 2020",
    question: "De los hermanos Montalvo Sánchez; quién es el/la mayor?  ",
    answer: "jose" || "tio jose" || "anabanana",
    successmessage: "Esta era fácil",
    failmessage: "en serio no lo sabes?",
    img_url: "#.jpg",
    dailyMessage: "No parecen un anuncio?",
    audiovisual: require("./images/13.jpg"),
    video:" ",
  },
  14: {
    dateCode: "2020-12-14",
    date: "Lunes 14 de diciembre 2020",
    question: "De qué color son las paredes de la habitación de Raquel? ",
    answer: "rosa" ||  "anabanana",
    successmessage: "Esta era fácil",
    failmessage: "En singular! los colores siempre en singular!",
    img_url: "#.jpg",
    dailyMessage: "Hoy os traigo uno de mis postres favoritos, super fácil de hacer y además sano! Espero que os guste!",
    audiovisual: " ",
    video:"https://www.youtube.com/embed/hzhBACaTnQI ",
  },
  15: {
    dateCode: "2020-12-15",
    date: "Martes 15 de diciembre 2020",
    question: "Qué artefacto de cocina colecciona la tia Marisú? ",
    answer: "cafetera" || "cafeteras" || "anabanana",
    successmessage: "Si! Bien hecho!",
    failmessage: "En singular!",
    img_url: "#.jpg",
    dailyMessage: "Oyoyoyoyoyoyoy! insisto: oyoyoyoyoyoyoyoy!",
    audiovisual: require("./images/100.jpg"),
    video:" ",
  },
  16: {
    dateCode: "2020-12-16",
    date: "Miércoles 16 de diciembre 2020",
    question:
      "Qué persona en la familia tiene dos cuentas de instagram, una de ellas privada y una pública ",
    answer: "teresa" || "ana" || "anabanana",
    successmessage: "Esta era fácil",
    failmessage: "Acaso no tienes Insta? o es que no sigues ambas cuentas?",
    img_url: "#.jpg",
    dailyMessage: "Villancico bonito para ir caldeando el ambiente! Que no queda nada para la Navidad! Os lo ponéis mientras os arregláis para empezar el día y ya con buen pie!",
    audiovisual: " ",
    video:"https://www.youtube.com/embed/tlYY8tCQk3c ",
  },
  17: {
    dateCode: "2020-12-17",
    date: "Jueves 17 de diciembre 2020",
    question:
      "Qué animal tuvo como mascota la tía Marisú? (Pista: no duró mucho) ",
    answer: "pez" || "anabanana",
    successmessage: "No duró mucho no?",
    failmessage: "Si no te la sabes pregunta",
    img_url: "#.jpg",
    dailyMessage: "Hoy es sábado y me imagino que todos necesitáis ruido de fondo para dormir la siesta. Os dejo una oda a la nostalgia aqui mismito!",
    audiovisual: " ",
    video:"https://www.youtube.com/embed/D7I6ilsW3ks ",
  },
  18: {
    dateCode: "2020-12-18",
    date: "Viernes 18 de diciembre 2020",
    question: "Quién pinta camisetas y ropita de bebé en la famlia?",
    answer: "carolina" || "carol" || "caroli" || "carola" || "anabanana",
    successmessage: "Y le quedan preciosas oye!",
    failmessage: "Si no te sabes esta, no eres un Montalvo",
    img_url: "#.jpg",
    dailyMessage: "Aqui os dejo una foto que representa perfectamente mi ánimo al empezar el fin de semana. Aiiiis, que mofletes tenía Teresa!!! (Y qué me decís de María al fondo...)",
    audiovisual: require("./images/18.jpg"),
    video:" ",
  },
  19: {
    dateCode: "2020-12-19",
    date: "Sábado 19 de diciembre 2020",
    question: "Quién se cree el más guapo Y HUMILDE de la familia? ",
    answer: "carlos" || "anabanana",
    successmessage: "jajaja, Flipado...",
    failmessage: "Acaso estás intentando colarte?",
    img_url: "#.jpg",
    dailyMessage: "Venga va! espabilad! Que es sábado y el cuerpo lo sabe!!! Os deseo a todos un buen fin de semana!",
    audiovisual: " ",
    video:"https://www.youtube.com/embed/gvd_rqU3lm8",
  },
  20: {
    dateCode: "2020-12-20",
    date: "Domingo 20 de diciembre 2020",
    question: "Dónde fueron de viaje de novios Bego y Juanan? ",
    answer: "cuba" || "anabanana",
    successmessage: "habéis tenido que pedir ayuda para contestar esta?",
    failmessage: "mal, mal, mal, mal",
    img_url: "#.jpg",
    dailyMessage: "Esto confirma que mi padre es un macarra... en la mesa sin camiseta...",
    audiovisual: require("./images/20.jpg"),
    video:" ",
  },

  21: {
    dateCode: "2020-12-21",
    date: "Lunes 21 de diciembre 2020",
    question: "Medio de transporte favorito de Santiago",
    answer: "bicicleta" || "bici" || "anabanana",
    successmessage: "Obvio",
    failmessage: "La palabra entera! no vale acortar",
    img_url: "#.jpg",
    dailyMessage: "Oyoyoyoyoyoyoyooyoy (léase en alto con voz de vieja de la que tira de las mejillas a los jóvenes)",
    audiovisual: require("./images/21.jpg"),
    video:" ",
  },
  22: {
    dateCode: "2020-12-22",
    date: "Martes 22 de diciembre 2020",
    question: "Quién cumple años hoy?",
    answer: "ana" || "anabanana",
    successmessage: "Siii! 29 de nada...",
    failmessage: "Cómo de atreves a equivocarte en esta?",
    img_url: "#.jpg",
    dailyMessage: "Hoy en honor a mi cumple... Fotaza de Ana con estos dos gigantes. Será posible que sea la única en esta familia que no parece un(a) supermodelo? Admitidlo, soy adoptada",
    audiovisual: require("./images/22.jpg"),
    video:" ",
  },
  23: {
    dateCode: "2020-12-23",
    date: "Miércoles 23 de diciembre 2020",
    question: "Quién aspiraba a ser presidente?",
    answer: "carlos" || "anabanana",
    successmessage: "yo le hubiese votado!",
    failmessage: "Si no te sabes esta, no eres un Montalvo",
    img_url: "#.jpg",
    dailyMessage: "Os acordáis de la tía Marisú con el pelo corto?",
    audiovisual: require("./images/23.jpg"),
    video:" ",
  },
  24: {
    dateCode: "2020-12-24",
    date: "Jueves 24 de diciembre 2020",
    question: "Feliz Navidad, Feliz Navidad, próspero año y .... ",
    answer: "felicidad" ,
    successmessage: "Felices fiestas a todos!",
    failmessage: "no seas obstuso anda",
    img_url: "#.jpg",
    dailyMessage: "Pues aqui termina el calendario familia. Que paséis felices fiestas. Espero que os haya gustado! Ahora a comer chocolate, polvorones y turrones como si se acabase el mundo!",
    audiovisual: require("./images/24.jpg"),
    video:" ",
  },
};

import Surprise1 from "./Surprise1";
import CalendarModal from "./CalendarModal";
import TooEarlyPopUp from "./TooEarlyPopUp";

export default {
  name: "Calendar",
  components: {
    Surprise1,
    CalendarModal,
    TooEarlyPopUp,
  },

  data() {
    return {
      isModalOpen: false,
      isTooEarlyPopUpOpen: false,

      DayData: {},
      mensaje: "",
    };
  },

  methods: {
    openTooEarlyPop() {
      this.isTooEarlyPopUpOpen = true;
    },

    closeTooEarlyPop() {
      this.isTooEarlyPopUpOpen = false;
    },

    closeModal() {
      this.isModalOpen = false;
    },

    openModalForDay(DayInteger) {
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

  

        this.isModalOpen = true;
        this.DayData = DaysData[DayInteger];
      
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
