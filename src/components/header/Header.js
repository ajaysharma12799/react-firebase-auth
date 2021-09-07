import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const buildUI = () => (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">React Authentication</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item pe-2">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item pe-2">
          <Link to="/Login">Login</Link>
        </li>
        <li className="nav-item pe-2">
          <Link to="/Register">Register</Link>
        </li>
        <li className="nav-item pe-2">
          <Link to="/Dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )

    return (
        <React.Fragment>
            {buildUI()}
        </React.Fragment>
    )
}

export default Header
