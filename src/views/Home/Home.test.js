import React from 'react'
import { render } from '@testing-library/react'
import Home from './'

it('should render correctly', async () => {
  const { container } = render(<Home />)
  expect(container.firstChild).toMatchSnapshot()
})
