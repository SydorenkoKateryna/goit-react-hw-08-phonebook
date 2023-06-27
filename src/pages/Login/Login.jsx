import LoginForm from 'components/LoginForm';
import {
  LoginWrapper,
  Title,
  AfterTitle,
  LinkWrapper,
  Text,
  LinkStyled,
} from './Login.styled';

const Login = () => {
  return (
    <main>
      <LoginWrapper>
        <Title>Welcome Back 👋</Title>

        <AfterTitle>
          Today is a new day. It's your day. You shape it. Log in to start
          managing your contacts.
        </AfterTitle>

        <LoginForm />

        <LinkWrapper>
          <Text>Don't have an account?</Text>
          <LinkStyled to="/register">Sign up</LinkStyled>
        </LinkWrapper>
      </LoginWrapper>
    </main>
  );
};

export default Login;
