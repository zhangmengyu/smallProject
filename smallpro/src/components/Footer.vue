<template>

</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        selected: "home"
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
</style>
