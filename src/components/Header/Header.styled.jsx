import styled from "styled-components";

export const HeaderWrap = styled.header`
  width: 100%;
  height: 112px;

  border-color: #fff;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover,
  &:focus {
    fill: #97d28b;
  }
`;

export const Logo = styled.svg`
  margin-left: 20px;
  margin-right: 11px;

  fill: #173d33;
  cursor: pointer;
`;

export const BtnWrap = styled.div`
  margin-right: 20px;

  display: flex;
  gap: 12px;
`;

export const MenuBtn = styled.button`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Burger = styled.svg`
  fill: #dcefd8;

  &:hover,
  &:focus {
    fill: #97d28b;
  }
`;

export const ModalBtn = styled.button`
  width: 60px;
  height: 20px;
  margin-right: 19px;

  display: flex;
  justify-content: start;

  background-color: transparent;
  border: none;
  cursor: pointer;

  color: #000;

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
  stroke: #000;
  color: #000;
`;

export const ContactBtn = styled.button`
  display: none;

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 39px;
    padding-top: 10px;
    padding-bottom: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    background-color: #97d28b;
    border: none;
    border-radius: 500px;
    cursor: pointer;

    color: #173d33;

    font-family: Fira Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.64px;

    &:hover,
    &:focus {
      color: #97d28b;
      background-color: #173d33;
    }

    &:hover > svg,
    &:focus > svg {
      fill: #97d28b;
    }
  }
`;

export const IconContact = styled.svg`
  fill: #173d33;
`;
