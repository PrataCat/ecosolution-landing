import styled from "styled-components";
import { theme } from "../../variables";
import img from "../../images/main-img.jpg";
import img2x from "../../images/main-img-2x.jpg";
import imgtab from "../../images/main-img-tab.jpg";
import imgtab2x from "../../images/main-img-tab-2x.jpg";
import imgmob from "../../images/main-img-mob.jpg";
import imgmob2x from "../../images/main-img-mob-2x.jpg";

export const MainWrap = styled.div`
  padding-top: 152px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-bottom: 1px solid ${theme.accentColor};

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const MainTitle = styled.h1`
  margin-bottom: 24px;

  display: block;
  color: ${theme.accentColorDark};

  font-family: Oswald;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
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
  justify-content: center;
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
    width: 459px;
    gap: 20px;
  }
`;

export const MainText = styled.p`
  color: ${theme.accentColorDark};
  text-align: justify;

  @media screen and (min-width: 768px) {
    max-width: 342px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 363px;
  }
`;

//--------------Info in the bottom part-----------

export const MainAddWrap = styled.div`
  width: 100%;
  margin-top: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Address = styled.a`
  color: ${theme.accentColorDark};

  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.64px;
  transition: color ${theme.transitionTimingFunction};

  &:hover,
  &:focus {
    color: ${theme.accentColor};
  }
`;

export const AddWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    width: 342px;
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    width: 459px;
  }
`;

export const MainAdd = styled.p`
  display: none;

  @media screen and (min-width: 768px) {
    margin-left: auto;
    display: inline-block;
    color: ${theme.accentColorDark};

    font-family: Fira Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -0.64px;
  }
`;

//----------------MainImg----------------------

export const MainImg = styled.div`
  width: 100%;
  height: 200px;

  margin-top: 36px;

  background-color: ${theme.accentColorDark};
  background-image: url(${imgmob});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-resolution: 2dppx) {
    background-image: url(${imgmob2x});
  }

  @media screen and (min-width: 768px) {
    height: 348px;

    margin-top: 40px;

    background-image: url(${imgtab});

    @media (min-resolution: 2dppx) {
      background-image: url(${imgtab2x});
    }
  }

  @media screen and (min-width: 1280px) {
    height: 524px;

    margin-top: 36px;

    background-image: url(${img});

    @media (min-resolution: 2dppx) {
      background-image: url(${img2x});
    }
  }
`;
