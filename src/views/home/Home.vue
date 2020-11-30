<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <div>购物车</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: "Home",
    components: {
      NavBar
    },
    data() {
      return {
        
      }
    },
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
  }
</style>
