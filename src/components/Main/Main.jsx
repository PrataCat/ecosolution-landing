import { Link } from "react-scroll";
import { Container } from "../../App.styled";
import { LightBtn } from "../Buttons/Buttons";
import {
  AddWrap,
  Address,
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
            <LightBtn>Learn more</LightBtn>
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
