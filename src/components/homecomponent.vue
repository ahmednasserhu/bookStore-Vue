<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <navbar />
    <!-- <bookwrapper /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from "./navbar.vue";
// import bookwrapper from "./bookwrapper.vue";
export default {
  components: {
    // bookwrapper,
    navbar,
  }
}
</script>

<style>

</style>