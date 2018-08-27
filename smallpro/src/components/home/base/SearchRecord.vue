<template>
  <div class="m-search-searchRecord">
    <h5>最近搜索</h5>
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
      <img src="" alt="">
      清除搜索记录
    </a>
  </div>
</template>

<script>
  export default {
    name: "SearchRecord"
  }
</script>

<style scoped lang="less">
  .m-search-searchRecord {
    padding: .32rem 0 0 .3rem;

    h5 {
      font-family: PingFangSC-Regular;
      font-size: .24rem;
      color: #999999;
      font-weight: normal;
      margin-bottom: .2rem;
    }

    ul {
      width: 100%;
      height: 2.2rem;
      /*background: lightcyan;*/
      overflow: hidden;

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
        font-family: PingFangSC-Regular;
        font-size: .28rem;
        color: #2C2C2C;
        letter-spacing: 0;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

</style>
