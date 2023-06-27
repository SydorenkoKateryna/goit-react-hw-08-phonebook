import RegisterForm from 'components/RegisterForm';
import { RegisterWrapper, TitleWrapper, Title } from './Register.styled';
import { FaUserLock } from 'react-icons/fa';

const Registration = () => {
  return (
    <main>
      <RegisterWrapper>
        <TitleWrapper>
          <Title>Create an account</Title>
          <FaUserLock size={40} />
        </TitleWrapper>
        <RegisterForm />
      </RegisterWrapper>
    </main>
  );
};

export default Registration;
