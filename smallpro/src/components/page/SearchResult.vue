<template>
  <div class="m-searchResult">
    <mt-header fixed :title="title">
      <router-link to="/search" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="m-sr-container">
      <div class="m-sr-hasResult" v-if="hasResult">
        <ul class="m-sr-List clear" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
          <li v-for="(item,index) in workList" :key="index">
            <a href="javascript:;">
              <img :src="item.thumb" alt="">
              <div class="m-sr-work">
                <p>
                  <span class="m-sr-workWord">{{item.release_word_sum}}</span>
                </p>
              </div>
            </a>
            <p class="m-sr-workTitle">{{item.gname}}</p>
            <p class="m-sr-workAuthor">{{item.author_name}}</p>
          </li>
        </ul>
      </div>
      <div class="m-sr-noResult" v-else>
        <img src="../../assets/img/norole.png" alt="">
        <p>未搜索到相关内容</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {getGamebyKeyword} from '../../api';

  export default {
    name: "SearchResult",
    data() {
      return {
        resultNum: 0,
        hasResult: true,
        title: `搜索结果 (0)`,
        keyword: this.$route.params.keyword,
        workList: [],
        page: 1,
        totalPages: 0,
        loading: false,
        allLoaded: false
      }
    },
    watch: {
      workList() {
        this.resultNum = this.workList.length;
        this.title = `搜索结果 (${this.resultNum})`;
      }
    },
    /*created() {
      this.getData();
    },*/
    methods: {
      getData() {
        let _this = this,
          data = {
            token: "0&a",
            sign: '',
            keyword: this.keyword,
            page: this.page
          };
        getGamebyKeyword(data).then(function (res) {
          if (res.isOk) {
            _this.workList = _this.workList.concat(res.data.list);
            _this.totalPages = res.data.totalPages;
          }
        })
      },
      loadMore() {
        this.loading = true;
        if (this.page === 1) {
          this.getData();
          this.page++;
        } else if (this.page > 1 && this.page <= this.totalPages) {
          setTimeout(() => {
            this.getData();
            this.page++;
          }, 1000);
        } else {
          this.allLoaded = true;
        }
        this.loading = false;
      }
    }
  }
</script>

<style scoped lang="less">
  .mint-header {
    background-color: #ffffff;
    height: 1.3rem;
    color: #354168;
    font-size: .36rem;
    padding: .56rem .3rem 0;

    .mint-header-button {
      height: .5rem;

      a {
        height: .5rem;
        line-height: .5rem;

        button {
          height: .5rem;
          color: #333333;

          .mint-button-icon {
            line-height: .5rem;
          }
        }
      }
    }

    .mint-header-title {
      line-height: .5rem;
    }
  }

  .m-sr-container {
    margin-top: 1.3rem;

    .m-sr-noResult {
      padding-top: 1.8rem;

      img {
        display: block;
        width: 4.4rem;
        height: 4.4rem;
        margin: 0 auto .4rem;
      }

      p {
        line-height: .4rem;
        text-align: center;
        font-size: .28rem;
        color: #C2C2C2;
      }
    }

    .m-sr-hasResult {
      padding: .36rem .3rem;
      .m-sr-List {

        li {
          float: left;
          width: 2.1rem;
          height: 3.82rem;
          margin-right: .3rem;
          margin-bottom: .3rem;

          &:nth-of-type(3n) {
            margin-right: 0;
          }

          a {
            position: relative;
            display: block;
            width: 100%;
            height: 2.814rem;
            border-radius: .16rem;
            overflow: hidden;
            background: aqua;

            img {
              width: 100%;
              height: 100%;
            }

            .m-sr-work {
              position: absolute;
              bottom: 0;
              left: 0;
              box-sizing: border-box;
              width: 100%;
              height: 1.064rem;
              padding: .66rem 0 0 .08rem;
              background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%);

              & > p {
                line-height: .32rem;
                height: .32rem;

                span {
                  position: relative;
                  display: block;

                  &.m-sr-workWord {
                    float: left;
                    width: .32rem;
                    height: .32rem;
                    margin-left: .34rem;
                    font-size: .24rem;
                    color: #FFFFFF;

                    &::before {
                      position: absolute;
                      top: 0;
                      left: -.34rem;
                      content: '';
                      width: .32rem;
                      height: .32rem;
                      background: url("../../assets/img/font.png") no-repeat;
                      background-size: 100%;
                    }
                  }
                }
              }
            }
          }

          & > p {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            &.m-sr-workTitle {
              height: .44rem;
              line-height: .44rem;
              margin-top: .12rem;
              font-size: .32rem;
              font-weight: bold;
              color: #354168;
            }

            &.m-sr-workAuthor {
              height: .4rem;
              line-height: .4rem;
              margin-top: .04rem;
              font-size: .28rem;
              color: #919BB0;
            }
          }
        }
      }
    }
  }
</style>
