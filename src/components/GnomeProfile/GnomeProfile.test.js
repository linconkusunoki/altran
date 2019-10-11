import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, wait } from '@testing-library/react'
import GnomeProfile from './'
import gnomes from '../../services/gnomes'

jest.mock('../../services/gnomes')

const gnome = {
  age: 306,
  friends: ['Cogwitz Chillwidget', 'Tinadette Chillbuster'],
  hair_color: 'Pink',
  height: 107.75835,
  id: 0,
  name: 'Tobus Quickwhistle',
  professions: [
    'Metalworker',
    'Woodcarver',
    'Stonecarver',
    ' Tinker',
    'Tailor',
    'Potter',
  ],
  thumbnail:
    'http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg',
  weight: 39.065952,
}

it('should render correctly', async () => {
  gnomes.get.mockResolvedValueOnce(gnome)

  const { getByText, container } = render(
    <MemoryRouter>
      <GnomeProfile id="0" />
    </MemoryRouter>,
  )

  expect(getByText('Loading gnome...'))
  await wait(() => expect(getByText('Tobus Quickwhistle')).toBeTruthy())
  expect(gnomes.get).toHaveBeenCalled()
  expect(container.firstChild).toMatchSnapshot()
})

it('should render without professions', async () => {
  const gnomeWithoutJob = { ...gnome, professions: [] }
  gnomes.get.mockResolvedValueOnce(gnomeWithoutJob)

  const { getByText } = render(
    <MemoryRouter>
      <GnomeProfile id="0" />
    </MemoryRouter>,
  )

  expect(getByText('Loading gnome...'))
  await wait(() => expect(getByText('Time is money friend')).toBeTruthy())
  expect(gnomes.get).toHaveBeenCalled()
})

it('should render without friends', async () => {
  const gnomeWithoutJob = { ...gnome, friends: [] }
  gnomes.get.mockResolvedValueOnce(gnomeWithoutJob)

  const { getByText } = render(
    <MemoryRouter>
      <GnomeProfile id="0" />
    </MemoryRouter>,
  )

  expect(getByText('Loading gnome...'))
  await wait(() =>
    expect(getByText('Stop working and go make new friends')).toBeTruthy(),
  )
  expect(gnomes.get).toHaveBeenCalled()
})

it('should render an error message', async () => {
  gnomes.get.mockRejectedValueOnce(new Error('Async error'))

  const { getByText, container } = render(
    <MemoryRouter>
      <GnomeProfile id="?" />
    </MemoryRouter>,
  )

  expect(getByText('Loading gnome...'))
  await wait(() => expect(getByText('Error while loading gnome!')).toBeTruthy())
  expect(gnomes.get).toHaveBeenCalled()
  expect(container.firstChild).toMatchSnapshot()
})
