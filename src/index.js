import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from './store'
import {Provider} from 'react-redux'
// import * as serviceWorker from './serviceWorker';
const render = ()=>{
    ReactDOM.render(<Provider store={store} >
    <App />
    </Provider>, document.getElementById('root'));
}

render()

// 每次dispatch都会触发subscribe监听函数
// 传入render在每次dispatch后都重新绘制一次
store.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
