import icon from "../../images/sprite.svg";
import { IconBtnLight, IconBtnUp } from "../Buttons/Buttons.styled";
import {
  AccentBtn,
  BtnMore,
  BurgerMenuBtn,
  SecondaryBtn,
  SliderBottomIcon,
  BtnUp,
} from "./Buttons.styled";

export const BurgerBtn = ({ prop, children }) => {
  return (
    <BurgerMenuBtn type="button" onClick={prop}>
      {children}
    </BurgerMenuBtn>
  );
};

export const ContactBtn = ({ prop, children }) => {
  return (
    <AccentBtn type="button" active={prop}>
      {children}
    </AccentBtn>
  );
};

export const LightBtn = ({ prop, children }) => {
  return (
    <SecondaryBtn type={prop}>
      {children}
      <IconBtnLight width={32} height={32}>
        <use href={`${icon}#icon-arrow-right`}></use>
      </IconBtnLight>
    </SecondaryBtn>
  );
};

export const SliderBtnMore = () => {
  return (
    <BtnMore type="button">
      <SliderBottomIcon width={28} height={28}>
        <use href={`${icon}#icon-arrow-diag1`}></use>
      </SliderBottomIcon>
    </BtnMore>
  );
};

export const BtnTop = () => {
  return (
    <BtnUp type="button">
      <IconBtnUp width={32} height={32}>
        <use href={`${icon}#icon-arrow-top`}></use>
      </IconBtnUp>
    </BtnUp>
  );
};
