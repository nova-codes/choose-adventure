import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return(
        <footer class="footer">
            <div class="container">
                <a href="https://github.com/ethanrmcdowell/choose-adventure"><FontAwesomeIcon icon="github" /></a> FOOTER
            </div>
        </footer>
    )
}

export default Footer;