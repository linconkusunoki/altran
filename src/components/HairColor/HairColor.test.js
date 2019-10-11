import React from 'react'
import { render } from '@testing-library/react'
import HairColor from './'

it('should render correctly', async () => {
  const { container } = render(<HairColor color="Green" />)
  expect(container.firstChild).toMatchSnapshot()
})
