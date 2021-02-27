import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import AuthService from '../../services/AuthService';
import {AuthContext} from '../../context/AuthContext';

function Navbar(props) {
  const {isAuthenticated, user, setIsAuthenticated, setUser} = useContext(AuthContext);

  return(<div className="container">
  <nav className="navbar navbar-default navbar-dark bg-dark justify-content-center">
    <ul className="nav navbar-nav navbar-expand-lg">
      <li>List items go here!</li>
      <li>Yup, right here!</li>
    </ul>
  </nav>
  </div>)
}

export default Navbar;



/* <div className="container">
<nav className="navbar navbar-default navbar-dark bg-dark justify-content-center">
  <ul className="nav navbar-nav navbar-expand-lg">
    <li>nav list items</li>
  </ul>
</nav>
</div> */



/* <li className="nav-item pad">
<Link to="/">
  <div className="nav-link">HOME</div>
</Link>
</li>
<li className="nav-item pad">
<Link to="/login">ADMIN</Link>
</li>
<li className="nav-item">
<Link to="https://github.com/ethanrmcdowell/choose-adventure">GITHUB</Link>
</li> */