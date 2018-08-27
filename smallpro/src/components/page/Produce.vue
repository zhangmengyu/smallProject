<template>
  <div>
    创作
    <Footer :selected="selected" :tabs="tabs"></Footer>
  </div>
</template>

<script>
  import Footer from '../base/Footer'

  export default {
    name: "Produce",
    components: {
      Footer
    },
    data() {
      return {
        selected: "produce",
        tabs: [
          require('../../assets/img/home_gray.png'),
          require('../../assets/img/bookshelf_gray.png'),
          require('../../assets/img/produce.png'),
          require('../../assets/img/personal_gray.png')
        ]
      }
    }
  }
</script>

<style scoped>

</style>
