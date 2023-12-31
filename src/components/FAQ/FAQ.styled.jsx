import styled from "styled-components";
import { theme } from "../../variables";

export const AccordionWrap = styled.div`
  width: 100%;
  margin-top: 36px;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    position: relative;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 120px;
  }
`;

export const AccordionTitle = styled.h2`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 347px;
    margin-left: 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 398px;
    margin-left: 185px;
  }
`;

export const AccordionList = styled.ul`
  width: 100%;
  margin-top: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    width: 342px;
    margin-top: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 596px;
  }
`;

export const LastQuestWrap = styled.div`
  width: 100%;
  margin-top: 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.mainGap};

  @media screen and (min-width: 768px) {
    width: 299px;
    position: absolute;
    bottom: 0;
    right: 43px;
  }

  @media screen and (min-width: 1280px) {
    width: 399px;
    right: 60px;
  }
`;

export const LastQuest = styled.h4`
  width: 100%;

  display: flex;
  justify-content: center;

  color: ${theme.accentColorDark};

  text-align: justify;
  font-family: Fira Sans;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: -0.72px;

  @media screen and (min-width: 768px) {
    width: 300px;
  }

  @media screen and (min-width: 1280px) {
    width: 399px;
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;
