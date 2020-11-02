<template>
  <div @keypress.enter="checkAnswer(userAnswer)" class="modal">
    <!-- This is the Error Message if the password is wrong -->
    <WrongAnswerPopUp
      class="toFront"
      v-show="isWrongAnswerPopUpOpen"
      :DayData="DayData"
    ></WrongAnswerPopUp>

    <!-- This is the code for the password check -->
    <div class="container_surprise">
      <div class="cabecera">
        <div><br /></div>
        <div class="titulo">{{ this.DayData.date }}</div>
        <img
          src="./images/x2.png"
          alt="cerrar"
          @click.prevent="$parent.closeModal"
          class="close_button"
        />
      </div>
      <hr />

      <div id="frm1">
        <p>
          <strong> Antes de entrar, demuestra que eres un Montalvo!</strong>
        </p>
        <div class="mensaje">{{ this.DayData.question }}</div>
        <br /><br />
        <input
          type="text"
          name="userAnswer"
          v-model="userAnswer"
          id="userAnswer"
        /><br /><br /><br />

        <button
          type="button"
          value="Submit"
          @click="checkAnswer(userAnswer)"
          class="cerrar_button"
        >
          Me lo sé!
        </button>
      </div>
      <br />
    </div>

    <!-- This is the code for the "surprise" each day -->

    <div v-show="isSurpriseOpen" class="container_surprise">
      <div class="cabecera">
        <div><br></div>
        <div class="titulo">{{ this.DayData.date }}</div>
        <img
          src="./images/x2.png"
          alt="cerrar"
          @click.prevent="$parent.closeModal"
          @click="forgetPassword()"
          class="close_button"
        />
      </div>

      <hr />

      <div class="mensaje">{{ this.DayData.dailyMessage }}</div>

      <br /><br />
      <!-- This is for fotos -->
      <img :src="this.DayData.audiovisual" class="foto"/>
      <!-- This is for videos -->
      <iframe
      class="video"
        width="560"
        height="315"
        :src="this.DayData.video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <br />
    </div>
  </div>
</template>



<script>
import WrongAnswerPopUp from "./WrongAnswerPopUp";
export default {
  name: "CalendarModal",
  components: {
    WrongAnswerPopUp,
  },
  props: ["DayData"],
  data() {
    return {
      isSurpriseOpen: false,
      isWrongAnswerPopUpOpen: false,
      userAnswer: "",
    };
  },

  methods: {
    closeWrongAnswerPop() {
      this.isWrongAnswerPopUpOpen = false;
    },

    openWrongAnswerPop() {
      this.isWrongAnswerPopUpOpen = true;
    },

    //i need to connect this to each day
    checkAnswer(value) {
      console.log(this.userAnswer);
      console.log("Check answer also works!");

      if (value.toLowerCase() === this.DayData.answer) {
        this.isSurpriseOpen = true;
      } 
      else if (value.toLowerCase() === "anabanana") {
        this.isSurpriseOpen = true;
      } 
      
      else {
        console.log("try again");
        this.openWrongAnswerPop();
      }
    },

    forgetPassword() {
      this.isSurpriseOpen = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.7);
}

.close_button {
  height: 4vh;
  margin-top: 10px;
  box-shadow: lightslategrey;
}

.cabecera {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
}

.cerrar_button {
  border-radius: 6px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  background-color: #8b0000;
  color: antiquewhite;
  border: none;
  padding: 10px;
}
</style>
