import React from 'react'

import * as S from './styled'

const Select = ({ title, options, value, ...rest }) => {
  return (
    <S.Wrapper>
      <S.Select {...rest} value={value || ''}>
        <option value="">{title}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </S.Select>
    </S.Wrapper>
  )
}

export default Select
