import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      // 导航条中左上按钮的显示与否
      showLies: true
    }
  });

export default store;
