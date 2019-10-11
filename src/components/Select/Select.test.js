import React from 'react'
import { render } from '@testing-library/react'
import Select from './'

it('should render correctly', async () => {
  const options = [1, 2, 3]
  const { container } = render(
    <Select title="test" options={options} value="1" onChange={() => {}} />,
  )
  expect(container.firstChild).toMatchSnapshot()
})

it('should render with empty value', async () => {
  const options = [1, 2, 3]
  const { container } = render(
    <Select title="test" options={options} onChange={() => {}} />,
  )
  expect(container.firstChild).toMatchSnapshot()
})
