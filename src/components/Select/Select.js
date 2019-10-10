import React from 'react'

import * as S from './styled'

const Select = ({ title, options, value, ...rest }) => {
  return (
    <S.Wrapper>
      <S.Label>
        {title}
        <S.Select {...rest} value={value || ''}>
          <option value="">All</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </S.Select>
      </S.Label>
    </S.Wrapper>
  )
}

export default Select
