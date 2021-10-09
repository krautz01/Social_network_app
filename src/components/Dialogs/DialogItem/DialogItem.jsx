import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/"+props.id;
    return (
        <div className={s.dialog +''+ s.active}>
            <NavLink to={path}>{props.name}</NavLink>{/* создает ссылку к каждому нейму чата */}
        </div>
    )
}
export default DialogItem;