// Logout.jsx
import { useEffect } from 'react';
import { useUserContext } from '../hooks/ContextHooks.js';
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
  const { handleLogout } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    handleLogout();
    navigate('/');
  }, [handleLogout, navigate]);

  return null;
};
