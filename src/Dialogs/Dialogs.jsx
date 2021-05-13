import React from 'react';
import style from './Dialogs.module.css'
import {Redirect} from "react-router-dom";
import Dialog from "./Dialogsitem/Dialog";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../utils/validators/validators";
import {TextArea} from "../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)


function Dialogs(props) {
    let state = props.dialogsPage

    let dialogsElemements = state.dialogsData.map((dialog) => {
        return (<Dialog name={dialog.name} key={dialog.id} id={dialog.id}/>)
    })

    let messagesElements = state.messageData.map((message) => {
        return (<Message message={message.message} key={message.id}/>)
    })

    if (!props.isAuth) return <Redirect to={"/login"}/>

    let addNewMessage = (values) => {
        props.sendMessage(values.newPostElement)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElemements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={TextArea} name={"newPostElement"} placeholder={"Enter your message"}
                   validate={[required, maxLength10]}/>
            <button>Add message</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs