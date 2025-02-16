import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import './bootstrap.min.css'
import ecartStore from './redux/ecartStore.js'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ecartStore}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
   
  </React.StrictMode>,
)



