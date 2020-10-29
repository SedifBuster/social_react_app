import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Dialog from "./Dialogsitem/Dialog";
import Message from "./Message/Message";


function Dialogs(props) {


    let dialogsElemements = props.dialogsData.map((dialog) => {
        return (<Dialog name={dialog.name} id={dialog.id}/>)
    })

    let messagesElements = props.messageData.map((message) => {
        return (<Message message={message.message}/>)
    })

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElemements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs