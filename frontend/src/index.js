import React from 'react';
import ReactDOM from 'react-dom/client';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';


const rootElement = 
document.getElementById('root');
const root = 
createRoot(rootElement);

root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );

// ReactDOM.render(
//     <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//     document.getElementById('root')
//   );