import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  const deselect = (j)=>{
    let opt = document.getElementsByClassName('form-check-input')
    for(let i=0;i<opt.length;i++){
      if(i!==j){
        opt[i].checked=false
      }
    }
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode==='light'?'light':'dark'} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <div className={`form-check form-switch mx-3 text-${props.mode==='light'? 'success':'light'}`}>
            <input className="form-check-input" onClick={()=>{deselect(0);props.togglemode('success');}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Greenmode</label>
          </div>
          <div className={`form-check form-switch mx-3 text-${props.mode==='light'? 'danger':'light'}`}>
            <input className="form-check-input" onClick={()=>{deselect(1);props.togglemode('danger');}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Redmode</label>
          </div>
          <div className={`form-check form-switch mx-3 text-${props.mode==='light'? 'dark':'light'}`}>
            <input className="form-check-input" onClick={()=>{deselect(2);props.togglemode('dark');}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
          </div>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "Set Title Here"
}