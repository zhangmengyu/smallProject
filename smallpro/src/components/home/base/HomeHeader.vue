<template>
  <mt-navbar v-model="message" class="clear" fixed>
    <mt-tab-item id="edit">编辑推荐</mt-tab-item>
    <mt-tab-item id="library">全部作品</mt-tab-item>
    <router-link to="/home/search" class="m-home-search">
      <img src="../../../assets/img/search.png" alt="">
    </router-link>
  </mt-navbar>
</template>

<script>
  export default {
    name: "HomeHeader",
    data() {
      return {
        message: this.selected
      }
    },
    props: {
      selected: String
    },
    watch: {
      message: function (val, oldVal) {
        // 这里就可以通过 val 的值变更来确定去向
        switch (val) {
          case 'edit':
            this.$router.push('/home/edit');
            break;
          case 'library':
            this.$router.push('/home/library');
            break;
        }
      }
    }
  }
</script>

<style lang="less">
  .mint-navbar.is-fixed {
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

  .m-home-search {
    float: right;
    margin-top: .1rem;
    margin-right: .32rem;
    display: block;
    width: .48rem;
    height: .48rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
