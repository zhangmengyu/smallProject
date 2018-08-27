<template>
  <div class="m-home-carousel">
    <div class="m-home-carouselBg">
      <h2>近期完结精选</h2>
    </div>
    <div class="m-home-carouselBox">
      <ul class="clear" @touchstart="ctouchstart" @touchmove="ctouchmove" @touchend="ctouchend">
        <li v-for="(item, index) in sliders" :key="index"
            :class="curIndex === 0 && index === curIndex ? 'm-home-cActiveLi0' : (curIndex === 1 && index === curIndex ? 'm-home-cActiveLi1' : (curIndex === 1 && index === curIndex-1 ? 'm-home-cPrevOneLi1' : (curIndex >= 2 && index === curIndex ? 'm-home-cActiveLi2' : (curIndex >= 2 && index === curIndex-1 ? 'm-home-cPrevOneLi2' : (curIndex >= 2 && index === curIndex-2 ? 'm-home-cPrevTwoLi' : (index < curIndex-2 ? 'm-home-cPrevLis' : (curIndex === 1 && index > curIndex-1 ? 'm-home-cNextLis1' : (curIndex >= 2 && index > curIndex-2 ? 'm-home-cNextLis2' : null))))))))">
          <img :src="item.thumb" alt="">
          <a href="javascript:;" v-if="curIndex === index">
            <div class="m-home-cWorkIntro">
              <p>
                <span class="m-home-cWorkCollect">
                <img :src="favorite ? favoriteImg : noFavoriteImg" alt="">
              </span>
                <span class="m-home-cWorkLike">
                <img :src="praise ? praiseImg : noPraiseImg" alt="">
              </span>
                <span class="m-home-cWorkLabel m-home-WorkLabel4">
                部分完结
              </span>
              </p>
            </div>
          </a>
        </li>
        <!--(index === curIndex+1 ? 'm-home-cNextLis1' : null)-->
        <!--<p class="">吖～没有啦～</p>-->
      </ul>
      <div class="m-home-cWorkState">
        <p>
          <span class="m-home-cWorkTitle">{{gname}}</span>
          <span class="m-home-cWorkJJ">100个结局</span>
          <span class="m-home-cWorkWZ">{{word}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Carousel',
    props: {
      sliders: Array
    },
    data() {
      return {
        curIndex: 0,
        startPoint: 0,
        currPoint: 0,
        disX: 0,
        index: 0,
        word: 0,
        gname: '',
        favorite: false,
        praise: false,
        favoriteImg: require('../../../assets/collected.png'),
        noFavoriteImg: require('../../../assets/collect.png'),
        praiseImg: require('../../../assets/liked.png'),
        noPraiseImg: require('../../../assets/like.png')
      }
    },
    created: function () {
      this.word = this.sliders[0].word;
      this.gname = this.sliders[0].gname;
      this.favorite = this.sliders[0].favorite;
      this.praise = this.sliders[0].praise;
    },
    methods: {
      //手指滑动
      ctouchstart: function (e) {
        e.stopPropagation();
        this.startPoint = e.changedTouches[0].pageX;
      },
      ctouchmove: function (e) {//向左滑动为正，向右滑动为负
        e.stopPropagation();
        this.currPoint = e.changedTouches[0].pageX;
        this.disX = this.startPoint - this.currPoint;
        this.index = this.curIndex + parseInt(this.disX / 200);
        this.curIndex = this.index >= 0 && this.index <= this.sliders.length - 1 ? this.index : this.curIndex;
        this.word = this.sliders[this.curIndex].word;
        this.gname = this.sliders[this.curIndex].gname;
        this.favorite = this.sliders[this.curIndex].favorite;
        this.praise = this.sliders[this.curIndex].praise;
      },
      ctouchend: function (e) {
        e.stopPropagation();
        // this.index = this.curIndex + 1;
      },
      //收藏操作
      collect: function (e) {

      }
    }
  }
</script>

<style scoped lang="less">
  .m-home-carousel {
    position: relative;
    width: 100%;
    height: 7.58rem;
    margin-bottom: .8rem;

    .m-home-carouselBg {
      box-sizing: border-box;
      width: 100%;
      height: 6.42rem;
      background: #8F5747;
      padding-top: .48rem;

      h2 {
        height: .5rem;
        line-height: .5rem;
        font-family: PingFangSC-Medium;
        font-size: .36rem;
        font-weight: normal;
        color: #FFFFFF;
        margin: 0 0 .24rem .3rem;
      }
    }

    .m-home-carouselBox {
      position: absolute;
      top: 1.21rem;
      left: 0;
      width: 100%;
      height: 6.36rem;
      overflow: hidden;

      ul {
        position: absolute;
        top: 0;
        left: 0;
        width: 60rem;
        height: 5.6rem;
        margin-left: .3rem;
        margin-bottom: .3rem;

        li {
          position: relative;
          float: left;
          width: 4.8rem;
          height: 4.8rem;
          margin-right: .3rem;
          margin-top: .4rem;
          border-radius: .16rem;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
          }

          a {
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 100%;

            .m-home-cWorkIntro {
              position: absolute;
              top: 0;
              left: 0;
              box-sizing: border-box;
              width: 100%;
              height: 2rem;
              padding: .26rem .2rem 0 .34rem;
              background-image: linear-gradient(0deg, rgba(238, 238, 238, 0.00) 3%, rgba(0, 0, 0, 0.77) 100%);

              p {
                line-height: .48rem;
                height: .48rem;
                overflow: hidden;

                span {
                  display: block;

                  &.m-home-cWorkCollect, &.m-home-cWorkLike {
                    float: left;
                    width: .48rem;
                    height: .48rem;
                    margin-right: .36rem;

                    img {
                      width: 100%;
                      height: 100%;
                    }
                  }

                  &.m-home-cWorkLabel {
                    float: right;
                    box-sizing: border-box;
                    line-height: .34rem;
                    height: .44rem;
                    border-radius: .22rem;
                    padding: .04rem .16rem;
                    font-family: PingFangSC-Regular;
                    font-size: .24rem;
                  }
                }
              }
            }
          }

          &.m-home-cActiveLi0 {
            /*position: relative;*/
            width: 5.6rem;
            height: 5.6rem;
            margin-top: 0;
            transition: 1s;
            box-shadow: 0 .12rem .24rem 0 rgba(0, 0, 0, 0.25);
          }

          &.m-home-cActiveLi1 {
            /*position: relative;*/
            width: 5.6rem;
            height: 5.6rem;
            margin-top: 0;
            transform: translate3d(-4.9rem, 0, 0);
            transition: 1s;
          }

          &.m-home-cActiveLi2 {
            /*position: relative;*/
            width: 5.6rem;
            height: 5.6rem;
            margin-top: 0;
            transform: translate3d(-8.6rem, 0, 0);
            transition: 1s;
          }

          &.m-home-cPrevOneLi1 {
            /*position: absolute;*/
            /*top: 0;*/
            /*left: 0;*/
            opacity: 0.9;
            width: 4.8rem;
            height: 4.4rem;
            transform: translate3d(0, 0, -0.2rem);
            transition: 1s;
          }

          &.m-home-cPrevOneLi2 {
            /*position: absolute;*/
            /*top: 0;*/
            /*left: 0;*/
            opacity: 0.9;
            width: 4.8rem;
            height: 4.4rem;
            transform: translate3d(-3.7rem, 0, -0.2rem);
            transition: 1s;
          }

          &.m-home-cPrevTwoLi {
            /*position: absolute;*/
            /*top: 0;*/
            /*left: 0;*/
            opacity: 0.7;
            width: 3.6rem;
            height: 3.6rem;
            transform: translate3d(0, 0.6rem, -0.4rem);
            transition: 1s;
          }

          /*&.m-home-cNextLi {
            !*position: absolute;*!
            !*top: 0;*!
            !*left: 0;*!
            transform: translate3d(-4.9rem, 0, 0);
            transition: 1s;
          }*/

          &.m-home-cPrevLis {
            display: none;
          }

          &.m-home-cNextLis1 {
            /*position: absolute;*/
            /*top: 0;*/
            /*left: 0;*/
            transform: translate3d(-4.9rem, 0, 0);
            transition: 1s;
          }

          &.m-home-cNextLis2 {
            transform: translate3d(-8.6rem, 0, 0);
            transition: 1s;
          }
        }

        /*& > p {
          position: absolute;
          top: 50%;
          left: 6.2rem;
          width: 1rem;
          height: .4rem;
          margin-top: -.2rem;
          line-height: .4rem;
          text-align: center;
          font-size: .24rem;
          color: #999999;
        }*/
      }

      .m-home-cWorkState {
        position: absolute;
        bottom: 0;
        box-sizing: border-box;
        width: 100%;
        height: .48rem;
        padding-left: .72rem;
        padding-right: 1.18rem;

        p {
          height: .48rem;
          width: 5.6rem;
          line-height: .48rem;

          span {
            display: inline-block;
            height: .48rem;
            font-family: PingFangSC-Regular;
            font-size: .24rem;
            color: #999999;

            &.m-home-cWorkTitle {
              height: .48rem;
              width: 2.84rem;
              font-family: PingFangSC-Medium;
              font-size: .32rem;
              color: #2C2C2C;
              letter-spacing: 0;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            &.m-home-cWorkWZ {
              float: right;
              position: relative;

              &::before {
                position: absolute;
                top: 0;
                left: -.48rem;
                content: '';
                width: .48rem;
                height: .48rem;
                background: url("../../../assets/word@3x.png") no-repeat;
                background-size: 100%;
              }
            }

            &.m-home-cWorkJJ {
              float: right;
              margin-left: .16rem;
            }
          }
        }
      }
    }
  }
</style>
