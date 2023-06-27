import {
  Wrapper,
  TitleWrapper,
  Title,
  AfterTitle,
  TextLittle,
  TextBig,
  BackgroundImage,
} from './Home.styled';

import img from './home@1x.jpg';

const Home = () => {
  return (
    <main>
      <Wrapper>
        <TitleWrapper>
          <Title>Phonebook</Title>
          <AfterTitle>
            <TextBig>communicate</TextBig>
            <TextLittle>more</TextLittle>
            <TextBig>worry</TextBig>
            <TextLittle>less</TextLittle>
          </AfterTitle>
        </TitleWrapper>

        <BackgroundImage imgUrl={img}></BackgroundImage>
      </Wrapper>
    </main>
  );
};

export default Home;
