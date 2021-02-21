import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function NavBar() {
  return (
    <div className="container">
      <nav className="navbar navbar-default navbar-dark bg-dark justify-content-center">
        <ul className="nav navbar-nav navbar-expand-lg">
          <li className="nav-item pad">
            <Link className="nav-link" to="/">
              HOME
            </Link>
          </li>
          <li className="nav-item pad">
            <Link
              className="nav-link"
              // to="https://scontent.fdet1-1.fna.fbcdn.net/v/t1.0-9/42694351_266177507360652_8271805922003648512_n.jpg?_nc_cat=101&ccb=3&_nc_sid=8bfeb9&_nc_ohc=HFFlsYDIF1sAX-gvYhH&_nc_oc=AQnhQQKjv3bgu6WHYhlxQ6bggJuU9UOYcMLvKYtjnWsSQ7qaqWn7CRPuAqXPQXMHySQR7grJl3kd8u2-tKDfPqh0&_nc_ht=scontent.fdet1-1.fna&oh=3490df53d029bb30a6975d2bc12e6de1&oe=604EF2C2"
              to="/admin"
            >
              ADMIN
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              // to="https://github.com/ethanrmcdowell/choose-adventure"
              to="/github"
            >
              GITHUB
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;

/* <p><FontAwesomeIcon icon={faSkullCrossbones} /> CAMP SLAUGHTER</p> */
