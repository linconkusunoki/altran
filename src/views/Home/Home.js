import React from 'react'

import Layout from '../../layout'
import { GnomesList } from '../../components'
import * as S from './styled'

const Home = () => {
  return (
    <Layout.Wrapper>
      <Layout.Main>
        <S.Title>Welcome to Brastlewark</S.Title>
        <GnomesList />
      </Layout.Main>
      <Layout.Footer />
    </Layout.Wrapper>
  )
}

export default Home
