<template>
  <div class="puerta">
      <div v-if="show_surprise1" @click="show_surprise1 = !show_surprise1">
      <Surprise22></Surprise22>
    </div>

    <div v-else-if="!show_surprise1" @click="show_surprise1 = true">
      <p class="numbers">22</p>
    </div>
  </div>
</template>

<script>
import Surprise22 from "./Surprise22";
export default {
  name: 'Day22',
  components: {
    Surprise22,
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
