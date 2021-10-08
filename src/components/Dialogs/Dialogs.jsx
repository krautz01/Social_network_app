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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Angela" id="1"/>
                <DialogItem name="Schröder" id="2"/>
                <DialogItem name="Klaus" id="3"/>
                <DialogItem name="Nico" id="4"/>
                <DialogItem name="Marta" id="5"/>
                <DialogItem name="Herr Müller" id="6"/>
                <DialogItem name="Pr. von Hertgardt" id="7"/>
                <DialogItem name="Uni" id="8"/>
            </div>
            <div className = {s.messages}>
                <Message message="Hi!"/>
                <Message message="Wie geht's?"/>
                <Message message="Es ist so kalt!"/>
                <Message message="Hi!"/>
                <Message message="Hallo!"/>
            </div>
        </div>
    )
}

export default Dialogs;