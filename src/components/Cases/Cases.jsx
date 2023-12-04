import Swiper from "swiper/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { useEffect } from "react";

import icon from "../../images/sprite.svg";
import { Container } from "../../App.styled";
import {
  CasesTitle,
  SwiperBtnNext,
  SwiperBtnPrev,
  SwiperSlide,
  SwiperSlider,
  SliderIcon,
  SwiperBtnWrap,
  SwiperPage,
  SwiperNav,
  SlideTitle,
  SliderBottomIcon,
  BtnMore,
  SlideTitleWrap,
  SliderText,
  SlideTextWrap,
  SwiperHeadWrap,
  CasesTitleWrap,
} from "./Cases.styled";
import slideImg1 from "../../images/slide1.jpg";
import slideImg1ret from "../../images/slide1-2x.jpg";
import slideImg2 from "../../images/slide2.jpg";
import slideImg2ret from "../../images/slide2-2x.jpg";
import slideImg3 from "../../images/slide3.jpg";
import slideImg3ret from "../../images/slide3-2x.jpg";
import slideImg4 from "../../images/slide4.jpg";
import slideImg4ret from "../../images/slide4-2x.jpg";
import slideImg5 from "../../images/slide5.jpg";
import slideImg5ret from "../../images/slide5-2x.jpg";

const Cases = () => {
  useEffect(() => {
    var swiper = new Swiper(`${SwiperSlider}`, {
      slidesPerView: 1,
      slidesPerGroup: 1,

      navigation: {
        nextEl: `${SwiperBtnNext}`,
        prevEl: `${SwiperBtnPrev}`,
      },
      pagination: {
        el: `${SwiperPage}`,
        type: "fraction",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        dragSize: 50,
      },
      keyboard: {
        enabled: true,
        pageUpDown: true,
      },
      loop: true,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1279: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      },
    });
    swiper.init(swiper);
  });

  return (
    <Container id="cases">
      <SwiperSlider>
        <SwiperHeadWrap>
          <CasesTitleWrap>
            <CasesTitle>Successful cases of our company</CasesTitle>
          </CasesTitleWrap>
          <SwiperNav>
            <SwiperPage></SwiperPage>
            <SwiperBtnWrap>
              <SwiperBtnPrev>
                <SliderIcon width={66} height={66}>
                  <use href={`${icon}#icon-slide-left`}></use>
                </SliderIcon>
              </SwiperBtnPrev>
              <SwiperBtnNext>
                <SliderIcon width={66} height={66}>
                  <use href={`${icon}#icon-slide-right`}></use>
                </SliderIcon>
              </SwiperBtnNext>
            </SwiperBtnWrap>
          </SwiperNav>
        </SwiperHeadWrap>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <SwiperSlide>
              <img
                srcSet={`${slideImg1} 1x, ${slideImg1ret} 2x`}
                src={slideImg1}
                alt="wind powers in the field"
              ></img>
              <SlideTitleWrap>
                <SlideTitle>
                  Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”
                </SlideTitle>
                <BtnMore>
                  <SliderBottomIcon width={28} height={28}>
                    <use href={`${icon}#icon-arrow-diag1`}></use>
                  </SliderBottomIcon>
                </BtnMore>
              </SlideTitleWrap>
              <SlideTextWrap>
                <SliderText>Wind Power for auto field irrigation</SliderText>
                <SliderText>July 2023</SliderText>
              </SlideTextWrap>
            </SwiperSlide>
          </div>
          <div className="swiper-slide">
            <SwiperSlide>
              <img
                srcSet={`${slideImg2} 1x, ${slideImg2ret} 2x`}
                src={slideImg2}
                alt="solar panels"
              ></img>
              <SlideTitleWrap>
                <SlideTitle>
                  Zhytomyr city Private Enterprise “Bosch”
                </SlideTitle>
                <BtnMore>
                  <SliderBottomIcon width={28} height={28}>
                    <use href={`${icon}#icon-arrow-diag1`}></use>
                  </SliderBottomIcon>
                </BtnMore>
              </SlideTitleWrap>
              <SlideTextWrap>
                <SliderText>Solar Panels for industrial use</SliderText>
                <SliderText>November 2023</SliderText>
              </SlideTextWrap>
            </SwiperSlide>
          </div>
          <div className="swiper-slide">
            <SwiperSlide>
              <img
                srcSet={`${slideImg3} 1x, ${slideImg3ret} 2x`}
                src={slideImg3}
                alt="thermal modules"
              ></img>
              <SlideTitleWrap>
                <SlideTitle>Rivne city Private Enterprise “Biotech”</SlideTitle>
                <BtnMore>
                  <SliderBottomIcon width={28} height={28}>
                    <use href={`${icon}#icon-arrow-diag1`}></use>
                  </SliderBottomIcon>
                </BtnMore>
              </SlideTitleWrap>
              <SlideTextWrap>
                <SliderText>Thermal modules</SliderText>
                <SliderText>October 2023</SliderText>
              </SlideTextWrap>
            </SwiperSlide>
          </div>
          <div className="swiper-slide">
            <SwiperSlide>
              <img
                srcSet={`${slideImg4} 1x, ${slideImg4ret} 2x`}
                src={slideImg4}
                alt="wind powers in the field"
              ></img>
              <SlideTitleWrap>
                <SlideTitle>
                  Kherson city Private Enterprise “HealthyFarm”
                </SlideTitle>
                <BtnMore>
                  <SliderBottomIcon width={28} height={28}>
                    <use href={`${icon}#icon-arrow-diag1`}></use>
                  </SliderBottomIcon>
                </BtnMore>
              </SlideTitleWrap>
              <SlideTextWrap>
                <SliderText>Wind power</SliderText>
                <SliderText>September 2021</SliderText>
              </SlideTextWrap>
            </SwiperSlide>
          </div>
          <div className="swiper-slide">
            <SwiperSlide>
              <img
                srcSet={`${slideImg5} 1x, ${slideImg5ret} 2x`}
                src={slideImg5}
                alt="mini nuclear stations"
              ></img>
              <SlideTitleWrap>
                <SlideTitle>
                  Zaporizhia city Private Enterprise “Biotech”
                </SlideTitle>
                <BtnMore>
                  <SliderBottomIcon width={28} height={28}>
                    <use href={`${icon}#icon-arrow-diag1`}></use>
                  </SliderBottomIcon>
                </BtnMore>
              </SlideTitleWrap>
              <SlideTextWrap>
                <SliderText>Mini nuclear stations</SliderText>
                <SliderText>May 2021</SliderText>
              </SlideTextWrap>
            </SwiperSlide>
          </div>
        </div>

        <div className="swiper-scrollbar"></div>
      </SwiperSlider>
    </Container>
  );
};

export default Cases;
