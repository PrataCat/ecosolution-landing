import styled from "styled-components";
import { theme } from "../../variables";

export const BurgerMenuBtn = styled.button`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: none;
  transition: fill ${theme.transitionTimingFunction};

  &:hover > svg,
  &:focus > svg {
    fill: ${theme.accentColor};
  }
`;

export const AccentBtn = styled.button`
  display: none;

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 39px;
    padding-top: 10px;
    padding-bottom: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.mainGap};

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
  }

  &:hover {
    color: ${theme.accentColor};
    background-color: ${theme.accentColorDark};
  }

  &:hover > svg {
    fill: ${theme.accentColor};
  }
`;

export const SecondaryBtn = styled.button`
  height: 39px;

  padding-left: 16px;
  padding-right: 4px;

  display: flex;
  gap: ${theme.mainGap};
  align-items: center;

  color: ${theme.accentColorDark};
  background-color: ${theme.mainBgColor};

  border-radius: 500px;
  border: 1px solid ${theme.accentColor};

  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.64px;

  transition: color ${theme.transitionTimingFunction},
    background-color ${theme.transitionTimingFunction},
    fill ${theme.transitionTimingFunction};

  &:hover {
    color: ${theme.accentColor};
    background-color: ${theme.accentColorDark};
  }

  &:hover > svg {
    fill: ${theme.accentColor};
  }
`;
