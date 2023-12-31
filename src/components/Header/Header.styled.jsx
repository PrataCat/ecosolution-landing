import styled from "styled-components";
import { theme } from "../../variables";

export const HeaderWrap = styled.header`
  width: 100%;
  height: 112px;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  z-index: 15;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > a {
    height: 40px;
    display: flex;
    align-items: center;
  }
`;

//------------------Logo----------------------
export const LogoBtn = styled.button`
  margin-right: 11px;

  background-color: transparent;
  border: none;

  &:focus > svg {
    fill: ${theme.accentColor};
  }
`;

export const Logo = styled.svg`
  fill: ${theme.accentColorDark};
  transition: fill ${theme.transitionTimingFunction};

  &:hover,
  &:focus {
    fill: ${theme.accentColor};
  }
`;

//------------------Buttons----------------------

export const BtnWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: ${theme.mainGap};
  }
`;

export const Burger = styled.svg`
  fill: ${theme.accentColorLight};
  transition: fill ${theme.transitionTimingFunction};
`;

export const IconContact = styled.svg`
  fill: ${theme.accentColorDark};
  transition: fill ${theme.transitionTimingFunction};
`;
