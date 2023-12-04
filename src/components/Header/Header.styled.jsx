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
`;

//------------------Logo----------------------
export const Logo = styled.svg`
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
