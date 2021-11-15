import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {updateNewPostText} from './redux/state';
import {addPost} from './redux/state';
import { MemoryRouter } from 'react-router';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}