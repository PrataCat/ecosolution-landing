import styled from "styled-components";
import { theme } from "../../variables";

export const ElectrTitle = styled.h2`
  width: 286px;
  margin-top: 36px;
  margin-bottom: 24px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  &::after {
    content: "";
    width: 1px;
    height: 48px;

    margin-top: 24px;
    margin-left: auto;
    margin-right: auto;

    display: block;

    background-color: ${theme.accentColor};
  }

  @media screen and (min-width: 768px) {
    width: 368px;
    margin-top: 100px;

    &::after {
      height: 87px;
    }
  }

  @media screen and (min-width: 1280px) {
    width: 491px;

    margin-top: 120px;
    margin-bottom: 17px;

    &::after {
      margin-top: 16px;
    }
  }
`;

export const ElectrText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.accentColor};

  font-family: Oswald;
  font-size: 48px;
  font-weight: 700;
  line-height: 48px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 100px;
    line-height: 100px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 164px;
    line-height: 164px;
  }
`;

export const ElectrSpan = styled.span`
  margin-left: 8px;

  color: ${theme.accentColorDark};

  text-align: center;
  font-family: Oswald;
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    margin-left: 24px;
    font-size: 28px;
    line-height: 48px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
  }
`;
