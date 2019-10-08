import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../layout'

const Home = () => {
  return (
    <Layout.Wrapper>
      <Layout.Header />
      <Layout.Main>
        <h1>Home</h1>
        <ul>
          <li>
            <Link to="/gnome/1">gnome 1</Link>
          </li>
        </ul>
      </Layout.Main>
    </Layout.Wrapper>
  )
}

export default Home
