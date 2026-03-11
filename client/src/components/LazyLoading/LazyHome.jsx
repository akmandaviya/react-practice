import React from "react"
import { Link } from "react-router-dom"

const LazyHome = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the main page loaded initally.</p>
      <Link to="/about">
        <button>About</button>
      </Link>
    </div>
  )
}

export default LazyHome