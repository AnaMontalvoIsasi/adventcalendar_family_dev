<template>
  <div class="puerta">
      <div v-if="show_surprise1" @click="show_surprise1 = !show_surprise1">
      <Surprise24></Surprise24>
    </div>

    <div v-else-if="!show_surprise1" @click="show_surprise1 = true">
      <p class="numbers">24</p>
    </div>
  </div>
</template>

<script>
import Surprise24 from "./Surprise24";
export default {
  name: 'Day24',
  components: {
    Surprise24,
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
