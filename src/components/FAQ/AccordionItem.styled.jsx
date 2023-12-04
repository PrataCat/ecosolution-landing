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
`;
export const AccordionIcon = styled.button`
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  transform: translateX(-2.5rem) translateY(-0.25rem);
  background-color: transparent;
  border: none;
`;

export const StrokeOne = styled.div`
  content: "";
  position: relative;
  z-zindex: 1;
  transition: 0.5s all;

  width: 2px;
  height: 16px;

  background-color: ${theme.accentColor};
  transform: ${(props) =>
    props.active
      ? "translateX(calc(16px / 2 - 1px)) rotate(90deg)"
      : "translateX(calc(16px / 2 - 1px)) rotate(0deg)"};
`;

export const StrokeTwo = styled.div`
  content: "";
  position: relative;
  z-zindex: 2;
  transition: 0.5s all;

  width: 16px;
  height: 2px;

  background-color: ${theme.accentColor};
  transform: ${(props) =>
    props.active
      ? "translateY(calc(-16px / 2 - 1px))"
      : "translateY(calc(-16px / 2 - 1px))"};
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
  margin-bottom: ${(props) => (props.active ? "16px" : "0")};
  margin-left: 0;
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
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;
