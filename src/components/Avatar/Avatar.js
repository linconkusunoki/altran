import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const Avatar = ({ thumbnail, ...rest }) => (
  <S.Avatar {...rest} image={thumbnail} />
)

Avatar.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

export default Avatar
