<template>
  <div class="puerta">
     <div v-if="show_surprise1" @click="show_surprise1 = !show_surprise1">
      <Surprise2></Surprise2>
    </div>

    <div v-else-if="!show_surprise1" @click="show_surprise1 = true">
      <p class="numbers">2</p>
    </div>
  </div>
</template>

<script>

import Surprise2 from "./Surprise2";
export default {
  name: 'Day2',
  components: {
    Surprise2,
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
