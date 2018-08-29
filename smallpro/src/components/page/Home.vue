<template>
  <main class="m-home">
    <router-view></router-view>
    <Footer :selected="selected" :tabs="tabs" v-if="this.$route.path !== '/home/search' && this.$route.path !== '/home/searchresult'"></Footer>
  </main>
</template>
<script>
  import Footer from '../base/Footer';

  export default {
    name: 'Home',
    components: {
      Footer
    },
    data() {
      return {
        active: 'edit',
        selected: "home",
        tabs: [
          require('../../assets/img/home.png'),
          require('../../assets/img/bookshelf_gray.png'),
          require('../../assets/img/produce_gray.png'),
          require('../../assets/img/personal_gray.png')
        ]
      }
    }
  }
</script>

<style lang="less">


</style>
<!--<mt-tab-container v-model="active">-->
<!--<mt-tab-container-item id="edit">-->
<!--&lt;!&ndash;<Edit/>&ndash;&gt;-->
<!--</mt-tab-container-item>-->
<!--<mt-tab-container-item id="library">-->
<!--&lt;!&ndash;<Library/>&ndash;&gt;-->
<!--</mt-tab-container-item>-->
<!--</mt-tab-container>-->
<!--swipeable-->
