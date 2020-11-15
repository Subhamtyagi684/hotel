import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
  <Link className="navbar-brand" to="/">My Hotel</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact <span className="sr-only">(current)</span></Link>
      </li>
      
    </ul>

  </div>
</nav>
        </Fragment>
    )
}


export default Header