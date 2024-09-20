import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
