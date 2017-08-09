import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Tuner from 'material-ui/Slider';

class DiscoCubeController extends Component {
  state = {
    glowSpeed: 0
  }

  handleTuneGlowSpeed = (event, value) => {
    console.log(value)
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={ {
          width: '300px',
          height: '100px',
          background: '#ffffff',
          borderRadius: '10px',
          paddingTop: '40px',
          paddingLeft: '30px',
          paddingRight: '30px',
          position: 'absolute',
          top: 50,
          left: 50
        } } >
          <Tuner min={ -300 } max={ 300 } onChange={ this.handleTuneGlowSpeed } />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default DiscoCubeController
