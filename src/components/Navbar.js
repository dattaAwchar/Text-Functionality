import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const toggleStyle = () => ({
  height: '30px',
  width: '30px',
  cursor: 'pointer',
  border: '1px solid lightblue'
});




export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          <div className="d-flex">
            <div className="bg-primary rounded mx-1" onClick={() => { props.toggleMode('primary') }} style={toggleStyle()}></div>
            <div className="bg-success rounded mx-1" onClick={() => { props.toggleMode('success') }} style={toggleStyle()}></div>
            <div className="bg-danger rounded mx-1" onClick={() => { props.toggleMode('danger') }} style={toggleStyle()}></div>
            <div className="bg-warning rounded mx-1" onClick={() => { props.toggleMode('warning') }} style={toggleStyle()}></div>
            <div className="bg-info rounded mx-1" onClick={() => { props.toggleMode('info') }} style={toggleStyle()}></div>
            <div className="bg-dark rounded mx-1" onClick={() => { props.toggleMode('dark') }} style={toggleStyle()}></div>
            <div className="bg-secondary rounded mx-1" onClick={() => { props.toggleMode('secondary') }} style={toggleStyle()}></div>
            <div className="bg-muted rounded mx-1" onClick={() => { props.toggleMode('muted') }} style={toggleStyle()}></div>
            <div className="bg-light rounded mx-1" onClick={() => { props.toggleMode('light') }} style={toggleStyle()}></div>
            <div className="bg-white rounded mx-1" onClick={() => { props.toggleMode('white') }} style={toggleStyle()}></div>
          </div>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={()=>{props.toggleMode(null)}} style={{cursor:'pointer'}} role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
          </div> */}
        </div>
      </div>
    </nav>
  )
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
};

// Default props: this showing those default values // deprecated in new react version
// Navbar.defaultProps = {
//     title: 'set title here',
//     aboutText: 'About'
// };
