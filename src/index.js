import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch().bind(store)}
                 /*updatePostText={store.updatePostText.bind(store)}
                 addMessage={store.addMessage.bind(store)}
                 updateMessageText={store.updateMessageText.bind(store)}*//>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
