import React from 'react';
import style from './Header.module.css'

function Header() {
    return (<header className={style.header}>
        <img src= 'logo.png' alt='Logo' className={style.logo}/>
    </header>)
}

export default Header