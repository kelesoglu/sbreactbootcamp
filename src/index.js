import React from 'react';
import ReactDOM from 'react-dom/client';
//import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
//import registerServiceWorker from "./registerServiceWorker";
//import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
//import { BrowserRouter } from 'react-router-dom';

// const root =ReactDOM.createRoot (document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App/>
//     </BrowserRouter>
//     </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// ReactDOM.render(
//   <React.StrictMode>
//   <BrowserRouter>
//     <App/>
//   </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
    
//   </React.StrictMode>
// );
// export default ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//registerServiceWorker();
reportWebVitals();
