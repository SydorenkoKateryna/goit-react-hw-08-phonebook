import LoginForm from 'components/LoginForm';
import {
  LoginWrapper,
  TitleWrapper,
  Title,
  AfterTitle,
  LinkWrapper,
  Text,
  LinkStyled,
} from './Login.styled';

import { PiHandWavingFill } from 'react-icons/pi';

const Login = () => {
  return (
    <main>
      <LoginWrapper>
        <TitleWrapper>
          <Title>Welcome back</Title>
          <PiHandWavingFill size={40} />
        </TitleWrapper>

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
