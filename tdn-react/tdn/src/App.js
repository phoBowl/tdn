import React, { Component } from 'react'
import Projects from './Projects'
import SocialProfiles from './SocialProfiles'
import './index.css'
import profile from './assets/profile.png'

class App extends Component {
  constructor() {
    super()
    this.state = {
      displayBio: false
    }
  }

  toggleDisplayBio = () => {
    this.setState({
      displayBio: !this.state.displayBio
    })
  }

  render() {
    return (
      <div>
        <img src={profile} alt="profile-image" className="profile" />
        <h1>Hello!</h1>
        <p>My name is Nam. I am a Junior Software Developer</p>
        {this.state.displayBio ? (
          <div>
            <p>
              I recently graduated from the University Of New South Wales,
              Australia. I'm truly strong analytical and problem-solving skills.
              Besides independent skill, I really appreciate teamwork spirit. I
              also experienced several full-stack web development projects with
              teams of 2-5 members. The ability to learn quickly and apply in
              real cases. T herefore, I'm actively seeking for an Internship or
              Junior Web Developer.
            </p>
            <button onClick={this.toggleDisplayBio}>Show Less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read More</button>
          </div>
        )}

        <hr />
        <Projects />
        <SocialProfiles />
      </div>
    )
  }
}

export default App
