import React, { Component } from 'react' 
import BlueCube from './BlueCube.js'
import RedCube from './RedCube.js'
import YellowCube from './YellowCube.js'
import GreenCube from './GreenCube.js'

class DiscoCubeBoard extends Component {
  render() {
    const { glowSpeed } = this.props

    return (
      <div
        style={{
          position: 'absolute',
          top: '100px',
          left: '400px',
          right: '100px',
          width: '550px',
          height: '550px',
          backgroundColor: '#1C1C1C',
          borderRadius: 10
        }} >

        <BlueCube glowSpeed={ 300 + glowSpeed } />
        <RedCube glowSpeed={ 400 + glowSpeed } />
        <YellowCube glowSpeed={ 500 + glowSpeed } />
        <GreenCube glowSpeed={ 600 + glowSpeed } />
      </div>
    )
  }
}

DiscoCubeBoard.defaultProps = {
  glowSpeed: 0
}

export default DiscoCubeBoard
