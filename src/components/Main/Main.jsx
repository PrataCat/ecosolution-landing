import { Link } from "react-scroll";
import { Container } from "../../App.styled";
import logoicon from "../../images/sprite.svg";
import { LightBtn } from "../Buttons/Buttons";
import {
  AddWrap,
  Address,
  IconBtnLight,
  MainAdd,
  MainAddWrap,
  MainImg,
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
          <Link to="cases" spy={true} smooth={true}>
            <LightBtn>
              Learn more
              <IconBtnLight width={32} height={32}>
                <use href={`${logoicon}#icon-arrow-right`}></use>
              </IconBtnLight>
            </LightBtn>
          </Link>
        </MainTextWrap>
      </MainWrap>
      <MainAddWrap>
        <Address
          href="https://maps.app.goo.gl/jUpySPTpGMgWA1WR6"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </Address>
        <AddWrap>
          <Address href="mailto:office@ecosolution.co">
            office@ecosolution.com
          </Address>
          <MainAdd>ecosolution © 2023</MainAdd>
        </AddWrap>
      </MainAddWrap>
      <MainImg></MainImg>
    </Container>
  );
};

export default Main;
