import React from 'react'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} mb-3`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.header}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="/about">About Us</Link> */}
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form> */}
<div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
<input onClick={props.tooglemode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
<label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'Dark':'Light'} Mode</label>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}
