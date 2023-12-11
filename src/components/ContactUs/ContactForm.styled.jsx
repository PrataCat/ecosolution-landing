import styled from "styled-components";
import { theme } from "../../variables";

export const Form = styled.form`
  min-width: 320px;
  padding-top: 36px;
  padding-bottom: 36px;
  padding-left: 12px;
  padding-right: 12px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  background-color: ${theme.secondaryBgColor};

  & > button {
    align-self: flex-end;
  }

  @media screen and (min-width: 768px) {
    min-width: 0;
    width: 342px;
    padding-left: 24px;
    padding-right: 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 596px;
    padding: 48px;
  }
`;

export const Label = styled.label`
  color: ${theme.accentColorDark};

  font-family: Fira Sans;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.64px;
`;

export const Input = styled.input`
  margin-top: 8px;
  margin-bottom: ${(prop) => (prop.id !== "message" ? "28px" : "16px")};
  padding-bottom: 8px;
  height: ${(prop) => (prop.id !== "message" ? "31px" : "147px")};

  color: ${theme.accentColorDark};
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid ${theme.accentColor};

  font-family: Fira Sans;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: -0.72px;

  &::placeholder {
    color: ${theme.secondaryTextColor};
  }

  @media screen and (min-width: 1280px) {
    margin-top: 12px;
    margin-bottom: ${(prop) => (prop.id !== "message" ? "28px" : "32px")};
    height: ${(prop) => (prop.id !== "message" ? "33px" : "149px")};

    font-size: 20px;
    font-weight: 400;
    letter-spacing: -0.8px;
  }
`;
