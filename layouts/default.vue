<template>
  <div>
    <header :class="[showSwitch ? 'boxShadow header' : 'header']">
      <!-- 导航条 -->
      <div>
        <span>
          <i class="iconfont icon-liebiaoshitucaidan" @click="clickLies()"></i>
        </span>
        <nuxt-link :to="{name:'index'}">简单的搜索引擎</nuxt-link>
        <span class="three-part">
          <nuxt-link :to="{name:'index'}" class="iconfont icon-chonghai-zhizhu"></nuxt-link>
        </span>
        <span class="last-part">
          <i class="iconfont icon-switch" @click="clickSwitch()"></i>
        </span>
      </div>
      <!-- 右上设置 -->
      <ul :class="[showSwitch ? 'headerSetting showNone' : 'headerSetting boxShadow']">
        <li><a href="https://github.com/zhouchdi/my-server">网站源码</a></li>
        <li><a href="https://github.com/zhouchdi/my-server">网站源码</a></li>
        <li><a href="https://github.com/zhouchdi/my-server">网站源码</a></li>
        <li><a href="https://github.com/zhouchdi/my-server">网站源码</a></li>
      </ul>
    </header>
    <!-- 左上设置 -->
    <ul :class="[!showLies ? 'liesSetting' : 'showNone']">
      <li><i class="iconfont icon-cainixihuan"></i><a href="https://github.com/zhouchdi/my-server">网站源码</a></li>
      <li><i class="iconfont icon-cainixihuan"></i><a href="https://github.com/zhouchdi/my-server">网站源码</a></li>
      <li><i class="iconfont icon-cainixihuan"></i><a href="https://github.com/zhouchdi/my-server">网站源码</a></li>
      <li><i class="iconfont icon-cainixihuan"></i><a href="https://github.com/zhouchdi/my-server">网站源码</a></li>
    </ul>
    <nuxt/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showLies: true,
      showSwitch: true
    };
  },
  methods: {
    clickLies: function() {
      this.showLies = !this.showLies;
    },
    clickSwitch: function() {
      this.showSwitch = !this.showSwitch;
    }
  }
};
</script>
<style lang="less" type="text/less" scoped>
@deepGreen: rgba(96, 125, 139, 1);
.a(@font:20px) {
  font-size: @font;
  font-weight: 500;
}
.block(@height:48px;@width:48px;@margin:8px;) {
  width: @width;
  text-align: center;
  height: @height;
  line-height: @height;
  box-sizing: border-box;
  margin-left: @margin;
  margin-right: @margin;
}
.i() {
  height: 24px;
  width: 24px;
  line-height: 48px;
}
.boxShadow {
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14);
}
.showNone {
  display: none !important;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  height: 0;
  width: 100%;
  height: 64px;
  z-index: 10;
  > div {
    background-color: @deepGreen;
    display: flex;
    align-items: center;
    width: 100%;
    height: 64px;
    > a {
      .a;
      .block(64px;auto;16px);
      letter-spacing: 0.02em;
    }
    span {
      .block;
      border-radius: 50%;
      background-color: @deepGreen;
      cursor: pointer;
      i {
        background: transparent;
        color: white;
        .a(24px);
        .i;
      }
      a {
        background: transparent;
        font-size: 24px;
        .i;
      }
    }
    span:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    span.three-part {
      position: absolute;
      right: 0;
      margin-right: 64px;
    }
    span.last-part {
      position: absolute;
      right: 0;
    }
  }
  // header设置
  .headerSetting {
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    top: 64px;
    height: 40px;
    line-height: 40px;
    background-color: @deepGreen;
    display: flex;
    justify-content: flex-start;
    li {
      height: auto;
      width: 12.5%;
      text-align: center;
      a {
        font-size: 14px;
        color: #f8f8f8;
      }
    }
  }
}
// 左上设置
.liesSetting {
  position: fixed;
  top: 104px;
  display: flex;
  flex-direction: column;
  width: 20%;
  li {
    width: 100%;
    height: 48px;
    box-sizing: border-box;
    line-height: 48px;
    padding: 0 10%;
    a {
      display: inline-block;
      margin-left: 10%;
      color: rgba(0, 0, 0, 0.8);
      background: transparent;
    }
  }
  li:hover{
    background: #e5e5e5;
  }
}
</style>
