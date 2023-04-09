import React from 'react'
import  PropTypes  from 'prop-types'
// import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div data-bs-theme={`${props.theme}`}>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{props.link1}</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-aactive" aria-current="page" href="/about">{props.link2}</a>
        </li> */}
      </ul>
      <div class={`form-check form-switch text-${props.theme==='light'?'dark':'light'}`}>
      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
      <label class={`form-check-label`} for="flexSwitchCheckDefault">{props.value}</label>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
Navbar.propTypes = {
  title: PropTypes.string, 
  link1: PropTypes.string, 
  link2: PropTypes.string
}
Navbar.defaultProps = {title: 'TextUtils', link1:"link1", link2: "About Us"}