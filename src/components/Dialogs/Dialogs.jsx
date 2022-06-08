import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import * as React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls"
import {maxElementLength, required} from "../../util/validators/validators";
import {sendMessageCreator} from "../../redux/dialogs-reducer";

const maxLength200 = maxElementLength(200);

const DialogsForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <Field name={'newMessage'}
               component={Textarea}
               validate={[required, maxLength200]}
        />
        <div>
            <button>Enter</button>
        </div>
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
        props.sendMessageCreator(value.newMessage)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
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