import React, { Component } from 'react'
import PROJECTS from './data/projects'

class Project extends Component {
  state = {}
  render() {
    const { title, image, description, link } = this.props.project

    return (
      <div style={{ display: 'inline-block', width: '300', margin: '10' }}>
        <h3>{title}</h3>
        <img src={image} alt="profile" />
        <p>{description}</p>
        <a href={link}>{link}</a>
      </div>
    )
  }
}

class Projects extends Component {
  state = {}
  render() {
    return (
      <div>
        <h2>My Projects</h2>
        <div>
          {PROJECTS.map(proj => {
            return <Project key={proj.id} project={proj} />
          })}
        </div>
      </div>
    )
  }
}

export default Projects
