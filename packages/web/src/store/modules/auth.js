const state = {
  authInfo: null,
  account: null
}

// getters
const getters = {
  isLoggedIn: state => { return !!state.authInfo },
  roles: state => { return state.account.roles }
}

// actions
const actions = {}

// mutations
const mutations = {
  setAuthInfo (state, info) {
    state.authInfo = info
    localStorage.setItem('authInfo', JSON.stringify(info))
  },
  updateNewAccessToken (state, newAccessToken) {
    state.authInfo.access_token = newAccessToken.access_token
    state.authInfo.token_type = newAccessToken.token_type
    state.authInfo.expires_in = newAccessToken.expires_in
    localStorage.setItem('authInfo', JSON.stringify(state.authInfo))
  },
  setAccount (state, account) {
    state.account = account
    localStorage.setItem('account', JSON.stringify(account))
  },
}

// Init store before use
try {
  state.authInfo = JSON.parse(localStorage.getItem('authInfo'))
  state.account = JSON.parse(localStorage.getItem('account'))
} catch (e) {
  console.log('Invalid or empty authInfo or account')
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
