import axios from 'axios'

export default {
  getMe: function () {
    return axios.get('/account')
      .then(res => {
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
