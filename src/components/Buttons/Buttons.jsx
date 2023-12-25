import icon from "../../images/sprite.svg";
import {
  IconBtnLight,
  IconBtnUp,
  SliderIcon,
  AccentBtn,
  BtnMore,
  PrevBtn,
  NextBtn,
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
//-------------------Dark buttons------------------------

export const ContactBtn = ({ children, props }) => {
  return (
    <AccentBtn $display={props} type="button">
      {children}
    </AccentBtn>
  );
};

//-------------------Light buttons------------------------

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

//-------------------Slider------------------------

export const SwiperBtnPrev = () => {
  return (
    <PrevBtn>
      <SliderIcon width={66} height={66}>
        <use href={`${icon}#icon-slide-left`}></use>
      </SliderIcon>
    </PrevBtn>
  );
};

export const SwiperBtnNext = () => {
  return (
    <NextBtn>
      <SliderIcon width={66} height={66}>
        <use href={`${icon}#icon-slide-right`}></use>
      </SliderIcon>
    </NextBtn>
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

//-------------------Footer------------------------

export const BtnTop = () => {
  return (
    <BtnUp type="button">
      <IconBtnUp width={32} height={32}>
        <use href={`${icon}#icon-arrow-top`}></use>
      </IconBtnUp>
    </BtnUp>
  );
};
