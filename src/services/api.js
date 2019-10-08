import axios from 'axios'

const baseURL = 'https://raw.githubusercontent.com'
const api = axios.create({ baseURL })

export default api
