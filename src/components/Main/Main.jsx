import { Container } from "../../App.styled";
import logoicon from "../../images/sprite.svg";
import { LightBtn } from "../Buttons/Buttons";
import {
  IconBtnLight,
  MainText,
  MainTextWrap,
  MainTitle,
  MainWrap,
} from "./Main.styled";

const Main = () => {
  return (
    <Container id="main">
      <MainWrap>
        <MainTitle>RENEWABLE ENERGY For any task</MainTitle>
        <MainTextWrap>
          <MainText>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </MainText>
          <LightBtn>
            Learn more
            <IconBtnLight width={32} height={32}>
              <use href={`${logoicon}#icon-arrow-right`}></use>
            </IconBtnLight>
          </LightBtn>
        </MainTextWrap>
      </MainWrap>
    </Container>
  );
};

export default Main;
