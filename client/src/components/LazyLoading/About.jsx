import React from 'react'
import { Link } from "react-router-dom"

const About = () => {
    console.log("about loaded")
  return (
    <div>
      <h2>Child Page</h2>
      <p>This page was lazy loaded.</p>
      <Link to="/">
        <button> Go to Home</button>
      </Link>
    </div>
  )
}

export default About