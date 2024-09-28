import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

import './index.css';
import Signup from './pages/Signup';
import DefaultLayout from './components/layout/DefaultLayout';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
