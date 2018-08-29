<template>
  <div class="m-search-searchRecord">
    <h5>最近搜索</h5>
    <div class="m-search-hasReacord" v-if="hasRecord">
      <ul>
        <li>科幻</li>
        <li>古风</li>
        <li>影视改编完结作品作品作品作品作品</li>
        <li>穿越</li>
        <li>虐心伤感</li>
        <li>温馨治愈</li>
        <li>轻松搞笑</li>
        <li>宫斗</li>
        <li>耐人寻味</li>
        <li>苏爽甜宠</li>
        <li>热血励志</li>
        <li>科幻</li>
        <li>科幻</li>
        <li>科幻</li>
        <li>科幻</li>
        <li>科幻</li>
        <li>科幻</li>
        <li>科幻</li>
        <li>科幻</li>
        <li>科幻</li>
      </ul>
      <a href="javascript:;">
        清除搜索记录
      </a>
    </div>
    <div class="m-search-noReacord" v-else>
      <img src="../../assets/img/flyaway.png" alt="">
      <p>暂无搜索记录</p>
    </div>

  </div>
</template>

<script>
  export default {
    name: "SearchRecord",
    data() {
      return {
        hasRecord: false
      }
    }
  }
</script>

<style scoped lang="less">
  .m-search-searchRecord {
    padding-top: .32rem;

    h5 {
      box-sizing: border-box;
      font-size: .24rem;
      color: #919BB0;
      font-weight: normal;
      margin-bottom: .2rem;
      padding-left: .3rem;
    }

    .m-search-hasReacord {
      ul {
        box-sizing: border-box;
        width: 100%;
        height: 2.2rem;
        overflow: hidden;
        padding-left: .3rem;

        li {
          float: left;
          max-width: 2.8rem;
          height: .56rem;
          line-height: .56rem;
          margin: 0 .2rem .2rem 0;
          padding: 0 .28rem;
          border: 0.02rem solid #B1B1B1;
          border-radius: .08rem;
          background: #FFFFFF;
          font-size: .28rem;
          color: #354168;
          letter-spacing: 0;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }

      a {
        position: relative;
        display: block;
        width: 1.44rem;
        height: .4rem;
        line-height: .4rem;
        font-size: .24rem;
        color: #919BB0;
        margin: .4rem auto 0;

        &::before {
          position: absolute;
          top: 0;
          left: -.48rem;
          width: .4rem;
          height: .4rem;
          content: '';
          background: url("../../assets/img/delete.png") no-repeat;
          background-size: 100%;
        }

      }
    }

    .m-search-noReacord {
      img {
        display: block;
        width: 2.66rem;
        height: 2.02rem;
        margin: .22rem auto;
      }

      p {
        text-align: center;
        line-height: .4rem;
        font-size: .24rem;
        color: #B4BBC8;
        margin: 0 auto;
      }
    }
  }

</style>
