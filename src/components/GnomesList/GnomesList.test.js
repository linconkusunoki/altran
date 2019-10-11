import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, wait } from '@testing-library/react'
import GnomesList from './'
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
  gnomes.get.mockResolvedValueOnce([gnome])
  const { container, getByText, getByTestId } = render(
    <MemoryRouter>
      <GnomesList />
    </MemoryRouter>,
  )

  expect(getByText('Loading gnomes...')).toBeTruthy()
  await wait(() => expect(getByTestId('amount')).toBeTruthy())
  expect(container.firstChild).toMatchSnapshot()
})

it('should render an empty list', async () => {
  gnomes.get.mockResolvedValueOnce([])
  const { getByTestId, getByText } = render(
    <MemoryRouter>
      <GnomesList />
    </MemoryRouter>,
  )
  expect(getByText('Loading gnomes...')).toBeTruthy()
  await wait(() => expect(getByTestId('amount')).toBeTruthy())
  expect(getByTestId('amount').textContent).toEqual('No gnome found :(')
})

it('should render an error message', async () => {
  gnomes.get.mockRejectedValueOnce(new Error('Async error'))
  const { getByText } = render(
    <MemoryRouter>
      <GnomesList />
    </MemoryRouter>,
  )
  expect(getByText('Loading gnomes...')).toBeTruthy()
  await wait(() => expect(getByText('Error while loading gnomes!')))
})
