<template>
  <div class="m-channel">
    <mt-header fixed :title="title">
      <router-link to="/home/edit" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="m-channel-container">
      <ul class="m-channel-List clear" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
        <li v-for="(item,index) in workList" :key="index">
          <a href="javascript:;">
            <img :src="item.thumb" alt="">
            <div class="m-home-sWorkIntro">
              <p>
                <span class="m-home-sWorkCollect"
                      @click="clickCollect(index, item.is_fav, item.tid, item.gindex, item.version)">
                <img :src="item.is_fav ? favoriteImg : noFavoriteImg" alt="">
              </span>
                <span class="m-home-sWorkLike">
                <img :src="item.is_praise ? praiseImg : noPraiseImg" alt="">
              </span>
                <span class="m-home-sWorkLabel m-home-WorkLabel3">
                精修中
              </span>
              </p>
            </div>
            <span class="m-home-sRecommend">
              <img src="../../../assets/img/recommend.png" alt="">
            </span>
          </a>
          <p>{{item.gname}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {getEditDatabyType, setCollection, cannelCollection} from '../../../api';

  export default {
    name: "Channel",
    data() {
      return {
        tid: parseInt(this.$route.params.tid),
        workList: [],
        title: this.$route.params.title,
        isLogin: true,
        page: 1,
        totalPages: 0,
        loading: false,
        allLoaded: false,
        favoriteImg: require('../../../assets/img/collected.png'),
        noFavoriteImg: require('../../../assets/img/collect.png'),
        praiseImg: require('../../../assets/img/liked.png'),
        noPraiseImg: require('../../../assets/img/like.png')
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
            tid: this.tid,
            page: this.page,
            pageSize: 20
          };
        getEditDatabyType(data).then(function (res) {
          if (res.isOk) {
            _this.workList = _this.workList.concat(res.data.list);
            // _this.page++;
            _this.totalPages = res.data.totalPages;
            // _this.page > _this.totalPages ? _this.allLoaded = true : null;
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
      },
      //点击收藏图标
      clickCollect: function (index, favorite, tid, gindex, version) {
        let _this = this;
        if (!_this.isLogin) {
          alert('未登录');
          return;
        }
        if (favorite) {
          let data = {
            token: '0&a',
            sign: 'a',
            tid,
            gindex
          };
          cannelCollection(data).then(function (res) {
            if (res.isOk) {
              _this.workList[index]['is_fav'] = 0;
            }
          });
        } else {
          let data = {
            token: '0&a',
            sign: 'a',
            tid,
            gindex,
            version
          };
          setCollection(data).then(function (res) {
            if (res.isOk) {
              _this.workList[index]['is_fav'] = 1;
            }
          });
        }
      },
    }
  }
</script>

<style lang="less">
  .mint-header {
    background-color: #ffffff;
    height: 1.3rem;
    color: #2C2C2C;
    font-family: PingFangSC-Regular;
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

  .m-channel-container {
    margin-top: 1.3rem;
    margin-bottom: .98rem;
    padding: .3rem .44rem;

    .m-channel-List {
      width: 100%;

      li {
        float: left;
        width: 2rem;
        height: 3.2rem;
        margin-right: .3rem;
        margin-bottom: .44rem;

        &:nth-of-type(3n) {
          margin-right: 0;
        }

        a {
          position: relative;
          display: block;
          width: 100%;
          height: 2.68rem;
          border-radius: .16rem;
          overflow: hidden;
          background: aqua;

          img {
            width: 100%;
            height: 100%;
          }

          .m-home-sWorkIntro {
            position: absolute;
            top: 0;
            left: 0;
            box-sizing: border-box;
            width: 100%;
            height: .864rem;
            padding: .14rem .04rem 0 0;
            background-image: linear-gradient(0deg, rgba(238, 238, 238, 0.00) 3%, rgba(0, 0, 0, 0.77) 100%);

            & > p {
              line-height: .34rem;
              height: .34rem;
              overflow: hidden;

              span {
                display: block;

                &.m-home-sWorkCollect, &.m-home-sWorkLike {
                  float: left;
                  width: .32rem;
                  height: .32rem;
                  margin-left: .05rem;

                  img {
                    width: 100%;
                    height: 100%;
                  }
                }

                &.m-home-sWorkLabel {
                  float: right;
                  box-sizing: border-box;
                  line-height: .24rem;
                  height: .34rem;
                  border-radius: 1rem;
                  padding: .04rem .12rem;
                  font-family: PingFangSC-Regular;
                  font-size: .2rem;
                }
              }
            }

          }

          .m-home-sRecommend {
            position: absolute;
            bottom: .2rem;
            left: 0;
            display: block;
            width: .94rem;
            height: .4rem;

            img {
              height: 100%;
            }
          }
        }

        & > p {
          width: 100%;
          height: .4rem;
          line-height: .4rem;
          margin-top: .12rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-family: PingFangSC-Medium;
          font-size: .28rem;
          color: #2C2C2C;
        }
      }
    }
  }
</style>


