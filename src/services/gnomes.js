import api from './api'

const get = async id => {
  const res = await api.get('/rrafols/mobile_test/master/data.json')

  if (id) {
    const gnome = res.data.Brastlewark.find(gnome => gnome.id === parseInt(id))
    return gnome
  }

  return res.data.Brastlewark
}

export default {
  get,
}
