<template>
  <div class="puerta">
      <div v-if="show_surprise1" @click="show_surprise1 = !show_surprise1">
      <Surprise17></Surprise17>
    </div>

    <div v-else-if="!show_surprise1" @click="show_surprise1 = true">
      <p class="numbers">17</p>
    </div>
  </div>
</template>

<script>
import Surprise17 from "./Surprise17";
export default {
  name: 'Day17',
  components: {
    Surprise17,
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
