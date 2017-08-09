import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Cube from './Cube'

class BlueCube extends Component {
  render() {
    const { glowSpeed } = this.props

    return (
      <Cube glowSpeed={glowSpeed} colorCode="2E9AFE" posX={300} posY={50} />
    )
  }
}

BlueCube.propTypes = {
  glowSpeed: PropTypes.number,
}

BlueCube.defaultProps = {
  glowSpeed: 600,
}

export default BlueCube

