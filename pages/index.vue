<template>
  <section :class="[ !showLies ? 'containerRight container' : 'container']">
    <div class="search">
      <input class="searchInput" type="text" placeholder="Search"><i class="iconfont icon-sousuo searchIcon"></i>
    </div>
    <ul class="content">
      <li>
        <h3>周氏搜索，搜索你所想</h3>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["showLies"])
};
</script>

<style lang="less" type="text/less" scoped>
.containerRight {
  transition: all 1s;
  margin-left: 25% !important;
  margin-right: 10% !important;
}
.container {
  transition: all 1s;
  margin-top: 104px;
  margin-left: 16%;
   margin-right: 16%;
  .search {
    position: relative;
    .searchInput {
      border: 1px solid rgba(96, 125, 139, 1) !important;
      padding-left: 20px;
      background: #fff;
      width: calc(100% - 23px);
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      font-weight: 700;
      outline: none;
      border-radius: 2px;
    }
    .searchIcon {
      position: absolute;
      width: 62px;
      margin: 2px 0;
      height: 40px;
      line-height: 40px;
      color: #fff;
      background: rgba(96, 125, 139, 1);
      right: 0;
      text-align: center;
      font-weight: 500;
      font-size: 24px;
      cursor: pointer;
    }
    .searchIcon:hover {
      background: rgba(96, 125, 139, 0.8);
    }
  }
  .content {
    margin-top: 60px;
    text-align: center;
    li {
      h3 {
        font-size: 18px;
        opacity: 0.2;
      }
    }
  }
}
</style>
