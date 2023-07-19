import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  grid-gap: 3rem;
`;

export const Title = styled.h2`
  font-size: var(--h2-font);
  margin-bottom: 5px;
`;

export const Text = styled.p`
  font-size: var(--p-font);
  color: var(--second-color);
  line-height: 30px;
`;

export const Form = styled.form`
  max-width: 100%;
  width: 420px;
  position: relative;
  @media (max-width: 575px) {
    width: 350px;
  }
`;

export const Input = styled.input`
  &:hover {
    transform: scale(1.04);
    transition: ease 0.4s;
  }
  &:first-child {
    display: inline-flex;
    width: 100%;
    padding: 20px 150px 20px 30px;
    box-shadow: 5px 10px 30px rgb(85 85 85 /20%);
    outline: none;
    border: none;
    border-radius: 15px;
  }

  &:last-child {
    display: inline-block;
    position: absolute;
    outline: none;
    border: none;
    padding: 14px 30px;
    border-radius: 15px;
    background: var(--main-color);
    color: var(--bg-color);
    top: 6px;
    right: 6px;
    cursor: pointer;
  }
`;
