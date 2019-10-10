import api from './api'

const get = async id => {
  let res

  try {
    res = await api.get('/rrafols/mobile_test/master/data.json')
  } catch (error) {
    return error
  }

  if (id) {
    const gnome = res.data.Brastlewark.find(gnome => gnome.id === parseInt(id))
    return gnome
  }

  return res.data.Brastlewark
}

export default {
  get,
}
