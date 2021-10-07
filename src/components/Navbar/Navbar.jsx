import s from './Navbar.module.css';
console.log(s);

const Navbar = () => {
    return (
      <nav className = {s.nav}>
        <div className = {s.item}>
          <a>Profile</a>
        </div>
        <div className = {'${s.item} ${s.active'}>
          <a href = "/profile">Massages</a>
        </div>
        <div className = {s.item}>
          <a href = "/dialogs">News</a>
        </div>
        <div className = {s.item}>
          <a href = "/profile">Music</a>
        </div>
        <div className = {s.item}>
          <a>Settings</a>
        </div>
      </nav>
    )
}

export default Navbar;