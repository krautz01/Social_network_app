import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderConatainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderConatainer />
        <Navbar />
        <div className='app-content-wrapper'>
          <Route path='/dialogs'
            render={() => <DialogsContainer />}
          />
          <Route path='/profile/:userId?'
            render={() => <ProfileContainer />}
          />
          <Route path='/users'
            render={() => <UsersContainer />}
          />
          <Route path='/login'
            render={() => <LoginPage />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;