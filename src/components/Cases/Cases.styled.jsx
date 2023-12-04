import styled from "styled-components";
import { theme } from "../../variables";

export const SwiperSlider = styled.div`
  width: 100%;
  overflow: hidden;
`;

//-----------------Nav-----------------

export const SwiperHeadWrap = styled.div`
  width: 100%;
  min-width: 0;
  margin-top: 36px;
  margin-bottom: 19px;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
    margin-bottom: 32px;
    justify-content: space-between;
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 120px;
    margin-bottom: 114px;
  }
`;

export const CasesTitleWrap = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    &::after {
      content: "";
      width: 1px;
      height: 65px;
      margin-left: 90px;

      background-color: ${theme.accentColor};
    }
  }

  @media screen and (min-width: 1280px) {
    &::after {
      height: 96px;
      margin-left: 221px;

      background-color: ${theme.accentColor};
    }
  }
`;

export const CasesTitle = styled.h2`
  width: 264px;

  display: inline-block;

  color: ${theme.accentColorDark};

  @media screen and (min-width: 1280px) {
    width: 398px;
  }
`;

export const SwiperNav = styled.div`
  width: 100%;
  height: 73px;
  margin-top: 24px;

  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 342px;
    margin-top: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 459px;
  }
`;

export const SwiperPage = styled.div`
  align-self: flex-end;

  color: ${theme.accentColorDark};

  text-align: justify;
  font-family: Fira Sans;
  font-size: 28px;
  font-weight: 300;
  letter-spacing: -1.12px;
`;

export const SwiperBtnWrap = styled.div`
  display: flex;
  gap: ${theme.mainGap};
  align-self: flex-start;

  @media screen and (min-width: 1280px) {
    gap: 24px;
  }
`;

export const SwiperBtnPrev = styled.button`
  width: 66px;
  height: 66px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;

  &:hover > svg {
    stroke: ${theme.accentColor};
  }
`;

export const SwiperBtnNext = styled.button`
  width: 66px;
  height: 66px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;

  &:hover > svg {
    stroke: ${theme.accentColor};
  }
`;

export const SliderIcon = styled.svg`
  width: 66px;
  height: 66px;

  fill: transparent;
  stroke: ${theme.accentColorDark};
  transition: stroke ${theme.transitionTimingFunction};
`;

//-----------------Slide-----------------

export const SwiperSlide = styled.div`
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

export const SlideTitleWrap = styled.div`
  width: 100%;
  height: 112px;

  padding-left: 12px;
  padding-right: 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${theme.accentColor};

  @media screen and (min-width: 1280px) {
    height: 130px;
    padding-left: 48px;
    padding-right: 48px;
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
  &:focus,
  &:hover > svg,
  &:focus > svg {
    stroke: ${theme.accentColor};
    background-color: ${theme.accentColorDark};
  }
`;

export const SliderBottomIcon = styled.svg`
  fill: transparent;
  background-color: transparent;
  stroke: ${theme.accentColorDark};
  border-radius: 50px;
`;

export const SlideTextWrap = styled.div`
  width: 100%;
  height: 38px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;

  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    height: 41px;
  }

  @media screen and (min-width: 1280px) {
    height: 79px;
    padding-top: 24px;
    padding-bottom: 36px;
    padding-left: 48px;
    padding-right: 48px;
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
