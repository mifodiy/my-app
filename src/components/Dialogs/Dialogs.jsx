import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.massage}
        </div>
    )
}

let dialogs = [
    {id: '1', name: 'Vova'},
    {id: '2', name: 'Anna'},
    {id: '3', name: 'Max'},
]

let message = [
    {id: '1', message: 'Hi'},
    {id: '2', message: 'Hi people'},
    {id: '3', message: 'yo'},
]

let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
let messageElements = message.map(m => <Message massage={m.message}/>)

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;