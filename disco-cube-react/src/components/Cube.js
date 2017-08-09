import React, { Component } from 'react'
import PropTypes from 'prop-types'


const plus = (hex1, hex2) => {
  const hex = (parseInt(hex1, 16) + parseInt(hex2, 16)).toString(16)
  
  if (parseInt(hex, 16) > parseInt('ffffff', 16)) {
    return 'ffffff' 
  }

  return hex
}

class Cube extends Component {
  state = {
    ligthSpreading: 0,
    isGlow: false
  }

  glowUp = () => {
    this.setState((prevState) => {
      const isGlow = !prevState.isGlow

      return {
        ligthSpreading: isGlow && this.props.ligthSpreading,
        isGlow
      }
    })
  }

  componentDidMount() {
    const { glowSpeed } = this.props

    this.interval = setInterval(() => this.glowUp(), glowSpeed)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { ligthSpreading, isGlow } = this.state
    const { posX, posY, colorCode } = this.props

    return (
      <div
        style={{
          position: 'absolute',
          left: posX,
          top: posY,
          width: 200,
          height: 200,
          borderRadius: '10px',
          backgroundColor: `#${colorCode}`,
          boxShadow: isGlow && `1px 2px ${ligthSpreading}px 10px #${plus(colorCode, '000001')}`
        }} >
      </div>
    )
  }
}

Cube.propTypes = {
  glowSpeed: PropTypes.number,
  ligthSpreading: PropTypes.number,
  colorCode: PropTypes.string,
  posX: PropTypes.number,
  posY: PropTypes.number
}

Cube.defaultProps = {
  glowSpeed: 500,
  ligthSpreading: 20,
  colorCode: 'BDBDBD',
  posX: 0,
  posY: 0
}

export default Cube
