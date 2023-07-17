import styled from "styled-components";
import photo from "../../assets/img/bg.webp";

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${photo});
  background-size: cover;
  background-position: center;
  //   display: grid;
  //   grid-template-columns: repeat(1, 1fr);
  align-items: center;
`;

export const Title = styled.h1`
  font-size: var(--big-font);
  line-height: 1.2;
  color: var(--bg-color);
  letter-spacing: 8px;
  margin-bottom: 24px;
`;

export const TextWrapper = styled.p`
  font-size: 26px;
  color: #ffffbf;
  font-weight: 400;
  line-height: 36px;
  margin-bottom: 15px;
`;

export const TextSecond = styled.p`
  font-size: 24px;
  margin-left: 15px;
`;

export const TextThird = styled.p`
  font-size: 22px;
  margin-left: 35px;
`;
