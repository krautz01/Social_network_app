import s from './../Dialogs.module.css';

const Message = (props) => {
    return (
    <div className={s.message}>{props.message}</div> /* берет доступ к массиву с сообщениями */
    )
}

export default Message;