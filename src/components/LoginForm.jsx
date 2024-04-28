// LoginForm.jsx
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../hooks/ContextHooks.js';
import useForm from '../hooks/formHooks';
import Button from './UI/Button';

const LoginForm = () => {
  useNavigate();
  const { handleLogin } = useUserContext();

  const initValues = {
    username: '',
    password: '',
  };

  const doLogin = async () => {
    try {
      await handleLogin(inputs);
    } catch (e) {
      alert(e.message);
    }
  };

  const { handleSubmit, handleInputChange, inputs } = useForm(doLogin, initValues);

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <Button text="Login" />
      </form>
    </>
  );
};

export default LoginForm;
