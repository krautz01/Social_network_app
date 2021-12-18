import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://i.pinimg.com/originals/0f/41/d0/0f41d0404ae75869088e7c150affab84.png' />
            <div className = {s.loginBlock} >
                { props.isAuth ? props.login
                : <NavLink to = {'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;
