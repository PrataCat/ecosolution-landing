import styled from "styled-components";
import { theme } from "../../variables";

export const FooterWrap = styled.footer`
  margin-top: 36px;
  padding-top: 24px;
  width: 100%;
  border-top: 1px solid ${theme.accentColor};
`;

export const FooterNavWrap = styled.section`
  height: 88px;
  position: relative;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.64px;
`;

export const FooterText = styled.p`
  color: ${theme.accentColorDark};

  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.64px;
`;
