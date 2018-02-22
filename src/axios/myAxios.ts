import axios from "axios"
axios.interceptors.request.use(config => {
  // config.headers['X-CSRF-TOKEN']     = window.Laravel.csrfToken
  // config.headers['X-Requested-With'] = 'XMLHttpRequest'
  config.headers['Authorization']    = `Bearer ${localStorage.getItem('jwt-token')}`
  return config
})

export default axios