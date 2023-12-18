import styled from "styled-components";
import { theme } from "../../variables";

export const FooterWrap = styled.footer`
  width: 100%;
  margin-top: 36px;
  padding-bottom: 24px;

  @media screen and (min-width: 768px) {
    padding-bottom: 40px;
  }
`;

export const FooterNavWrap = styled.section`
  height: 113px;
  padding-top: 24px;
  position: relative;

  border-top: 1px solid ${theme.accentColor};

  @media screen and (min-width: 768px) {
    height: 81px;
    padding-top: 40px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > a {
    height: 40px;
    display: flex;
    align-items: center;
  }
`;

export const SocialWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  & a {
    display: inline-block;
    height: 24px;
  }

  @media screen and (min-width: 768px) {
    left: 366px;
    transform: translateX(0);
    bottom: 8px;
  }

  @media screen and (min-width: 1280px) {
    left: 781px;
  }
`;

export const FooterSocialIcon = styled.svg`
  color: ${theme.accentColorDark};
  fill: transparent;
  stroke: ${theme.accentColorDark};
  transition: stroke ${theme.transitionTimingFunction};

  &:hover {
    stroke: ${theme.accentColor};
  }
`;

export const AddressWrap = styled.section`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  color: ${theme.accentColorDark};

  font-family: Fira Sans;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.64px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterText = styled.p`
  color: ${theme.accentColorDark};

  font-family: Fira Sans;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.64px;

  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
`;
