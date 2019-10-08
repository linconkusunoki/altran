import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home as HomeView, Detail as DetailView } from './views'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/gnome/:id" component={DetailView} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
