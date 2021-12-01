import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux_store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store = {store}>
        <App/>
      </Provider>
    </BrowserRouter>, document.getElementById('root') 
  );
}

rerenderEntireTree();

store.subscribe(() => {
  rerenderEntireTree();
});

/* import React from 'react';

const StoreContext = React.createContext(null);

export const Provider = (props) => {
    return <StoreContext.Provider value = {props.store}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext; */