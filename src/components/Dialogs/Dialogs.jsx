import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/"+props.id;
    return (
        <div className={s.dialog +''+ s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
    <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Angela'}, 
        {id: 2, name: 'Schröder'},
        {id: 3, name: 'Klaus'},
        {id: 4, name: 'Nico'},
        {id: 5, name: 'Marta'},
        {id: 6, name: 'Herr Müller'},
        {id: 7, name: 'Pr. von Hertgardt'},
        {id: 8, name: 'Uni'}, 
    
    ]

    let messagesData = [
        {id: 1, message: 'Hi!'}, 
        {id: 2, message: "Wie geht's?"},
        {id: 3, message: 'Es ist so kalt!'},
        {id: 4, message: 'Hi!'},
        {id: 5, message: 'Hallo!'},
        {id: 6, message: ''},
        {id: 7, message: ''},
        {id: 8, message: ''}, 
    
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name="Marta" id="5"/>
                <DialogItem name="Herr Müller" id="6"/>
                <DialogItem name="Pr. von Hertgardt" id="7"/>
                <DialogItem name="Uni" id="8"/>
            </div>
            <div className = {s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
            </div>
        </div>
    )
}

export default Dialogs;