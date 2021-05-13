import React from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header(props) {
    return (<header className={style.header}>
        <img src= 'logo.png' alt='Logo' className={style.logo}/>
        <div className={style.login_block}>
            { props.isAuth ?
                <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
            : <NavLink to={'/login'}>Login</NavLink>}

        </div>
    </header>)
}

export default Header