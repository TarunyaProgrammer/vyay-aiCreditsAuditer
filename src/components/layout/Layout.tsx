import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo_light.png" alt="Vyay Logo" className="h-8 dark:hidden" />
            <img src="/logo_dark.png" alt="Vyay Logo" className="h-8 hidden dark:block" />
            <span className="font-serif text-2xl font-medium">Vyay</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/about" className="text-sm font-medium hover:opacity-70 transition-opacity">About</Link>
            <Link to="/audit" className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
              Start Audit
            </Link>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <footer className="border-t py-12 bg-background">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-serif text-2xl font-medium">Vyay</span>
            <p className="text-sm text-muted-foreground">Reclaim your AI spend in 60 seconds.</p>
          </div>
          <div className="flex gap-8 text-sm font-medium">
            <Link to="/about" className="hover:opacity-70 transition-opacity">About</Link>
            <Link to="/privacy" className="hover:opacity-70 transition-opacity">Privacy</Link>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Vyay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
