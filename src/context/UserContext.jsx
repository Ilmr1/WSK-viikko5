// UserContext.jsx
import { createContext, useState } from 'react';
import { useAuthentication, useUser } from '../hooks/ApiHooks.js';
import { useNavigate, useLocation } from 'react-router-dom';

const UserContext = createContext(null);

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { postLogin } = useAuthentication();
  const { getUserByToken } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (credentials) => {
    try {
      const response = await postLogin(credentials);
      localStorage.setItem('token', response.token);
      const userData = await getUserByToken(response.token);
      setUser(userData);
      navigate('/home');
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('token');
      setUser(null);
      navigate('/home');
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleAutoLogin = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const userData = await getUserByToken(token);
        setUser(userData);
        const origin = location.state?.from?.pathname || '/home';
        navigate(origin);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout, handleAutoLogin }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserProvider, UserContext };
