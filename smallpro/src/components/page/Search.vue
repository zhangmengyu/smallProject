<template>
  <div class="m-search">
    <header class="m-search-header">
      <div class="m-search-inputBox">
        <router-link to="/home/edit" class="m-search-back">
          <img src="../../assets/img/back.png" alt="">
        </router-link>
        <div class="m-search-input">
          <input type="text" placeholder="搜索作品名、作者" v-model="inputText" autofocus>
          <a href="javascript:;" class="m-search-quickerase" v-if="inputText" @click="inputText=''">
            <img src="../../assets/img/quickerase.png" alt="">
          </a>
        </div>
        <a class="m-search-button" @click="clickSearch">
          <img src="../../assets/img/search.png" alt="">
        </a>
      </div>
    </header>
    <main class="m-search-container">
      <SearchRecord v-if="!inputText"></SearchRecord>
      <SearchMatch v-else-if="gameName.length" :list="gameName" :input="inputText"></SearchMatch>
      <div class="m-search-toast" v-if="toast">
        <p>搜索内容不能为空</p>
      </div>
    </main>
  </div>
</template>

<script>
  import SearchRecord from '../home/SearchRecord';
  import SearchMatch from '../home/SearchMatch';
  import {getGameName} from '../../api/index';

  export default {
    name: "Search",
    components: {
      SearchRecord,
      SearchMatch
    },
    data() {
      return {
        toast: false,
        inputText: '',
        gameName: []
      }
    },
    watch: {
      inputText() {
        if (!this.inputText) {
          this.gameName = [];
          return;
        }
        let _this = this,
          data = {
            token: '0&a',
            sign: '',
            keyword: this.inputText
          };
        getGameName(data).then(function (res) {
          if (res.isOk) {
            _this.gameName = res.data;
          }
        })
      }
    },
    methods: {
      clickSearch: function () {
        let _this = this;
        if (!_this.inputText) {
          _this.toast = true;
          setTimeout(function () {
            _this.toast = false;
          }, 3000);
        } else {
          _this.$router.push({
            name: 'searchresult',
            params: {
              keyword: _this.inputText
            }
          })
        }
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

    .m-search-inputBox {
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

      .m-search-input {
        position: relative;
        float: left;
        box-sizing: border-box;
        width: 6.02rem;
        height: .68rem;
        margin-left: .1rem;
        background: #F2F2F2;
        padding: .12rem .64rem .12rem .3rem;
        border-radius: .34rem;

        input {
          width: 5.12rem;
          height: .44rem;
          line-height: .44rem;
          border: none;
          font-size: .32rem;
          color: #2C2C2C;
          background: #F2F2F2;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          &::-webkit-input-placeholder { /* WebKit browsers */
            color: #B4BBC8;
          }
          &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
            color: #B4BBC8;
          }
          &::-moz-placeholder { /* Mozilla Firefox 19+ */
            color: #B4BBC8;
          }
          &:-ms-input-placeholder { /* Internet Explorer 10+ */
            color: #B4BBC8;
          }
        }

        .m-search-quickerase {
          position: absolute;
          top: 0;
          right: .14rem;
          display: block;
          width: .48rem;
          height: .48rem;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  .m-search-container {
    margin-top: 1.28rem;
    /*height: 10rem;*/
    /*background: lightyellow;*/
  }

  .m-search-toast {
    position: absolute;
    top: 50%;
    left: 50%;
    box-sizing: border-box;
    width: 3.18rem;
    height: 1rem;
    margin: -.5rem -1.59rem;
    opacity: 0.7;
    background: #000000;
    border-radius: .16rem;
    padding: .34rem 0;
    z-index: 1000;

    p {
      text-align: center;
      font-size: .28rem;
      color: #FFFFFF;
      line-height: .32rem;
    }
  }
</style>
