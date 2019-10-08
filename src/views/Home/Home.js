import React from 'react'

import Layout from '../../layout'
import GnomesList from '../../components/GnomesList'

const Home = () => {
  return (
    <Layout.Wrapper>
      <Layout.Header />
      <Layout.Main>
        <h1>Home</h1>
        <GnomesList />
      </Layout.Main>
    </Layout.Wrapper>
  )
}

export default Home
