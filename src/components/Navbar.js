import React, {useEffect, useState} from 'react';
import '../css/navbar.css';
import logo from '../img/Netflix_logo.png';
import avatar from '../img/netflix_avatar.png';

function Navbar() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 160) {
                setShow(true);
            } else {
                setShow(false);
            }

            return () => {
                window.removeEventListener("scroll");
            }
        })
    });

    return (
        <nav className={`nav ${show && "nav__dark"}`}>
            <img
                className="nav__logo"
                src={logo}
                alt="Netflix logo"
            />

            <img
                className="nav__avatar"
                src={avatar}
                alt="Netflix avatar"
            />
        </nav>
    )
}

export default Navbar;