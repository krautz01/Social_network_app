import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/"+props.id;
    return (
        <div className={s.dialog +''+ s.active}>
            <NavLink to={path}>{props.name}</NavLink>{/* создает ссылку к каждому чату */}
        </div>
    )
};

const Message = (props) => {
    return (
    <div className={s.message}>{props.message}</div>
    )
};

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Angela'}, 
        {id: 2, name: 'Ervin'},
        {id: 3, name: 'Klaus'},
        {id: 4, name: 'Nico'},
    
    ]

    let messages = [
        {id: 1, message: 'Hi!'}, 
        {id: 2, message: "Wie geht's?"},
        {id: 3, message: 'Es ist so kalt!'},
        {id: 4, message: 'Hi!'},
    ]

    let messagesElements = messages.map ( m => <Message message={m.message}/> );
    let dialogsElements = dialogs.map ( d => <DialogItem name={d.name} id={d.id}/> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className = {s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;