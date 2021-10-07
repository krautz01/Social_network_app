//import logo from './logo.svg';
import './App.css';
//import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <div className='app-content'>
        <Navbar />
        <Profile />
        {/*<Dialogs />*/}
      </div>
    </div>
  );
}

export default App;