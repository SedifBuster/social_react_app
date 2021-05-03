import React from 'react';
import style from './Dialogs.module.css'
import {NavLink, Redirect} from "react-router-dom";
import Dialog from "./Dialogsitem/Dialog";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageTextCreator} from "../redux/dialogs-reducer";


function Dialogs(props) {
    let state = props.dialogsPage

    let dialogsElemements = state.dialogsData.map((dialog) => {
        return (<Dialog name={dialog.name} key={dialog.id} id={dialog.id}/>)
    })

    let messagesElements = state.messageData.map((message) => {
        return (<Message message={message.message} key={message.id}/>)
    })

    let newPostElement = React.createRef()

    let addMessage = () => {
        props.sendMessage()
    }

    let onMessageChange = () => {
        let text = newPostElement.current.value
        props.UpdateNewMessageText(text)
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElemements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <textarea ref={newPostElement} onChange={onMessageChange} value={state.newMessageText}/>
            <button onClick={addMessage}>Add message</button>
        </div>
    )
}

export default Dialogs