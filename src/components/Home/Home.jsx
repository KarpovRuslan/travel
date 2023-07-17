import {
  TextSecond,
  TextThird,
  TextWrapper,
  Title,
  Wrapper,
} from "./Home.styled";

const Home = () => {
  return (
    <Wrapper id="home">
      <Title>Fly me to the moon</Title>
      <TextWrapper>
        Let me play among the stars
        <TextSecond>Let me see what spring is like</TextSecond>
        <TextThird>On a, Jupiter and Mars</TextThird>
      </TextWrapper>
    </Wrapper>
  );
};

export default Home;
