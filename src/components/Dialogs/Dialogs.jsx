import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import * as React from "react";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const DialogsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
                <Field name={'newMessage'}
                       component={'input'}
                       type={'textarea'}
                       >
                </Field>
        <div><button>Enter</button></div>
            </form>
}

let DialogReduxForm = reduxForm({
    form: 'messagePage'
})(DialogsForm)

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = state.messages.map(m => <Message massage={m.message}/>)

    let addMessage = (value) => {
        props.sendMessage(value.newMessage)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems} >
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <DialogReduxForm onSubmit={addMessage}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;