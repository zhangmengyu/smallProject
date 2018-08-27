<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="less">
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
