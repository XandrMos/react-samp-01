import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NewApp from './components/NewApp';

//import App from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//It's element.
//const element = <h1>Hello 26 group!!!</h1>; 

root.render(<NewApp/>);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
