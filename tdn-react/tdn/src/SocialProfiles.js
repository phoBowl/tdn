import React, { Component } from 'react'
import SOCIAL_PROFILES from './data/socialProfiles'

class SocialProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { link, image } = this.props.socialProfile

    return (
      <span>
        <a href={link}>
          <img
            src={image}
            alt="social-profile"
            style={{
              width: 35,
              height: 35,
              margin: 10
            }}
          />
        </a>
      </span>
    )
  }
}

class SocialProfiles extends Component {
  render() {
    return (
      <div>
        <h2>Connect With Me!</h2>
        <div>
          {SOCIAL_PROFILES.map(sp => {
            return <SocialProfile key={sp.id} socialProfile={sp} />
          })}
        </div>
      </div>
    )
  }
}

export default SocialProfiles
