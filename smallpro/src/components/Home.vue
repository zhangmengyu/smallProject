<template>
  <main class="m-home">
    <mt-navbar v-model="active" class="clear" fixed>
      <mt-tab-item id="tabContainer1">编辑推荐</mt-tab-item>
      <mt-tab-item id="tabContainer2">全部作品</mt-tab-item>
      <a href="javascript:;" class="m-home-search">
        <img src="../assets/search@2x.png" alt="">
      </a>
    </mt-navbar>
    <mt-tab-container v-model="active" swipeable>
      <mt-tab-container-item id="tabContainer1">
        <Edit/>
      </mt-tab-container-item>
      <mt-tab-container-item id="tabContainer2">
        <Library/>
      </mt-tab-container-item>
    </mt-tab-container>
  </main>
</template>

<script>
  import Edit from './Edit';
  import Library from './Library';

  export default {
    name: 'Home',
    components: {
      Edit,
      Library
    },
    data() {
      return {
        active: 'tabContainer1'
      }
    }
  }
</script>

<style lang="less">
  .mint-navbar {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 1.4rem;
    background: #fff;
    padding: .62rem 0 0 .32rem;
    z-index: 1;

    .mint-tab-item {
      float: left;
      height: .6rem;
      line-height: .6rem;
      padding: 0;
      font-family: PingFangSC-Medium;
      /*font-weight: bold;*/
      margin-right: .32rem;
      cursor: pointer;

      &.is-selected {
        margin-bottom: 0;
        border: none;

        .mint-tab-item-label {
          color: #FF656D;
          opacity: 1;
          font-size: .44rem;
          line-height: .6rem;
          margin-top: 0;
        }
      }

      .mint-tab-item-label {
        color: #2C2C2C;
        opacity: 0.38;
        font-size: .32rem;
        line-height: .44rem;
        margin-top: .12rem;
      }
    }
  }

  .m-home > .mint-tab-container {
    /*height: 15rem;*/
    margin-top: 1.4rem;
    /*margin-bottom: .98rem;*/
  }

  .m-home-search {
    float: right;
    margin-top: .1rem;
    margin-right: .32rem;
    display: block;
    width: .36rem;
    height: .36rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
