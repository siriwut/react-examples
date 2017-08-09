import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Cube from './Cube'

class GreenCube extends Component {
  render() {
    const { glowSpeed } = this.props

    return (
      <Cube glowSpeed={glowSpeed} colorCode="FFFF00" posX={300} posY={300} />
    )
  }
}

GreenCube.propTypes = {
  glowSpeed: PropTypes.number,
}

GreenCube.defaultProps = {
  glowSpeed: 700,
}

export default GreenCube



