import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from './Routes/AppRoutes';


function App() {
  return (
    <>
      <Router>
        <AppRoutes />
        <ToastContainer
          position="top-center"
          autoClose={false}
          closeOnClick={false}
          draggable={false}
          hideProgressBar
          toastClassName="confirm-toast"
          bodyClassName="confirm-toast-body"
        />
      </Router>
    </>
  );
}

export default App;
