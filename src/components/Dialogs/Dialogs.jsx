import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import * as React from "react";




const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messageElements = props.state.message.map(m => <Message massage={m.message}/>)

    let newMessageElement = React.createRef();
    let newMessage = () => {
        let message = newMessageElement.current.value;
        props.addMessage(message);
        newMessageElement.current.value = '';
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={newMessage}>Enter</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;