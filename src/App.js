import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-content-wrapper'>
          <Route path='/dialogs'
            render={() => <DialogsContainer />}
          />
          <Route path='/profile'
            render={() => <Profile />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;