import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      displayBio: false
    }
  }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>My name is Nam. I am a Junior Software Developer</p>
      </div>
    )
  }
}

export default App
