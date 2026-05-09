import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from './index';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
