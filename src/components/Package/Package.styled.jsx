import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  grid-gap: 2rem;
  align-items: center;
  margin-top: 3rem;
`;

export const Wrapper = styled.div`
  position: relative;
  transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  will-change: filter;
  cursor: pointer;

  &:hover {
    filter: brightness(92%);
    transform: scale(1.04);
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;

// .thum h3 {
//   position: absolute;
//   font-size: 30px;
//   font-weight: 600;
//   text-align: right;
//   color: var(--bg-color);
//   top: 36px;
//   right: 40px;
// }

export const Info = styled.div`
  //   display: flex;
  //   flex-wrap: wrap;
  //   align-items: center;
  //   justify-content: space-between;
  padding-top: 10px;
  margin-bottom: 35px;
`;

export const Place = styled.h4`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Duration = styled.p`
  font-size: 15px;
  color: var(--second-color);
`;

export const Title = styled.div`
  text-align: center;
  font-size: var(--h2-font);
  line-height: 1.2;
`;
