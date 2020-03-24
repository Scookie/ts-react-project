import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Hello from "./components/hello";

ReactDOM.render(<Hello name="TypeScript" enthusiasmLevel={3} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import { createStore } from "redux";
// import { enthusiasm } from "./reducers/index";
// import { StoreState } from "./types/index";
// import { EnthusiasmAction } from "./actions/index";
// import Hello from "./containers/hello";
// import { Provider } from "react-redux";

// const store = createStore<StoreState,EnthusiasmAction,any,any>(enthusiasm, {
//   enthusiasmLevel:1,
//   languageName: "TypeScript"
// });

// ReactDOM.render(
//   <Provider store={store}>
//     <Hello />
//   </Provider>, 
// document.getElementById('root'));
