import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App/App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="flex flex-row flex-wrap justify-center items-start gap-3 bg-gray-200">
      <App />
    </div>
  </StrictMode>,
);
