import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify"
import { AppProvider } from './Ecommerce/ContextAndReducer/cartContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>

    <App />
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
    </AppProvider>
  </React.StrictMode>,
)
