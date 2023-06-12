import React from 'react';
import ReactDOM from 'react-dom/client';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

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
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>,
//     document.getElementById('root')
//   );