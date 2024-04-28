// Layout.jsx
import { useEffect } from 'react';
import {Link, Outlet} from 'react-router-dom';
import { useUserContext } from '../hooks/ContextHooks.js';

const Layout = () => {
  const { user, handleAutoLogin } = useUserContext();

  useEffect(() => {
    handleAutoLogin();
  }, [handleAutoLogin]);

  return (
    <div>
      <header>
        <nav>
          <Link to="/">Etusivu </Link>
          {user ? (
            <>
              <Link to="/profile">Profiili </Link>
              <Link to="/logout">Logout</Link>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
          <Link to="/upload">Upload</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="m-12 text-xl">Copyright 2024</footer>
    </div>
  );
};

export default Layout;
