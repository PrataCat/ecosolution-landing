import styled from "styled-components";
import { theme } from "../../variables";

export const SlideWrap = styled.div`
  width: 100%;
  max-width: 440px;

  background-color: ${theme.secondaryBgColor};

  @media screen and (min-width: 768px) {
    width: 342px;
    max-width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 596px;
    max-width: 596px;
  }
`;

export const SlideMetaWrap = styled.div`
  width: 100%;
  padding-left: 12px;
  padding-right: 12px;

  @media screen and (min-width: 1280px) {
    padding-left: 48px;
    padding-right: 48px;
  }
`;

export const SlideTitleWrap = styled.div`
  width: 100%;
  height: 112px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${theme.accentColor};

  @media screen and (min-width: 1280px) {
    height: 130px;
  }
`;

export const SlideTitle = styled.h4`
  width: 175px;

  color: ${theme.accentColorDark};

  text-align: justify;
  font-family: Fira Sans;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: -0.72px;

  @media screen and (min-width: 768px) {
    width: 194px;
    font-size: 20px;
    letter-spacing: -0.8px;
  }

  @media screen and (min-width: 1280px) {
    width: 357px;
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;

export const SlideTextWrap = styled.div`
  width: 100%;
  height: 38px;
  padding-top: 12px;
  padding-bottom: 12px;

  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    height: 41px;
  }

  @media screen and (min-width: 1280px) {
    height: 79px;
    padding-top: 24px;
    padding-bottom: 36px;
  }
`;

export const SliderText = styled.p`
  color: {theme.accentColorDark};

  text-align: justify;
  font-family: Fira Sans;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.48px;
`;
