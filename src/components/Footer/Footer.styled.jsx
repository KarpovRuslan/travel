import styled from "styled-components";

export const Contact = styled.section`
  background: var(--main-color);
`;

export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Wrapper = styled.div`
  padding: 20px 0;
`;

export const Text = styled.p`
  text-align: center;
  padding-top: 90px;
  color: var(--bg-color);
  font-size: 14px;
  letter-spacing: 2px;
`;

export const SocialLinks = styled.a`
  height: 40px;
  width: 40px;
  background: var(--bg-color);
  color: var(--main-color);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 21px;
  border-radius: 15px;
  transition: 0.3s;
  margin-left: 10px;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ItemPage = styled.a`
  color: #ffffbf;
  font-size: var(--p-font);
  display: block;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: var(--bg-color);
    transform: translateX(14px);
  }
`;

export const List = styled.div`
  width: 25%;
  @media (max-width: 1040px) {
    width: 50%;
    margin-bottom: 12px;
  }
  @media (max-width: 575px) {
    width: 100%;
  }
`;

export const ListTitle = styled.h4`
  font-size: 21px;
  color: var(--bg-color);
  margin-bottom: 30px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    height: 2px;
    width: 60px;
    left: 0;
    bottom: -10px;
    background: var(--bg-color);
  }
`;
