import styled from 'styled-components';

const Title = styled.h1`
  font-weight: 500;
  font-size: 48;
  text-align: center;
`;

const Home = () => {
  return (
    <main>
      <Title>Phonebook welcome page </Title>
    </main>
  );
}

export default Home;