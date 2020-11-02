import React from 'react';
import style from './Nav.module.css'
import {NavLink} from "react-router-dom";
import SidebarFriends from "./SidebarFriends/SidebarFriends";
import Dialog from "../Dialogs/Dialogsitem/Dialog";

function Navbar(props) {
    debugger

    let sidebarElements = props.sidebar.friends.map((friends) => {
        return (<SidebarFriends name={friends.name} img={friends.img}/>)
    })

    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs' activeClassName={style.active}>Message</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/news' activeClassName={style.active}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music' activeClassName={style.active}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/settings' activeClassName={style.active}>Settings</NavLink>
            </div>
            <div className={style.friends}>
                {sidebarElements}
            </div>
        </nav>)

}

export default Navbar