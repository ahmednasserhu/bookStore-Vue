<template>
  <div>
    <homecomponent/>
  </div>
</template>
<script>

import homecomponent from './components/homecomponent.vue';
export default {
  name: "App",
  components:{
    homecomponent
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
