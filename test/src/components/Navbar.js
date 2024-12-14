import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Edit</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Translate</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
      <div class="form-check form-check-inline">
  <input class="form-check-input" onClick={props.toggleFire}  type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label style={props.style} class="form-check-label" for="inlineRadio1">Fire</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" onClick={props.toggleCalm} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label style={props.style} class="form-check-label" for="inlineRadio2">Calm</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" onClick={props.toggleBreeze} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label style={props.style} class="form-check-label" for="inlineRadio2">Breeze</label>
</div>
      <div className="form-check form-switch text-light mx-2">
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" style={props.style} htmlFor="flexSwitchCheckDefault">{props.label}</label>
        </div>
    </div>
  </div>
</nav>
    </div>
  )
}

