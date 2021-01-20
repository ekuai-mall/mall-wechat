const Run = {
  namespaced: true,
  state: () => ({
    currentTab: [],
    wxAppId: '',
    mallTitle: 'Loading...',
    homeImg: '',
    currentSearch: '',
    loginBack: false
  }),
  mutations: {
    updateCurrentTab (state, e) {
      state.currentTab = [e]
    },
    updateLoginBack (state, e) {
      state.loginBack = e
    },
    updateGlobalInfo (state, e) {
      for (let val of e) {
        if (state[val.key] !== undefined) {
          state[val.key] = val.value
        }
      }
    }
  }
}
export default Run
