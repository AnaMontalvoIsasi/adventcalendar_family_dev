<template>
  <div class="puerta">
      <div v-if="show_surprise1" @click="show_surprise1 = !show_surprise1">
      <Surprise20></Surprise20>
    </div>

    <div v-else-if="!show_surprise1" @click="show_surprise1 = true">
      <p class="numbers">20</p>
    </div>
  </div>
</template>

<script>
import Surprise20 from "./Surprise20";

export default {
  name: 'Day20',
  components: {
    Surprise20,
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
