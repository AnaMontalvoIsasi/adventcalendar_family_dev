<template>
  <div class="puerta">
      <div v-if="show_surprise1" @click="show_surprise1 = !show_surprise1">
      <Surprise19></Surprise19>
    </div>

    <div v-else-if="!show_surprise1" @click="show_surprise1 = true">
      <p class="numbers">19</p>
    </div>
  </div>
</template>

<script>
import Surprise19 from "./Surprise19";
export default {
  name: 'Day19',
  components: {
    Surprise19,
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
