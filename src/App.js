import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div className = 'app-wrapper'>
    <header className = 'header'>
      <img src='https://cdn.motor1.com/images/mgl/lw3qW/s3/new-vw-logo.jpg'/>
    </header>
    <nav className = 'nav'>
      <div>
        <a>Profile</a>
      </div>
      <div>
        <a>Massages</a>
      </div>
      <div>
        <a>News</a>
      </div>
      <div>
        <a>Music</a>
      </div>
      <div>
        <a>Settings</a>
      </div>
    </nav>
    <div className = 'content'>
      <div>
        <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU'/>
      </div>
      <div>
        ava + description
      </div>
      <div>
        My posts
        <div>
          New post
        </div>
        <div>
          <div>
            Post 1
          </div>
          <div>
            Post 2
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
