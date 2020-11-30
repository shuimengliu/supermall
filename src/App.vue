<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bad></main-tab-bad>
  </div>
</template>

<script>
import MainTabBad from 'components/content/maintabbar/MainTabBad'
  
  export default {
    name: 'app',
    components: {
      MainTabBad,
    }
  }
</script>

<style lang="stylus">

</style>
