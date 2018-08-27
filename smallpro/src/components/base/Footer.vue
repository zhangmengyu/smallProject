<template>
  <mt-tabbar v-model="message" fixed>
    <mt-tab-item id="home">
      <img slot="icon" :src="this.atabs[0]">
      首页
    </mt-tab-item>
    <mt-tab-item id="bookshelf">
      <img slot="icon" :src="this.atabs[1]">
      书架
    </mt-tab-item>
    <mt-tab-item id="produce">
      <img slot="icon" :src="this.atabs[2]">
      创作
    </mt-tab-item>
    <mt-tab-item id="personal">
      <img slot="icon" :src="this.atabs[3]">
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        message: this.selected,
        atabs: this.tabs,
        routes: this.$route.path,
      }
    },
    props: ['selected','tabs'],
    watch: {
      message: function (val, oldVal) {
        // 这里就可以通过 val 的值变更来确定去向
        switch (val) {
          case 'home':
            this.$router.push('/home/edit');
            break;
          case 'bookshelf':
            this.$router.push('/bookshelf');
            break;
          case 'produce':
            this.$router.push('/produce');
            break;
          case 'personal':
            this.$router.push('/personal');
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
      padding: .06rem 0 0;
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
</style>
