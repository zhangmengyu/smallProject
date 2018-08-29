<template>
  <div class="m-search-searchMatch">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "SearchMatch",
    props: ['list','input']
  }
</script>

<style lang="less">
  .m-search-searchMatch {
    margin-top: .02rem;

    ul {
      margin-left: .38rem;

      li {
        box-sizing: border-box;
        height: 1.02rem;
        line-height: 1.02rem;
        font-size: .28rem;
        color: #000000;
        border-bottom: .01rem solid #E9EDF6;

        .m-search-matched {
          color: #647DFF;
        }
      }
    }
  }
</style>
