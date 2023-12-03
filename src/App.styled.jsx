import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 480px;

  margin: 0 auto;

  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
