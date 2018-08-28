<template>
  <div class="m-home-sort">
    <h2>
      {{myTitle}}
      <router-link :to="{name: 'channel', params:{title:myTitle,tid:myTid}}">
        <span>更多</span>
      </router-link>
    </h2>
    <div class="m-home-sortList">
      <ul class="clear" :style="listWidth">
        <li v-for="(item, index) in mySort" :key="index">
          <a href="javascript:;">
            <img :src="item.thumb" alt="">
            <div class="m-home-sWorkIntro">
              <p>
                <span class="m-home-sWorkCollect"
                      @click="clickCollect(index, item.favorite, item.tid, item.gindex, item.version)">
                <img :src="item.favorite ? favoriteImg : noFavoriteImg" alt="">
              </span>
                <span class="m-home-sWorkLike" @click="clickLike">
                <img :src="item.praise ? praiseImg : noPraiseImg" alt="">
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
        <!--<li class="m-home-sortLoading">
          <img src="../assets/loading.png" alt="">
          加载中…
        </li>-->
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import IScroll from 'iscroll/build/iscroll.js';

  export default {
    name: "sort",
    props: ['sort', 'title', 'tid'],
    data() {
      return {
        isLogin: true,
        mySort: this.sort,
        myTitle: this.title,
        myTid: this.tid,
        favoriteImg: require('../../../assets/img/collected.png'),
        noFavoriteImg: require('../../../assets/img/collect.png'),
        praiseImg: require('../../../assets/img/liked.png'),
        noPraiseImg: require('../../../assets/img/like.png')
      }
    },
    computed: {
      listWidth() {
        return {
          width: `${(this.sort.length) * 2.3}rem`
        }
      }
    },
    mounted() {
      let list = document.querySelectorAll('.m-home-sortList');
      list.forEach(function (item, index) {
        let myScroll = new IScroll(item, {
          scrollX: true
        });
        // console.log(myScroll);
      });
      /*myScroll.on('beforeScrollStart', function (e) {
        e.stopPropagation();
      });*/
    },
    methods: {
      //点击收藏图标
      clickCollect: function (index, favorite, tid, gindex, version) {
        if (!this.isLogin) {
          alert('未登录');
          return;
        }
        if (favorite) {
          this.$emit('cannelCollect', tid, gindex);
          this.mySort[index]['favorite'] = 0;
        } else {
          this.$emit('setCollect', tid, gindex, version);
          this.mySort[index]['favorite'] = 1;
        }
      },
      //点击点赞图标
      clickLike: function (e) {
        if (!this.isLogin) {
          alert('未登录');
          return;
        }
        console.log('clickLike');
      }
    }
  }
</script>

<style scoped lang="less">
  .m-home-sort {
    box-sizing: border-box;
    width: 100%;
    height: 4.34rem;
    margin: 0 0 .34rem 0;

    h2 {
      font-family: PingFangSC-Medium;
      font-size: .36rem;
      color: #2C2C2C;
      line-height: .5rem;
      margin-bottom: .3rem;
      /*padding-right: .2rem;*/
      margin-left: .3rem;

      a {
        float: right;
        height: .5rem;
        line-height: .5rem;
        margin-right: .56rem;

        span {
          position: relative;
          font-family: PingFangSC-Regular;
          font-size: .28rem;
          color: #999999;

          &::after {
            position: absolute;
            top: .02rem;
            right: -.36rem;
            content: '';
            background: url("../../../assets/img/return.png") no-repeat;
            width: .36rem;
            height: .36rem;
            background-size: 100%;
          }
        }
      }
    }

    .m-home-sortList {
      position: relative;
      width: 100%;
      height: 3.2rem;
      overflow: hidden;

      ul {
        width: 50rem;
        padding: 0 .16rem 0 .3rem;

        li {
          float: left;
          width: 2rem;
          height: 3.2rem;
          margin-right: .3rem;

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
  }
</style>
