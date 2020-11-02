<template>
  <div class="puerta">
      <div v-if="show_surprise1" @click="show_surprise1 = !show_surprise1">
      <Surprise23></Surprise23>
    </div>

    <div v-else-if="!show_surprise1" @click="show_surprise1 = true">
      <p class="numbers">23</p>
    </div>
  </div>
</template>

<script>
import Surprise23 from "./Surprise23";
export default {
  name: 'Day23',
  components: {
    Surprise23,
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
