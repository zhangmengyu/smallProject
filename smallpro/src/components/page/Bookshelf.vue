<template>
  <div>
    书架
    <Footer :selected="selected" :tabs="tabs"></Footer>
  </div>
</template>

<script>
  import Footer from '../base/Footer'

  export default {
    name: "Bookshelf",
    components: {
      Footer
    },
    data() {
      return {
        selected: "bookshelf",
        tabs: [
          require('../../assets/img/home_gray.png'),
          require('../../assets/img/bookshelf.png'),
          require('../../assets/img/produce_gray.png'),
          require('../../assets/img/personal_gray.png')
        ]
      }
    }
  }
</script>

<style scoped>

</style>
