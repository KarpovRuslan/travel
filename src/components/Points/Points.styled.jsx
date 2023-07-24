import styled from "@emotion/styled";

export const Container = styled.section`
  justify-content: center;
  //align-items: center;
`;

export const Title = styled.div`
  text-align: center;
  font-size: var(--h2-font);
  line-height: 1.2;
`;

export const ItemsRow = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 1rem;
  align-items: center;
  text-align: center;
  margin-top: 2rem;
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  background: var(--bg-color);
  border: 1px solid transparent;
  padding: 20px 20px;
  border-radius: 4px;
  transition: all 1s ease 0s;

  &:hover {
    box-shadow: 5px 30px 56px rgba(5 55 55 55 /20%);
    border: 1px solid #f0eded;
    transform: translateY(-3px);
  }
`;

export const BoxInnerTextHeader = styled.h4`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 35px;
  text-align: center;
`;

export const BoxInnerTextSecond = styled.p`
  font-size: 15px;
  color: var(--second-color);
`;

export const BoxImg = styled.img`
  height: 250px;
  width: 300px;
  padding: 10px;
  background: var(--bg-color);
  box-shadow: 5px 10px 30px rgba(88 88 88 /20%);
  border-radius: 4px;
  margin: 20px;
  cursor: pointer;
`;
