import { Container } from "../../App.styled";
import icon from "../../images/sprite.svg";
import {
  AboutText,
  AboutHeadWrap,
  AboutLine,
  AboutTitle,
  ValueList,
  ValueItem,
  ValueTitle,
  ValueText,
  WindMill,
  SolarBattery,
  IconGlobal,
} from "./About.styled";

const About = () => {
  return (
    <Container name="about">
      <AboutHeadWrap>
        <AboutTitle>Main values of our company</AboutTitle>
        <AboutLine>
          <AboutText>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world's energy needs.
          </AboutText>
        </AboutLine>
      </AboutHeadWrap>
      <ValueList>
        <ValueItem>
          <ValueTitle>
            <IconGlobal>
              <use href={`${icon}#icon-maximize-circle`}></use>
            </IconGlobal>
            Openness
          </ValueTitle>
          <ValueText>to the world, people, new ideas and projects</ValueText>
        </ValueItem>
        <ValueItem>
          <ValueTitle>
            <IconGlobal>
              <use href={`${icon}#icon-global-edit`}></use>
            </IconGlobal>
            Responsibility
          </ValueTitle>
          <ValueText>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </ValueText>
        </ValueItem>
        <WindMill></WindMill>
        <SolarBattery></SolarBattery>
        <ValueItem>
          <ValueTitle>
            <IconGlobal>
              <use href={`${icon}#icon-ranking`}></use>
            </IconGlobal>
            Innovation
          </ValueTitle>
          <ValueText>
            we use the latest technology to implement non-standard solutions
          </ValueText>
        </ValueItem>
        <ValueItem>
          <ValueTitle>
            <IconGlobal>
              <use href={`${icon}#icon-cpu-charge`}></use>
            </IconGlobal>
            Quality
          </ValueTitle>
          <ValueText>
            we do not strive to be the first among others, but we want to be the
            best in our business
          </ValueText>
        </ValueItem>
      </ValueList>
    </Container>
  );
};

export default About;
