import icon from "../../images/sprite.svg";
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
  return <SecondaryBtn>{children}</SecondaryBtn>;
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
