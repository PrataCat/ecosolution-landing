import styled from "styled-components";
import { theme } from "../../variables";
import solarBattery from "../../images/value-solar-battery.jpg";
import solarBattery2x from "../../images/value-solar-battery-2x.jpg";
import solarBatteryTab from "../../images/value-solar-battery-tab.jpg";
import solarBatteryTab2x from "../../images/value-solar-battery-tab-2x.jpg";
import windMill from "../../images/value-windmill.jpg";
import windMill2x from "../../images/value-windmill-2x.jpg";
import windMillTab from "../../images/value-windmill-tab.jpg";
import windMillTab2x from "../../images/value-windmill-tab-2x.jpg";

//-------------Head---------------
export const AboutHeadWrap = styled.div`
  margin-top: 36px;

  @media screen and (min-width: 768px) {
    margin-top: 100px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 120px;
  }
`;

export const AboutTitle = styled.h2`
  color: ${theme.accentColorDark};

  @media screen and (min-width: 768px) {
    width: 272px;
  }

  @media screen and (min-width: 1280px) {
    width: 365px;
  }
`;

export const AboutLine = styled.div`
  display: none;

  background-color: ${theme.accentColor};

  @media screen and (min-width: 768px) {
    width: 1px;
    height: 110px;

    display: block;

    background-color: ${theme.accentColor};
  }

  @media screen and (min-width: 1280px) {
    width: 1px;
    height: 87px;
  }
`;

export const AboutText = styled.p`
  margin-top: 24px;

  color: ${theme.accentColorDark};

  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.64px;

  @media screen and (min-width: 768px) {
    width: 342px;

    margin-top: 0px;
    margin-left: 11px;
  }

  @media screen and (min-width: 1280px) {
    width: 459px;
  }
`;

//-----------Values---------------

export const ValueList = styled.ul`
  width: 100%;
  margin-top: 36px;
  display: grid;
  gap: 24px;

  grid-template-columns: repeat(auto-fit, minmax(148px, 1fr));

  @media screen and (min-width: 768px) {
    margin-top: 100px;

    grid-template-columns: repeat(auto-fit, minmax(159px, 1fr));
  }

  @media screen and (min-width: 1280px) {
    margin-top: 122px;

    grid-template-columns: repeat(auto-fit, minmax(274px, 1fr));
    gap: 48px;
  }
`;

export const ValueItem = styled.li`
  height: 197px;
  padding: 12px;

  background-color: ${theme.secondaryBgColor};

  @media screen and (min-width: 768px) {
    height: 197px;
  }

  @media screen and (min-width: 1280px) {
    height: 339px;

    padding: 48px 24px;
  }
`;

export const WindMill = styled.li`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    background: ${theme.secondaryBgColor};
    grid-column: span 2;

    background-image: url(${windMillTab});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media (min-resolution: 2dppx) {
      background-image: url(${windMillTab2x});
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${windMill});

    @media (min-resolution: 2dppx) {
      background-image: url(${windMill2x});
    }
  }
`;

export const SolarBattery = styled.li`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    background: ${theme.secondaryBgColor};
    grid-column: span 2;

    background-image: url(${solarBatteryTab});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media (min-resolution: 2dppx) {
      background-image: url(${solarBatteryTab2x});
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${solarBattery});

    @media (min-resolution: 2dppx) {
      background-image: url(${solarBattery2x});
    }
  }
`;

export const ValueTitle = styled.h3`
  text-align: center;

  color: ${theme.accentColorDark};

  font-family: Oswald;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;

  &::after {
    content: "";
    width: 124px;
    height: 1px;

    margin: 33px auto 0 auto;

    display: block;

    background-color: ${theme.accentColor};
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;

    &::after {
      width: 135px;
      margin: 51px auto 0 auto;
    }
  }

  @media screen and (min-width: 1280px) {
    font-size: 32px;
    line-height: 48px;

    &::after {
      width: 226px;
      margin: 94px auto 0 auto;
    }
  }
`;

export const ValueText = styled.p`
  margin-top: 12px;
  color: ${theme.accentColorDark};

  text-align: justify;
  font-family: Fira Sans;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.56px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    margin-top: 24px;

    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;
