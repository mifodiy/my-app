import s from './../Dialogs.module.css'

const Message = ({massage}) => {
    return (
        <div className={s.message}>
            {massage}
        </div>
    )
}

export default Message;