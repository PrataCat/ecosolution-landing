import { Link } from "react-scroll";
import { Item, NavList } from "./BurgerModal.styled";

const BurgerMenu = () => {
  return (
    <>
      <NavList>
        <Item>
          <Link activeClass="active" to="main" spy={true} smooth={true}>
            Main
          </Link>
        </Item>
        <Item>
          <Link to="about" spy={true} smooth={true}>
            About
          </Link>
        </Item>
        <Item>
          <Link to="electricity" spy={true} smooth={true}>
            Electricity
          </Link>
        </Item>
        <Item>
          <Link to="cases" spy={true} smooth={true}>
            Cases
          </Link>
        </Item>
        <Item>
          <Link to="faq" spy={true} smooth={true}>
            FAQ
          </Link>
        </Item>
        <Item>
          <Link to="contact-us" spy={true} smooth={true}>
            Contact Us
          </Link>
        </Item>
      </NavList>
    </>
  );
};

export default BurgerMenu;
