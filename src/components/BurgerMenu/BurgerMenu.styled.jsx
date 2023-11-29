import styled from "styled-components";

export const BackDrop = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 36px 20px;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(23, 61, 51, 0.25);
  backdrop-filter: blur(2px);
  z-index: 10;

  @media screen and (min-width: 768px) {
    padding: 36px 30px;
  }

  @media screen and (min-width: 1280px) {
    padding: 36px 100px;
  }
`;

export const MenuWrap = styled.div`
  width: calc(100% - 40px);
  height: calc(100% - 72px);
  max-width: 440px;

  padding: 24px;

  position: absolute;
  top: 36px;
  right: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;

  border-radius: 25px;
  background-color: rgba(23, 61, 51, 0.75);
  backdrop-filter: blur(12.5px);

  @media screen and (min-width: 768px) {
    width: 320px;
    right: 30px;
  }

  @media screen and (min-width: 1280px) {
    width: 365px;
    right: 100px;
  }
`;

//------------------Button----------------------

export const BtnWrap = styled.div`
  width: 100%;

  &::after {
    content: "";
    width: 100%;
    height: 1px;

    margin-top: 4px;

    display: block;

    background-color: #fff;
  }
`;

export const ModalBtn = styled.button`
  width: 60px;
  height: 20px;

  display: flex;
  justify-content: flex-start;

  background-color: transparent;
  border: none;
  cursor: pointer;

  color: #fff;

  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.64px;

  &:hover,
  &:focus,
  &:hover > svg,
  &:focus > svg {
    stroke: #97d28b;
    color: #97d28b;
  }
`;

export const IconClose = styled.svg`
  stroke: #fff;
  color: #fff;
`;

//-------------Nav-------------------

export const NavList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Item = styled.li`
  color: ${(props) =>
    props.current ? "#97d28b" : "rgba(255, 255, 255, 0.25)"};

  font-family: Fira Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.96px;

  cursor: pointer;

  &:hover,
  &:focus,
  &:hover > svg,
  &:focus > svg {
    color: #fff;
    stroke: #fff;
  }
`;

export const NavIcon = styled.svg`
  margin-left: 8px;
  stroke: rgba(255, 255, 255, 0.25);
`;
