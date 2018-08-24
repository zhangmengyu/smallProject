<template>
  <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
    <Carousel :sliders="sliders"></Carousel>
    <Sort :sort="sort1"></Sort>
    <div class="m-home-adBox">
      <img src="../assets/pic.jpg" alt="">
    </div>
    <Sort :sort="sort1"></Sort>
    <Sort :sort="sort2"></Sort>
    <div class="m-home-goldSystem">
      <a href="javascript:;">
        任务奖励设计图
      </a>
    </div>
  </mt-loadmore>
</template>

<script>
  import Carousel from './Carousel';
  import Sort from './sort';
  import axios from 'axios';

  export default {
    name: 'Edit',
    components: {
      Carousel,
      Sort
    },
    data() {
      return {
        allLoaded: false,
        sliders: [
          {
            gindex: 12345,
            gname: "1他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: false,
            praise: true,
            word: 14851
          },
          {
            gindex: 12345,
            gname: "2他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          },
          {
            gindex: 12345,
            gname: "3他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          },
          {
            gindex: 12345,
            gname: "4他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          },
          {
            gindex: 12345,
            gname: "5他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          },
          {
            gindex: 12345,
            gname: "6他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          },
          {
            gindex: 12345,
            gname: "7他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          },
          {
            gindex: 12345,
            gname: "8他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          },
          {
            gindex: 12345,
            gname: "9他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          },
          {
            gindex: 12345,
            gname: "10他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          }
        ],
        sort1: [
          {
            gindex: 12345,
            gname: "1他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          },
          {
            gindex: 12345,
            gname: "2他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          },
          {
            gindex: 12345,
            gname: "3他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          },
          {
            gindex: 12345,
            gname: "4他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          },
          {
            gindex: 12345,
            gname: "5他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          },
          {
            gindex: 12345,
            gname: "6他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          },
          {
            gindex: 12345,
            gname: "7他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          },
          {
            gindex: 12345,
            gname: "8他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          },
          {
            gindex: 12345,
            gname: "9他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          },
          {
            gindex: 12345,
            gname: "10他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          }
        ],
        sort2: [
          {
            gindex: 12345,
            gname: "1他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          },
          {
            gindex: 12345,
            gname: "2他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          },
          {
            gindex: 12345,
            gname: "3他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          },
          {
            gindex: 12345,
            gname: "4他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          },
          {
            gindex: 12345,
            gname: "5他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          },
          {
            gindex: 12345,
            gname: "6他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          },
          {
            gindex: 12345,
            gname: "7他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          },
          {
            gindex: 12345,
            gname: "8他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          },
          {
            gindex: 12345,
            gname: "9他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          },
          {
            gindex: 12345,
            gname: "10他来了请闭眼1他来了请闭眼1他来了请闭眼1他来了请闭眼",
            thumb: require('../assets/pic.jpg'),
            tid: 1,
            tname: "标签名称-近期完结精选",
            favorite: true,
            praise: true,
            word: 14851
          }
        ]
      }
    },
    beforeCreate: function () {

      /*axios.post('/v1/qingcheng/community/index/get_page_by_editor_default').then(function (res) {
        console.log(res);
        // this.sliders = res.data.tid1.list;
      })*/
    },
    methods: {
      //下拉刷新
      loadTop() {
        this.requirePage();
        this.$refs.loadmore.onTopLoaded();
      },
      //上拉加载
      loadBottom() {
        this.requirePage();
        // this.allLoaded = true;// 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded();
      },
      //整页加载
      requirePage: function () {
        axios.post('/v1/qingcheng/community/index/get_page_by_editor_default').then(function (res) {
          console.log(res);
          // this.sliders = res.data.tid1.list;
        })
      },
      //获取更多数据
      requireData: function () {

      }
    }
  }
</script>

<style lang="less">
  .m-home-adBox {
    width: 100%;
    height: 2.4rem;
    margin-bottom: .48rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .m-home-goldSystem {
    width: 6.86rem;
    height: 1.36rem;
    margin: 0 auto 1.72rem;
    background: #F2F2F2;
    border-radius: .16rem;

    a {
      display: block;
      width: 100%;
      height: 100%;
      line-height: 1.36rem;
      text-align: center;
      font-family: PingFangSC-Medium;
      font-size: .32rem;
      font-weight: bold;
      color: #2C2C2C;
    }
  }


</style>
