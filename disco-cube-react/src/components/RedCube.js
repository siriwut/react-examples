import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Cube from './Cube'

class RedCube extends Component {
  render() {
    return (
      <Cube colorCode="FA5858" posX={ 50 } posY={ 50 } />
    )
  }
}

RedCube.propTypes = {
  ligthSpreading: PropTypes.number
}

RedCube.defaultProps = {
  glowSpeed: 500,
}

export default RedCube
