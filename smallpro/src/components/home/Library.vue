<template>
  <main>
    <transition name="slide">
      <HomeHeader :selected="selected"></HomeHeader>
      全部作品页
    </transition>
  </main>
</template>

<script>
  import HomeHeader from './base/HomeHeader'

  export default {
    name: "Library",
    components: {
      HomeHeader
    },
    data() {
      return {
        selected: 'library'
      }
    }
  }
</script>

<style scoped>
  main {
    height: 100%;
  }
</style>
