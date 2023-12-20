import { Link } from "react-scroll";
import { useState } from "react";
import {
  BtnWrap,
  Burger,
  HeaderWrap,
  IconContact,
  Logo,
  LogoBtn,
  Nav,
} from "./Header.styled";
import logoicon from "../../images/sprite.svg";
import BurgerMenu from "../BurgerMenu";
import { Container } from "../../App.styled";
import { BurgerBtn, ContactBtn } from "../Buttons/Buttons";

const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  const changeBg = () => {
    if (window.scrollY > 10) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  const hendleClick = (e) => {
    if (e === undefined) {
      setIsOpenMenu(!isOpenMenu);
    } else {
      const section = e.target.textContent;

      if (e.target.nodeName === "A") {
        setCurrentSection(section);
      }
    }

    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <HeaderWrap
      style={{ backgroundColor: isScrolling ? "#fff" : "transparent" }}
    >
      <Container>
        <Nav>
          <Link to="main" spy={true} smooth={true}>
            <LogoBtn type="button">
              <Logo width={269} height={40}>
                <use href={`${logoicon}#icon-logo-svg`}></use>
              </Logo>{" "}
            </LogoBtn>
          </Link>

          <BtnWrap>
            {!isOpenMenu ? (
              <BurgerBtn prop={hendleClick}>
                <Burger width={40} height={40}>
                  <use href={`${logoicon}#icon-burger-menu`}></use>
                </Burger>
              </BurgerBtn>
            ) : (
              <BurgerMenu
                closeModal={hendleClick}
                currentSection={currentSection}
              />
            )}
            <Link to="contact-us" spy={true} smooth={true}>
              <ContactBtn>
                Get in touch
                <IconContact width={14} height={14}>
                  <use href={`${logoicon}#icon-arrow-down`}></use>
                </IconContact>
              </ContactBtn>
            </Link>
          </BtnWrap>
        </Nav>
      </Container>
    </HeaderWrap>
  );
};

export default Header;
