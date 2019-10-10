import React from 'react'

import * as S from './styled'
import Container from '../Container'

const Footer = () => (
  <S.Footer>
    <Container>
      Made with{' '}
      <span role="img" aria-label="made with love">
        ❤️
      </span>{' '}
      by Lincon Kusunoki
    </Container>
  </S.Footer>
)

export default Footer
