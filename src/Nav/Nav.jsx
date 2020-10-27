import React from 'react';
import style from './Nav.module.css'

function Navbar() {
    return ( <nav className={style.nav}>
        <div>
            <a>Profile</a>
        </div>
        <div>
            <a>Message</a>
        </div>
        <div>
            <a>News</a>
        </div>
        <div>
            <a>Music</a>
        </div>
        <div>
            <a>Settings</a>
        </div>

    </nav>)
}

export default Navbar