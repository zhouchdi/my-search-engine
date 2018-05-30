export const state = () => ({
  // 导航条中左上按钮的显示与否
  showLies: true
});

export const mutations = {
  modify (state) {
    state.showLies = !state.showLies;
  }
}