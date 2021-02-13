import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function NavBar() {
  return (
    <div className="container">
      <nav className="navbar navbar-default navbar-dark bg-dark justify-content-center">
        <ul className="nav navbar-nav navbar-expand-lg">
          <li className="nav-item pad"><a className="nav-link" href="/">HOME</a></li>
          <li className="nav-item pad"><a className="nav-link" href="https://scontent.fdet1-1.fna.fbcdn.net/v/t1.0-9/42694351_266177507360652_8271805922003648512_n.jpg?_nc_cat=101&ccb=3&_nc_sid=8bfeb9&_nc_ohc=HFFlsYDIF1sAX-gvYhH&_nc_oc=AQnhQQKjv3bgu6WHYhlxQ6bggJuU9UOYcMLvKYtjnWsSQ7qaqWn7CRPuAqXPQXMHySQR7grJl3kd8u2-tKDfPqh0&_nc_ht=scontent.fdet1-1.fna&oh=3490df53d029bb30a6975d2bc12e6de1&oe=604EF2C2">ADMIN</a></li>
          <li className="nav-item"><a className="nav-link" href="https://github.com/ethanrmcdowell/choose-adventure">GITHUB</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;

/* <p><FontAwesomeIcon icon={faSkullCrossbones} /> CAMP SLAUGHTER</p> */
