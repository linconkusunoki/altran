import React from 'react'
import PropTypes from 'prop-types'

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

Select.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.string,
}

export default Select
