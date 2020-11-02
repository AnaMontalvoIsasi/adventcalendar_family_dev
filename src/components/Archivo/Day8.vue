<template>
  <div class="puerta">
      <div v-if="show_surprise1" @click="show_surprise1 = !show_surprise1">
      <Surprise8></Surprise8>
    </div>

    <div v-else-if="!show_surprise1" @click="show_surprise1 = true">
      <p class="numbers">8</p>
    </div>
  </div>
</template>

<script>
import Surprise8 from "./Surprise8";
export default {
  name: 'Day8',
  components: {
    Surprise8,
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
