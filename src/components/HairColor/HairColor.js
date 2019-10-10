import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const HairColor = ({ color }) => <S.Hair color={color} />

HairColor.propTypes = {
  color: PropTypes.string.isRequired,
}

export default HairColor
