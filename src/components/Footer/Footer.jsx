import { Link } from "react-scroll";
import { Container } from "../../App.styled";
import { Logo } from "../Header/Header.styled";
import icon from "../../images/sprite.svg";
import { BtnTop } from "../Buttons/Buttons";
import {
  AddressWrap,
  FooterSocialIcon,
  FooterText,
  SocialWrap,
  FooterWrap,
  FooterNavWrap,
  LinkWrapper,
} from "./Footer.styled";
import { AddWrap, Address } from "../Main/Main.styled";

const Footer = () => {
  return (
    <FooterWrap>
      <Container>
        <FooterNavWrap>
          <LinkWrapper>
            <Link to="main" spy={true} smooth={true}>
              <Logo width={269} height={40}>
                <use href={`${icon}#icon-logo-svg`}></use>
              </Logo>
            </Link>
            <Link to="main" spy={true} smooth={true}>
              <BtnTop />
            </Link>
          </LinkWrapper>
          <SocialWrap>
            <a
              href="https://maps.app.goo.gl/jUpySPTpGMgWA1WR6"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FooterSocialIcon width={24} height={24}>
                <use href={`${icon}#icon-facebook`}></use>
              </FooterSocialIcon>
            </a>
            <a
              href="https://maps.app.goo.gl/jUpySPTpGMgWA1WR6"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FooterSocialIcon width={24} height={24}>
                <use href={`${icon}#icon-instagram`}></use>
              </FooterSocialIcon>
            </a>
          </SocialWrap>
        </FooterNavWrap>

        <AddressWrap>
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
            <FooterText>ecosolution © 2023</FooterText>
          </AddWrap>
        </AddressWrap>
      </Container>
    </FooterWrap>
  );
};

export default Footer;
