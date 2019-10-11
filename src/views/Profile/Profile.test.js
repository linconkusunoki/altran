import React from 'react'
import { render } from '@testing-library/react'
import Profile from './'

it('should render correctly', async () => {
  const { container } = render(<Profile match={{ params: { id: '1' } }} />)
  expect(container.firstChild).toMatchSnapshot()
})
