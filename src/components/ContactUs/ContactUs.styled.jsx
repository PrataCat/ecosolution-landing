import styled from "styled-components";
import { theme } from "../../variables";

export const ContactTitle = styled.h2`
  margin-top: 36px;
  display: flex;
  justify-content: center;

  color: ${theme.accentColorDark};

  @media screen and (min-width: 768px) {
    margin-top: 100px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 120px;
  }
`;

export const ContactUsWrap = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 120px;
  }
`;
