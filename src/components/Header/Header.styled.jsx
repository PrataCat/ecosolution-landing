import styled from "styled-components";
import { theme } from "../../variables";

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
`;

//------------------Logo----------------------
export const Logo = styled.svg`
  margin-left: 20px;
  margin-right: 11px;

  fill: ${theme.accentColorDark};
  cursor: pointer;
  transition: fill ${theme.transitionTimingFunction};

  &:hover,
  &:focus {
    fill: ${theme.accentColor};
  }
`;

//------------------Buttons----------------------

export const BtnWrap = styled.div`
  margin-right: 20px;

  @media screen and (min-width: 768px) {
    margin-right: 30px;
    display: flex;
    gap: 12px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 100px;
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
  fill: ${theme.accentColorLight};
  transition: fill ${theme.transitionTimingFunction};

  &:hover,
  &:focus {
    fill: ${theme.accentColor};
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

    background-color: ${theme.accentColor};
    border: none;
    border-radius: 500px;
    cursor: pointer;

    color: ${theme.accentColorDark};

    font-family: Fira Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.64px;

    transition: color ${theme.transitionTimingFunction},
      background-color ${theme.transitionTimingFunction};

    &:hover,
    &:focus {
      color: ${theme.accentColor};
      background-color: ${theme.accentColorDark};
    }

    &:hover > svg,
    &:focus > svg {
      fill: ${theme.accentColor};
    }
  }
`;

export const IconContact = styled.svg`
  fill: ${theme.accentColorDark};
  transition: fill ${theme.transitionTimingFunction};
`;
