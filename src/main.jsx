import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';


import { Provider } from './component/context';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  
    <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  
);
