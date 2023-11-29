import { Link } from "react-scroll";
import logoicon from "../../images/sprite.svg";
import {
  BackDrop,
  BtnWrap,
  IconClose,
  Item,
  MenuWrap,
  ModalBtn,
  NavIcon,
  NavList,
} from "./BurgerMenu.styled";
import { createPortal } from "react-dom";
import { useEffect } from "react";

const modal = document.getElementById("burger-menu");

const BurgerMenu = ({ closeModal, currentSection }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handlePressESC = (e) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handlePressESC);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handlePressESC);
    };
  }, [closeModal]);

  const handleBackDropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <BackDrop onClick={handleBackDropClick}>
      <MenuWrap>
        <BtnWrap>
          <ModalBtn onClick={closeModal}>
            <IconClose width={20} height={20}>
              <use href={`${logoicon}#icon-close-light`}></use>
            </IconClose>
            close
          </ModalBtn>
        </BtnWrap>
        <NavList>
          <Item current={currentSection === "Main" ? "current" : ""}>
            <Link onClick={closeModal} to="main" spy={true} smooth={true}>
              Main
            </Link>
            <NavIcon width={16} height={16}>
              <use href={`${logoicon}#icon-arrow-diagonal2`}></use>
            </NavIcon>
          </Item>
          <Item current={currentSection === "About" ? "current" : ""}>
            <Link onClick={closeModal} to="about" spy={true} smooth={true}>
              About
            </Link>
            <NavIcon width={16} height={16}>
              <use href={`${logoicon}#icon-arrow-diagonal2`}></use>
            </NavIcon>
          </Item>
          <Item current={currentSection === "Cases" ? "current" : ""}>
            <Link onClick={closeModal} to="cases" spy={true} smooth={true}>
              Cases
            </Link>
            <NavIcon width={16} height={16}>
              <use href={`${logoicon}#icon-arrow-diagonal2`}></use>
            </NavIcon>
          </Item>
          <Item current={currentSection === "FAQ" ? "current" : ""}>
            <Link onClick={closeModal} to="faq" spy={true} smooth={true}>
              FAQ
            </Link>
            <NavIcon width={16} height={16}>
              <use href={`${logoicon}#icon-arrow-diagonal2`}></use>
            </NavIcon>
          </Item>
          <Item current={currentSection === "Contact Us" ? "current" : ""}>
            <Link onClick={closeModal} to="contact-us" spy={true} smooth={true}>
              Contact Us
            </Link>
            <NavIcon width={16} height={16}>
              <use href={`${logoicon}#icon-arrow-diagonal2`}></use>
            </NavIcon>
          </Item>
        </NavList>
      </MenuWrap>
    </BackDrop>,
    modal
  );
};

export default BurgerMenu;
