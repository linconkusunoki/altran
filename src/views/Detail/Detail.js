import React from 'react'

import Layout from '../../layout'

const Detail = ({ match }) => {
  const { id } = match.params
  return (
    <Layout.Main>
      <Layout.Header />
      <h1>Detail {id}</h1>
    </Layout.Main>
  )
}

export default Detail
