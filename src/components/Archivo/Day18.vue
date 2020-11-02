<template>
  <div class="puerta">
      <div v-if="show_surprise1" @click="show_surprise1 = !show_surprise1">
      <Surprise18></Surprise18>
    </div>

    <div v-else-if="!show_surprise1" @click="show_surprise1 = true">
      <p class="numbers">18</p>
    </div>
  </div>
</template>

<script>
import Surprise18 from "./Surprise18";
export default {
  name: 'Day18',
  components: {
    Surprise18,
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
