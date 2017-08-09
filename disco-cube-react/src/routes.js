import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import DiscoCubeBoard from './components/DiscoCubeBoard.js'
import DiscoCubeController from './components/DiscoCubeController.js'
console.log(DiscoCubeController)
export default () => (
  <Router>
    <div>
      <Route exact path="/" component={ DiscoCubeBoard } />
      <Route path="/controller" component={ DiscoCubeController } />
    </div>
  </Router>
)
