import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Cube from './Cube'

class GreenCube extends Component {
  render() {
    const { glowSpeed } = this.props

    return (
      <Cube glowSpeed={glowSpeed} colorCode="31B404" posX={50} posY={300} />
    )
  }
}

GreenCube.propTypes = {
  glowSpeed: PropTypes.number,
}

GreenCube.defaultProps = {
  glowSpeed: 800,
}

export default GreenCube


