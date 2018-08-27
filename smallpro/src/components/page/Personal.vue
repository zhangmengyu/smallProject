<template>
  <div>
    我的
    <Footer :selected="selected" :tabs="tabs"></Footer>
  </div>
</template>

<script>
  import Footer from '../base/Footer'

  export default {
    name: "Personal",
    components: {
      Footer
    },
    data() {
      return {
        selected: "personal",
        tabs: [
          require('../../assets/img/home_gray.png'),
          require('../../assets/img/bookshelf_gray.png'),
          require('../../assets/img/produce_gray.png'),
          require('../../assets/img/personal.png')
        ]
      }
    }
  }
</script>

<style scoped>

</style>
