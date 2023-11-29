import styled from "styled-components";

export const HeaderWrap = styled.header`
  width: 100%;
  height: 112px;

  position: fixed;
  top: 0;
  left: 0;
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

//------------------Logo----------------------
export const Logo = styled.svg`
  margin-left: 20px;
  margin-right: 11px;

  fill: #173d33;
  cursor: pointer;
`;

//------------------Buttons----------------------

export const BtnWrap = styled.div`
  margin-right: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 12px;
  }
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
