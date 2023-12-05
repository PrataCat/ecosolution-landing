import { SliderBtnMore } from "../Buttons/Buttons";
import {
  SlideTextWrap,
  SlideTitle,
  SlideTitleWrap,
  SliderText,
  SlideWrap,
  SlideMetaWrap,
} from "./SwiperSlide.styled";

const SwiperSlide = ({ img, bigImg, title, text, date }) => {
  return (
    <SlideWrap>
      <img srcSet={`${img} 1x, ${bigImg} 2x`} src={img} alt={text}></img>
      <SlideMetaWrap>
        <SlideTitleWrap>
          <SlideTitle>{title}</SlideTitle>
          <SliderBtnMore />
        </SlideTitleWrap>
        <SlideTextWrap>
          <SliderText>{text}</SliderText>
          <SliderText>{date}</SliderText>
        </SlideTextWrap>
      </SlideMetaWrap>
    </SlideWrap>
  );
};

export default SwiperSlide;
