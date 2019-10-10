import React from 'react'

import Layout from '../../layout'
import { GnomeProfile } from '../../components'

const Profile = ({ match }) => {
  const { id } = match.params
  return (
    <Layout.Wrapper>
      <Layout.Main>
        <GnomeProfile id={id} />
      </Layout.Main>
      <Layout.Footer />
    </Layout.Wrapper>
  )
}

export default Profile
