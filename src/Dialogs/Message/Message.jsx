import React from 'react';
import style from './Message.module.css'
import {NavLink} from "react-router-dom";



function Message(props) {
    return (
                <div className={style.message}>{props.message}</div>
    )
}

export default Message