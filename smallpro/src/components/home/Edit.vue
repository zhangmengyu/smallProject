<template>
  <main>
    <HomeHeader :selected="selected"></HomeHeader>
    <transition name="slide">
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <Carousel :sliders="sliders" @setCollect="setCollect" @cannelCollect="cannelCollect"></Carousel>
        <div class="m-home-adBox">
          <img src="../../assets/img/pic.jpg" alt="">
        </div>
        <Sort v-for="(value, key, index) in sort" :sort="value" :title="key" :tid="value[0].tid" :key="index" @setCollect="setCollect"
              @cannelCollect="cannelCollect"></Sort>
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
  import HomeHeader from './HomeHeader';
  import Carousel from './Carousel';
  import Sort from './sort';
  import {getEditPageData, getEditDatabyType, setCollection, cannelCollection} from '../../api';

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
        sliders: {},
        sort: {}
      }
    },
    watch: {

    },
    created() {
      let _this = this,
        data = {
          token: '0&a',
          sign: '',
          page: 1,
          pageSize: 5
        };
      getEditPageData(data).then(function (res) {
        var gameObj = res.data.game_data;
        for (let attr in gameObj) {
          if (attr === '近期完结精选') {
            _this.sliders = gameObj[attr];
          } else {
            gameObj[attr].length ? _this.sort[attr] = gameObj[attr] : null;
          }
        }
      })
    },
    methods: {
      //下拉刷新
      loadTop() {
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
            if (attr === '近期完结精选') {
              _this.sliders = gameObj[attr];
            } else {
              gameObj[attr].length ? _this.sort[attr] = gameObj[attr] : null;
            }
          }
        }).then(function () {

          _this.$refs.loadmore.onTopLoaded();
        })
      },
      //上拉加载
      loadBottom() {
        console.log(1);
        let _this = this,
          data = {
            token: '0&a',
            sign: '',
            tid: 2,
            page: 2,
            pageSize: 3
          };
        getEditDatabyType(data).then(function (res) {
          console.log(res);
        }).then(function () {
          // _this.allLoaded = true;// 若数据已全部获取完毕
          _this.$refs.loadmore.onBottomLoaded();
        })

      },
      //收藏操作
      setCollect: function (tid, gindex, version) {
        console.log('setCollect', tid, gindex, version);
        let data = {
          token: '0&a',
          sign: '',
          tid,
          gindex,
          version
        };
        setCollection(data);
      },
      //取消收藏操作
      cannelCollect: function (tid, gindex) {
        console.log('cannelCollect', tid, gindex);
        let data = {
          token: '0&a',
          sign: '1',
          tid,
          gindex
        };
        cannelCollection(data);
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
      font-size: .32rem;
      font-weight: bold;
      color: #354168;
    }
  }
</style>
