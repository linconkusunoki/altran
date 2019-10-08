import api from './api'

const get = async () => {
  const res = await api.get('/rrafols/mobile_test/master/data.json')
  return res.data.Brastlewark
}

export default {
  get,
}
