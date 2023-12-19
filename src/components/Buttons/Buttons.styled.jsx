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

  &:focus {
    outline: 1px solid #173d33;
  }

  &:hover > svg,
  &:focus > svg {
    fill: ${theme.accentColor};
  }
`;

//-------------------Dark buttons------------------------

export const AccentBtn = styled.button`
  width: 130px;
  height: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: ${(props) => (props.active ? "flex" : "none")};
  margin-left: ${(props) => (props.active ? "auto" : "0")};
  margin-right: ${(props) => (props.active ? "auto" : "0")};
  margin-top: ${(props) => (props.active ? "12px" : "0")};
  justify-content: center;
  align-items: center;
  gap: ${theme.mainGap};

  color: ${theme.accentColorDark};
  background-color: ${theme.accentColor};
  border: none;
  border-radius: 500px;
  cursor: pointer;

  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  transition: color ${theme.transitionTimingFunction},
    background-color ${theme.transitionTimingFunction};

  @media screen and (min-width: 768px) {
    width: 140px;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
  }

  &:hover,
  &:focus {
    color: ${theme.accentColor};
    background-color: ${theme.accentColorDark};
  }

  &:hover > svg,
  &:focus > svg {
    fill: ${theme.accentColor};
  }
`;

//-------------------Light buttons------------------------

export const SecondaryBtn = styled.button`
  height: 40px;

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

  &:hover,
  &:focus {
    color: ${theme.accentColor};
    background-color: ${theme.accentColorDark};
  }

  &:hover > svg,
  &:focus > svg {
    fill: ${theme.accentColor};
  }
`;

export const IconBtnLight = styled.svg`
  fill: ${theme.accentColor};
`;

//-------------------Slider------------------------

export const PrevBtn = styled.button`
  width: 66px;
  height: 66px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;

  &:hover > svg,
  &:focus > svg {
    stroke: ${theme.accentColor};
  }

  @media screen and (min-width: 1280px) {
    width: 84px;
    height: 84px;
  }
`;

export const NextBtn = styled.button`
  width: 66px;
  height: 66px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;

  &:hover > svg,
  &:focus > svg {
    stroke: ${theme.accentColor};
  }

  @media screen and (min-width: 1280px) {
    width: 84px;
    height: 84px;
  }
`;

export const SliderIcon = styled.svg`
  width: 66px;
  height: 66px;

  fill: transparent;
  stroke: ${theme.accentColorDark};
  transition: stroke ${theme.transitionTimingFunction};

  @media screen and (min-width: 1280px) {
    width: 84px;
    height: 84px;
  }
`;

export const BtnMore = styled.button`
  width: 60px;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${theme.accentColor};
  border-radius: 100px;
  border: 0;

  transition: background-color ${theme.transitionTimingFunction},
    stroke ${theme.transitionTimingFunction};

  &:hover,
  &:focus {
    background-color: ${theme.accentColorDark};
  }

  &:hover > svg,
  &:focus > svg {
    stroke: ${theme.accentColor};
  }
`;

export const SliderBottomIcon = styled.svg`
  fill: transparent;
  background-color: transparent;
  stroke: ${theme.accentColorDark};
  border-radius: 50px;
`;

//-------------------Footer------------------------

export const BtnUp = styled.button`
  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${theme.accentColor};
  border-radius: 100px;
  border: 0;

  transition: background-color ${theme.transitionTimingFunction},
    stroke ${theme.transitionTimingFunction};

  &:hover,
  &:focus {
    background-color: ${theme.accentColorDark};
  }

  &:hover > svg,
  &:focus > svg {
    stroke: ${theme.accentColor};
  }
`;

export const IconBtnUp = styled.svg`
  stroke: ${theme.accentColorDark};
  fill: transparent;
`;
