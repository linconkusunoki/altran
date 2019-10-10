import React from 'react'

import * as S from './styled'
import Container from '../Container'
import logo from './gnome.svg'

const Header = ({ title }) => {
  return (
    <S.Header>
      <Container>
        <S.Content>
          <S.Logo to="/">
            <img src={logo} alt="logo" />
          </S.Logo>
          <S.Title>{title}</S.Title>
        </S.Content>
      </Container>
    </S.Header>
  )
}

export default Header
