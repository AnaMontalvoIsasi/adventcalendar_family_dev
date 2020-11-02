<template>
  <div class="puerta">
      <div v-if="show_surprise1" @click="show_surprise1 = !show_surprise1">
      <Surprise3></Surprise3>
    </div>

    <div v-else-if="!show_surprise1" @click="show_surprise1 = true">
      <p class="numbers">3</p>
    </div>
  </div>
</template>

<script>
import Surprise3 from "./Surprise3";
export default {
  name: 'Day3',
  components: {
    Surprise3,
  },

  data() {
     return {
      show_surprise1 : false,
          };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
