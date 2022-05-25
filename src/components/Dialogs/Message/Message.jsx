import s from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.massage}

        </div>
    )
}

export default Message;