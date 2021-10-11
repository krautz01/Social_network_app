import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = () => {

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

    let dialogsElements = dialogs.map ( (d) => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = messages.map ( (m) => <Message message={m.message}/> ); /* отрисовывает сообщения используя компоненту Message и доступ через prop-класс компоненты к массиву */ 

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