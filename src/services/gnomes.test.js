import MockAdapter from 'axios-mock-adapter'
import api from './api'
import gnomes from './gnomes'

const apiMock = new MockAdapter(api)
const endpoint = '/rrafols/mobile_test/master/data.json'

beforeEach(() => {
  apiMock.reset()
})

it('should fetch the gnomes from api', async () => {
  const data = { Brastlewark: [{ id: 1, firstName: 'john' }] }
  apiMock.onGet(endpoint).reply(200, data)

  const resp = await gnomes.get()

  expect(resp).toEqual(data.Brastlewark)
})

it('should fetch one gnome if ID present', async () => {
  const data = {
    Brastlewark: [{ id: 1, firstName: 'john' }, { id: 2, firstName: 'doe' }],
  }
  apiMock.onGet(endpoint).reply(200, data)

  const resp = await gnomes.get(1)

  expect(resp).toEqual(data.Brastlewark[0])
})

it('should not fetch the users from api', async () => {
  apiMock.onGet(endpoint).reply(400, { success: false })

  const resp = await gnomes.get()

  expect(resp.response.data.success).toBeFalsy()
})
