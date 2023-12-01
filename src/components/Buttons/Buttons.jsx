import { AccentBtn, BurgerMenuBtn, SecondaryBtn } from "./Buttons.styled";

export const BurgerBtn = ({ prop, children }) => {
  return <BurgerMenuBtn onClick={prop}>{children}</BurgerMenuBtn>;
};

export const ContactBtn = ({ children }) => {
  return <AccentBtn>{children}</AccentBtn>;
};

export const LightBtn = ({ children }) => {
  return <SecondaryBtn>{children}</SecondaryBtn>;
};
