import RegisterForm from 'components/RegisterForm';

import { RegisterWrapper, Title } from './Register.styled';

const Registration = () => {
  return (
    <main>
      <RegisterWrapper>
        <Title>Create an account 🔑</Title>
        <RegisterForm />
      </RegisterWrapper>
    </main>
  );
};

export default Registration;
