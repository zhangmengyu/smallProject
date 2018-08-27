<template>
  <div id="app">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="home">
        <Home/>
      </mt-tab-container-item>
      <mt-tab-container-item id="bookshelf">
        <Channel/>
      </mt-tab-container-item>
      <mt-tab-container-item id="produce">
        <Search/>
      </mt-tab-container-item>
      <mt-tab-container-item id="personal">
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <!--<router-link to="/home">-->
        <img slot="icon" :src="tabSelected.isHome ? home_active : home">
        首页
        <!--</router-link>-->
      </mt-tab-item>
      <mt-tab-item id="bookshelf">
        <!--<router-link to="/bookshelf">-->
        <img slot="icon" :src="tabSelected.isBookshelf ? bookshelf_active : bookshelf">
        书架
        <!--</router-link>-->
      </mt-tab-item>
      <mt-tab-item id="produce">
        <!--<router-link to="/produce">-->
        <img slot="icon" :src="tabSelected.isProduce ? produce_active : produce">
        创作
        <!--</router-link>-->
      </mt-tab-item>
      <mt-tab-item id="personal">
        <!--<router-link to="/personal">-->
        <img slot="icon" :src="tabSelected.isPersonal ? personal_active : personal">
        我的
        <!--</router-link>-->
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import Home from './components/Home';
  import Channel from './components/home/second/Channel';
  import Search from './components/home/second/Search';

  export default {
    name: 'App',
    components: {
      Search,
      Home,
      Channel
    },
    data() {
      return {
        selected: "home",
        tabSelected: {
          isHome: true,
          isBookshelf: false,
          isProduce: false,
          isPersonal: false,
        },
        home: require('./assets/home_gray.png'),
        home_active: require('./assets/home.png'),
        bookshelf: require('./assets/bookshelf_gray.png'),
        bookshelf_active: require('./assets/bookshelf.png'),
        produce: require('./assets/produce_gray.png'),
        produce_active: require('./assets/produce.png'),
        personal: require('./assets/personal_gray.png'),
        personal_active: require('./assets/personal.png'),
      }
    },
    watch: {
      selected: function (val, oldVal) {
        // 这里就可以通过 val 的值变更来确定
        for (let item in this.tabSelected) {
          this.tabSelected[item] = false;
        }
        switch (val) {
          case 'home':
            this.tabSelected.isHome = true;
            break;
          case 'bookshelf':
            this.tabSelected.isBookshelf = true;
            break;
          case 'produce':
            this.tabSelected.isProduce = true;
            break;
          case 'personal':
            this.tabSelected.isPersonal = true;
            break;
        }
      }
    }
  }
</script>

<style lang="less">
  .mint-tabbar.is-fixed {
    bottom: -.01rem;
    height: .98rem;
    background: #F9F9F9;
    box-shadow: 0 -.02rem 0 0 #E7E7E7;

    .mint-tab-item {
      padding: .1rem 0 0;
      color: #A1A1A1;

      .mint-tab-item-icon {
        width: .48rem;
        height: .48rem;
        margin: 0 auto 0.04rem;
      }

      .mint-tab-item-label {
        font-family: PingFangSC-Regular;
        font-size: .22rem;
        line-height: .32rem;
      }

      &.is-selected {
        background-color: #F9F9F9;
        color: #FF656D;
      }
    }
  }

  /*连载中*/
  .m-home-WorkLabel1 {
    background: #BDF3BB;
    color: #1DB41A;
  }

  /*完结*/
  .m-home-WorkLabel2 {
    background: #FFD8D8;
    color: #F5676A;
  }

  /*精修中*/
  .m-home-WorkLabel3 {
    background: #D2EBFF;
    color: #2E9BFF;
  }

  /*部分完结*/
  .m-home-WorkLabel4 {
    background: #FFEBB5;
    color: #F69A06;
  }
</style>
