import React from 'react'

import * as S from './styled'

const Avatar = ({ thumbnail, ...rest }) => (
  <S.Avatar {...rest} image={thumbnail} />
)

export default Avatar
