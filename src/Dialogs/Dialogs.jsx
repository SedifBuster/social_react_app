import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Dialog from "./Dialogsitem/Dialog";
import Message from "./Message/Message";


function Dialogs(props) {

    let dialogsData = [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Petr'},
        {id: 3, name: 'Artem'},
        {id: 4, name: 'Keit'},
        {id: 5, name: 'Alex'},
        {id: 6, name: 'Stanislav'},
        {id: 7, name: ' oi boy'},
        {id: 8, name: 'next door'}
    ]

    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are You?'},
        {id: 3, message: 'Letsgo dota'},
        {id: 4, message: 'fast'},
        {id: 5, message: 'faster'},
    ]

    let dialogsElemements = dialogsData.map((dialog) => {
        return (<Dialog name={dialog.name} id={dialog.id}/>)
    })

    let messagesElements = messageData.map((message) => {
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