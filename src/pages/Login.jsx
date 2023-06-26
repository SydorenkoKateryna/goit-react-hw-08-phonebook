import { Link } from 'react-router-dom';
import LoginForm from 'components/LoginForm';

const Login = () => {
  return (
    <main>
      <b>Welcome Back 👋</b>

      <p>
        Today is a new day. It's your day. You shape it. Log in to start
        managing your contacts.
      </p>

      <LoginForm />

      <div>
        <p>Don't have an account?</p>
        <Link to="/register">Sign up</Link>
      </div>
    </main>
  );
};

export default Login;
