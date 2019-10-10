import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import { Home as HomeView, Profile as ProfileView } from './views'

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box }
  body { margin: 0; min-height: 100vh; font-family: 'Source Sans Pro', sans-serif; }
  img { max-width: 100% }
  #root { background-color: #f2f5f7 }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/gnome/:id" component={ProfileView} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
