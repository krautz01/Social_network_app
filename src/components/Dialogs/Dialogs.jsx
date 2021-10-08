import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + '' + s.active}>
                    <NavLink to="/dialogs/1">Angela</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Nikolaus</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Mark</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Franz</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Hanz</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Theresa</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/7">Rudolf</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/8">Lilie</NavLink>
                </div>
            </div>
            <div className = {s.massages}>
                <div className={s.massage}>Hi!</div>
                <div className={s.massage}>Wie geht's?</div>
                <div className={s.massage}>Es ist so kalt!</div>
            </div>
        </div>
    )
}

export default Dialogs;