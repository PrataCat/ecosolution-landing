import styled from "styled-components";
import { theme } from "../../variables";

export const MainWrap = styled.div`
  padding-top: 152px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const MainTitle = styled.h1`
  margin-bottom: 24px;

  display: inline-block;
  color: ${theme.accentColorDark};

  font-family: Oswald;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 64px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    width: 300px;
    margin-bottom: 0;

    font-size: 48px;
    line-height: 48px;
  }

  @media screen and (min-width: 1280px) {
    width: 485px;

    font-size: 64px;
    line-height: 64px;
  }
`;

export const MainTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  color: ${theme.accentColorDark};

  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.64px;

  @media screen and (min-width: 768px) {
    width: 342px;
    align-items: flex-start;
    gap: 43px;
  }

  @media screen and (min-width: 1280px) {
    width: 363px;
    gap: 20px;
  }
`;

export const MainText = styled.p`
  color: ${theme.accentColorDark};
`;

export const IconBtnLight = styled.svg`
  fill: ${theme.accentColor};
`;
