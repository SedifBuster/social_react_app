import React from 'react';
import style from './SidebarFriends.module.css'


function SidebarFriends(props) {

    return (

            <div className={style.friend}>
                <img src={props.img} className={style.logoFriend}/>
                <div>{props.name}</div>
            </div>
    )
}

export default SidebarFriends