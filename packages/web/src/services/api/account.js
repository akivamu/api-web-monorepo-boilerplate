import axios from 'axios'
import store from '../../store'

export default {
  getMe: function () {
    return axios.get('/account')
      .then(res => {
        store.commit('auth/setAccount', res.data.data)
        return res.data.data
      })
      .catch(error => {
        throw error.response.data
      })
  },
  getAll: function () {
    return axios.get('/account/all')
      .then(res => {
        return res.data.data
      })
      .catch(error => {
        throw error.response.data
      })
  }
}
