<template>
  <main>
    <HomeHeader :selected="selected"></HomeHeader>
    <transition name="slide">
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <Carousel :sliders="sliders"></Carousel>
        <div class="m-home-adBox">
          <img src="../../assets/img/pic.jpg" alt="">
        </div>
        <Sort v-for="(value, key, index) in sort" :sort="value" :title="key" :key="index"></Sort>
        <div class="m-home-goldSystem">
          <a href="javascript:;">
            任务奖励设计图
          </a>
        </div>
      </mt-loadmore>
    </transition>
  </main>
</template>

<script>
  import HomeHeader from './base/HomeHeader';
  import Carousel from './base/Carousel';
  import Sort from './base/sort';
  import axios from 'axios';
  import {getEditPageData, getEditDatabyType} from '../../api';

  export default {
    name: 'Edit',
    components: {
      HomeHeader,
      Carousel,
      Sort
    },
    data() {
      return {
        selected: "edit",
        allLoaded: false,
        sliders: [],
        sort: {}
      }
    },
    created() {
      this.requirePage();
    },
    methods: {

      //下拉刷新
      loadTop() {
        this.requirePage();
        this.$refs.loadmore.onTopLoaded();
      }
      ,
      //上拉加载
      loadBottom() {
        this.requireData();
        // this.allLoaded = true;// 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded();
      }
      ,
      //整页加载
      requirePage: function () {
        let _this = this,
          data = {
            token: '0&a',
            sign: '',
            page: 1,
            pageSize: 3
          };
        getEditPageData(data).then(function (res) {
          var gameObj = res.data.game_data;
          for (let attr in gameObj) {
            console.log(parseFloat(attr));
            if (parseFloat(attr) === 5) {
              console.log(gameObj[attr], _this);
              _this.sliders = gameObj[attr];
              break;
            }
            _this.sort[attr] = gameObj[attr];
          }
        })
      }
      ,
      //获取更多数据
      requireData: function () {
        axios.post('/v1/qingcheng/community/index/get_page_by_editor_default', {
          token: '0&a',
          sign: 'a',
          page: 1,
          pageSize: 3
        }).then(function (res) {
          console.log('requireData', res);
          // this.sliders = res.data.tid1.list;
        })
      }
    }
  }
</script>

<style lang="less">
  .mint-loadmore {
    margin-top: 1.4rem;
    /*height: 10rem;*/
    /*margin-bottom: .98rem;*/
  }

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
