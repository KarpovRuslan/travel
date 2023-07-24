import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 80px 10%;
`;

export const DestinationContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, auto));
  grid-gap: 2rem;
  align-items: center;
  margin-top: 5rem;
`;
export const ItemContent = styled.div`
  position: relative;
  transition: all 0.3s cubic-bezier(0.495, 0.05, 0.55, 0.95);
  &:hover {
    transform: scale(1.04);
    cursor: pointer;
    text-shadow: 3px 3px 1px black;
    letter-spacing: 1px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 15px;
  filter: brightness(80%);
  will-change: filter;

  &:hover {
    filter: brightness(90%);
  }
`;

export const Text = styled.h5`
  position: absolute;
  font-size: 22px;
  font-weight: 500;
  color: var(--bg-color);
  left: 15px;
  bottom: 60px;
`;

export const Country = styled.p`
  position: absolute;
  font-size: 15px;
  color: var(--bg-color);
  left: 15px;
  bottom: 30px;
  letter-spacing: 2px;
`;

export const Title = styled.div`
  text-align: center;
  font-size: var(--h2-font);
  line-height: 1.2;
`;
