import icon from "../../images/sprite.svg";
import { IconBtnLight } from "../Buttons/Buttons.styled";
import {
  AccentBtn,
  BtnMore,
  BurgerMenuBtn,
  SecondaryBtn,
  SliderBottomIcon,
} from "./Buttons.styled";

export const BurgerBtn = ({ prop, children }) => {
  return <BurgerMenuBtn onClick={prop}>{children}</BurgerMenuBtn>;
};

export const ContactBtn = ({ prop, children }) => {
  return <AccentBtn active={prop}>{children}</AccentBtn>;
};

export const LightBtn = ({ children }) => {
  return (
    <SecondaryBtn>
      {children}
      <IconBtnLight width={32} height={32}>
        <use href={`${icon}#icon-arrow-right`}></use>
      </IconBtnLight>
    </SecondaryBtn>
  );
};

export const SliderBtnMore = () => {
  return (
    <BtnMore>
      <SliderBottomIcon width={28} height={28}>
        <use href={`${icon}#icon-arrow-diag1`}></use>
      </SliderBottomIcon>
    </BtnMore>
  );
};
