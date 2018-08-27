<template>
  <div class="m-search">
    <header class="m-search-header">
      <div class="m-search-input">
        <router-link to="/home" class="m-search-back">
          <img src="" alt="">
        </router-link>
        <input type="text" placeholder="搜索作品名、作者">
        <a href="javascript:;" class="m-search-button">
          <img src="../../../assets/search.png" alt="">
        </a>
      </div>
    </header>
    <main class="m-search-container">
      <SearchRecord/>
    </main>
  </div>
</template>

<script>
  import SearchRecord from '../component/SearchRecord'

  export default {
    name: "Search",
    components: {SearchRecord},
    component: {
      SearchRecord
    },
    data() {
      return {
        value: ''
      }
    }
  }
</script>

<style scoped lang="less">
  .m-search-header {
    position: fixed;
    top: 0;
    box-sizing: border-box;
    width: 100%;
    height: 1.28rem;
    background: #ffffff;
    padding: .5rem .16rem .1rem;

    .m-search-input {
      height: .68rem;
      margin: 0 auto;

      a {
        display: block;
        width: .48rem;
        height: .48rem;
        margin-top: .1rem;

        img {
          width: 100%;
          height: 100%;
        }

        &.m-search-back {
          float: left;
        }

        &.m-search-button {
          float: right;
        }
      }

      input {
        width: 6.02rem;
        height: .68rem;
        margin-left: .1rem;
        background: #F2F2F2;
        border-radius: .34rem;
        border: none;
        padding: .12rem .3rem;
      }
    }
  }

  .m-search-container {
    margin-top: 1.28rem;
    /*height: 10rem;*/
    /*background: lightyellow;*/
  }
</style>
