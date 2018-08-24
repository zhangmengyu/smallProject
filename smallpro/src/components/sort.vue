<template>
  <div class="m-home-sort">
    <h2>
      悬疑反转
      <a href="javascript:;"><span>更多</span></a>
    </h2>
    <div class="m-home-sortList">
      <ul class="clear">
        <li v-for="(item,index) in sort" :key="index">
          <a href="javascript:;">
            <img :src="item.thumb" alt="">
            <div class="m-home-sWorkIntro">
              <p>
                <span class="m-home-sWorkCollect">
                <img :src="item.favorite ? favoriteImg : noFavoriteImg" alt="">
              </span>
                <span class="m-home-sWorkLike">
                <img :src="item.praise ? praiseImg : noPraiseImg" alt="">
              </span>
                <span class="m-home-sWorkLabel m-home-WorkLabel3">
                精修中
              </span>
              </p>
            </div>
            <span class="m-home-sRecommend">
              <img src="../assets/recommend@3x.png" alt="">
            </span>
          </a>
          <p>{{item.gname}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import IScroll from 'iscroll/build/iscroll.js';

  export default {
    name: "sort",
    props: {
      sort: Array
    },
    data() {
      return {
        favoriteImg: require('../assets/collected.png'),
        noFavoriteImg: require('../assets/collect.png'),
        praiseImg: require('../assets/liked.png'),
        noPraiseImg: require('../assets/like.png')
      }
    },
    ready: function () {
      var myScroll = new IScroll('.m-home-sortList');
      console.log(myScroll);

    },
    methods: {
      //手指滑动
      /*stouchstart: function (e) {
        e.stopImmediatePropagation();
        this.startPoint = e.changedTouches[0].pageX;
      },
      stouchmove: function (e) {//向左滑动为正，向右滑动为负
        e.stopImmediatePropagation();
        this.currPoint = e.changedTouches[0].pageX;
        this.disX = this.startPoint - this.currPoint;
        // this.index = this.curIndex + parseInt(this.disX / 300);
      },
      stouchend: function (e) {
        e.stopImmediatePropagation();
        this.index = this.curIndex + 1;
        this.curIndex = this.index >= 0 && this.index <= this.sliders.length - 1 ? this.index : this.curIndex;
        this.word = this.sliders[this.curIndex].word;
        this.gname = this.sliders[this.curIndex].gname;
        this.favorite = this.sliders[this.curIndex].favorite;
        this.praise = this.sliders[this.curIndex].praise;

      },*/
      //点赞操作
      like: function (e) {
        console.log(e);
        console.log(e.path[0]);
        axios.post('/v1/qingcheng/community/score_game').then(function (res) {
          if (parseFloat(res.code) === 0) {

          }
        }).catch(function (err) {
          console.log(err);
        })
      },
      scroll: function () {
      }
    }

  }
</script>

<style scoped lang="less">
  .m-home-sort {
    box-sizing: border-box;
    width: 100%;
    height: 4.34rem;
    margin: 0 0 .34rem .3rem;

    h2 {
      font-family: PingFangSC-Medium;
      font-size: .36rem;
      color: #2C2C2C;
      line-height: .5rem;
      margin-bottom: .3rem;
      padding-right: .2rem;

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
            background: url("../assets/return@2x.png") no-repeat;
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
        width: 100rem;

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
