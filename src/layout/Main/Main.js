import React from 'react'

import * as S from './styled'
import Container from '../Container'

const Main = ({ children }) => {
  return (
    <S.Main>
      <Container>
        <S.Card>{children}</S.Card>
      </Container>
    </S.Main>
  )
}

export default Main
