import React from 'react'
import { render } from '@testing-library/react'
import Gender from './'

it('should render correctly', async () => {
  const { container, getByTestId } = render(<Gender color="Green" />)
  expect(container.firstChild).toMatchSnapshot()
  expect(getByTestId('male')).toBeTruthy()
})

it('should render a female', async () => {
  const { container, getByTestId } = render(<Gender color="Purple" />)
  expect(container.firstChild).toMatchSnapshot()
  expect(getByTestId('female')).toBeTruthy()
})
