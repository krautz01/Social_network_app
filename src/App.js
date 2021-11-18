import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
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
            render={() => <Dialogs state={props.state.dialogsPage} />} />

          <Route path='/profile'
            render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>} />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;