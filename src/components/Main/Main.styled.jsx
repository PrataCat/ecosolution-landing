import styled from "styled-components";
import { theme } from "../../variables";

export const MainWrap = styled.div`
  padding-top: 152px;
  display: flex;
  justify-content: space-between;
`;

export const MainTitle = styled.h1`
  width: 485px;
  display: inline-block;
  color: ${theme.accentColorDark};

  font-family: Oswald;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 64px;
  text-transform: uppercase;
`;

export const MainTextWrap = styled.div`
  width: 363px;

  color: ${theme.accentColorDark};

  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.64px;
`;

export const MainText = styled.p`
  padding-bottom: 20px;
  color: ${theme.accentColorDark};
`;

export const IconBtnLight = styled.svg`
  fill: ${theme.accentColor};
`;
