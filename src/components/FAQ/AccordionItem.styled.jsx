import styled from "styled-components";
import { theme } from "../../variables";

export const Item = styled.li`
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  border-top: 1px solid ${theme.accentColor};
  cursor: pointer;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    padding-top: 24px;
    padding-bottom: 24px;
  }
`;
export const AskWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const AccordionIcon = styled.button`
  width: 16px;
  height: 16px;
  padding: 4px;
  margin-right: 8px;

  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
    padding: 7px;
    margin-right: 16px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 24px;
  }
`;

export const StrokeOne = styled.div`
  width: 1px;
  height: 8px;

  background-color: ${theme.accentColor};
  transform: ${(props) =>
    props.active
      ? "translateX(calc(8px / 2 - 0.5px)) rotate(90deg)"
      : "translateX(calc(8px / 2 - 0.5px)) rotate(0deg)"};
  transition: 0.5s all;

  @media screen and (min-width: 768px) {
    width: 2px;
    height: 14px;

    transform: ${(props) =>
      props.active
        ? "translateX(calc(14px / 2 - 1px)) rotate(90deg)"
        : "translateX(calc(14px / 2 - 1px)) rotate(0deg)"};
  }
`;

export const StrokeTwo = styled.div`
  width: 8px;
  height: 1px;

  background-color: ${theme.accentColor};
  transform: ${(props) =>
    props.active
      ? "translateY(calc(-8px / 2 - 0.5px))"
      : "translateY(calc(-8px / 2 - 0.5px))"};
  transition: 0.5s all;

  @media screen and (min-width: 768px) {
    width: 14px;
    height: 2px;
    transform: ${(props) =>
      props.active
        ? "translateY(calc(-14px / 2 - 1px))"
        : "translateY(calc(-14px / 2 - 1px))"};
  }
`;

export const Ask = styled.h4`
  color: ${theme.accentColorDark};

  text-align: justify;
  font-family: Fira Sans;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: -0.72px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;

export const Answer = styled.p`
  max-height: ${(props) => (props.active ? "auto " : "0")};
  margin-top: ${(props) => (props.active ? "16px" : "0")};
  margin-left: 24px;
  margin-right: 0;

  overflow: hidden;
  color: ${theme.accentColorDark};

  text-align: justify;
  font-family: Fira Sans;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.56px;

  transition: 0.5s max-height, 0.5s margin;

  & .active {
    max-height: 2rem;
    margin: 1rem 0;
  }

  @media screen and (min-width: 768px) {
    margin-left: 44px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: ${(props) => (props.active ? "24px" : "0")};
    margin-left: 52px;
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;
