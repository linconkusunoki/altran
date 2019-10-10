import React from 'react'

import Layout from '../../layout'
import { GnomesList } from '../../components'

const Home = () => {
  return (
    <Layout.Wrapper>
      <Layout.Header title="Welcome to Brastlewark" />
      <Layout.Main>
        <GnomesList />
      </Layout.Main>
      <Layout.Footer />
    </Layout.Wrapper>
  )
}

export default Home
