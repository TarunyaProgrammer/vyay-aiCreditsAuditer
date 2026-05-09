import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from './LayoutComponents';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
