import {
  BtnWrap,
  Burger,
  ContactBtn,
  HeaderWrap,
  IconClose,
  IconContact,
  Logo,
  MenuBtn,
  ModalBtn,
  Nav,
} from "./Header.styled";
import logoicon from "../../images/sprite.svg";
import { useState } from "react";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const hendleClick = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <HeaderWrap>
      <Nav>
        <Logo width={269} height={40}>
          <use href={`${logoicon}#icon-logo-svg`}></use>
        </Logo>
        <BtnWrap>
          {!isOpenMenu ? (
            <MenuBtn onClick={hendleClick}>
              <Burger width={40} height={40}>
                <use href={`${logoicon}#icon-burger-menu`}></use>
              </Burger>
            </MenuBtn>
          ) : (
            <>
              <ModalBtn onClick={hendleClick}>
                <IconClose width={20} height={20}>
                  <use href={`${logoicon}#icon-close-light`}></use>
                </IconClose>
                close
              </ModalBtn>
            </>
          )}
          <ContactBtn>
            Get in touch
            <IconContact width={14} height={14}>
              <use href={`${logoicon}#icon-arrow-down`}></use>
            </IconContact>
          </ContactBtn>
        </BtnWrap>
      </Nav>
    </HeaderWrap>
  );
};

export default Header;
