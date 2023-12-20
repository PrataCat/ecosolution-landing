import styled from "styled-components";
import { theme } from "../../variables";

export const SwiperSlider = styled.div`
  width: 100%;
  overflow: hidden;
`;

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

//-----------------Nav-----------------

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

  font-family: Fira Sans;
  font-size: 28px;
  font-weight: 300;
  letter-spacing: -1.12px;
`;

export const SwiperBtnWrap = styled.div`
  width: 144px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1280px) {
    width: 192px;
  }
`;
