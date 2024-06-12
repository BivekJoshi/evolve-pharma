import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import Aos from 'aos';

Aos.init({
  once: false,
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster position="top-right" reverseOrder={false} />
    <App />
  </React.StrictMode>,
)
