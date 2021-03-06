import React from 'react'
import { render } from '@testing-library/react'
import Avatar from './'
import img from '../../images/background.png'

it('should render correctly', async () => {
  const { container } = render(<Avatar thumbnail={img} />)
  expect(container.firstChild).toMatchSnapshot()
})
