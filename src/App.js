//import logo from './logo.svg';
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
        {/* <Route path = '/dialogs' component={Dialogs} />
        <Route path = '/profile' component={Profile} /> */} 
          
        <Route path = '/dialogs' render={ () => <Dialogs/>} />
        <Route path = '/profile' render={ () => <Profile posts={props.posts}/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;