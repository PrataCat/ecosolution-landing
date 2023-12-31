import styled from "styled-components";
import { theme } from "../../variables";

export const ContactWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    width: 244px;
  }

  @media screen and (min-width: 1280px) {
    width: 466px;
    gap: 32px;
  }
`;

export const ContactType = styled.p`
  margin-bottom: 8px;

  color: ${theme.accentColorDark};

  font-family: Fira Sans;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.64px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 16px;
  }
`;

export const ContactItem = styled.a`
  display: flex;
  align-items: center;

  color: ${theme.accentColorDark};

  text-align: justify;
  font-family: Fira Sans;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: -0.8px;

  &:hover > svg,
  &:focus > svg {
    stroke: ${theme.accentColor};
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;

export const ContactIcon = styled.svg`
  margin-right: 8px;
  color: ${theme.accentColorDark};
  fill: transparent;
  stroke: ${theme.accentColorDark};
  transition: stroke ${theme.transitionTimingFunction};

  &:hover,
  &:focus {
    stroke: ${theme.accentColor};
  }

  @media screen and (min-width: 768px) {
  }
`;

export const SocialLinkWrap = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    margin-left: 12px;
    gap: 32px;
  }
`;

export const SocialLink = styled.a`
  width: 24px;
  height: 24px;

  display: inline-block;

  color: ${theme.accentColorDark};

  &:hover > svg,
  &:focus > svg {
    stroke: ${theme.accentColor};
  }
`;

export const SocialIcon = styled.svg`
  color: ${theme.accentColorDark};
  fill: transparent;
  stroke: ${theme.accentColorDark};
  transition: stroke ${theme.transitionTimingFunction};
`;
