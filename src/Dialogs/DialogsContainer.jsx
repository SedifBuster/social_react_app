import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Dialog from "./Dialogsitem/Dialog";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageTextCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


function DialogsContainer(props) {
    let state = props.store.getState().dialogsPage

    let addMessage = () => {
        let action = sendMessageCreator
        props.store.dispatch(action())
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextCreator(text))
    }


    return <Dialogs UpdateNewMessageText={onMessageChange} sendMessage={addMessage} dialogsPage={state}/>
}

export default DialogsContainer