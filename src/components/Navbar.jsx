import './Navbar.css';

const Navbar = () => {
    return (
      <nav className = 'nav'>
        <div className = 'item'>
          <a>Profile</a>
        </div>
        <div className = 'item'>
          <a>Massages</a>
        </div>
        <div className = 'item'>
          <a>News</a>
        </div>
        <div className = 'item'>
          <a>Music</a>
        </div>
        <div className = 'item'>
          <a>Settings</a>
        </div>
      </nav>
    )
}

export default Navbar;