import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import '../../index.css';
const DefaultLayout = () => {
  return (
    <div>
      {/* nav bar */}
      <Header />
      {/* actual page content */}
      <main className="main">
        <Outlet />
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
