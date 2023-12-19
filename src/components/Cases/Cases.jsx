import Swiper from "swiper/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { useEffect } from "react";

import { Container } from "../../App.styled";
import SwiperSlide from "./SwiperSlide";
import {
  CasesTitle,
  SwiperSlider,
  SwiperBtnWrap,
  SwiperPage,
  SwiperNav,
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
import { SwiperBtnNext, SwiperBtnPrev } from "../Buttons/Buttons";
import { NextBtn, PrevBtn } from "../Buttons/Buttons.styled";

const slideData = {
  one: {
    title: "Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",
    text: "Wind Power for auto field irrigation",
    date: "July 2023",
  },
  two: {
    title: "Zhytomyr city Private Enterprise “Bosch”",
    text: "Solar Panels for industrial use",
    date: "November 2023",
  },
  three: {
    title: "Rivne city Private Enterprise “Biotech”",
    text: "Thermal modules",
    date: "October 2023",
  },
  four: {
    title: "Kherson city Private Enterprise “HealthyFarm”",
    text: "Wind power",
    date: "September 2021",
  },
  five: {
    title: "Zaporizhia city Private Enterprise “Biotech”",
    text: "Mini nuclear stations",
    date: "May 2021",
  },
};

const Cases = () => {
  useEffect(() => {
    var swiper = new Swiper(`${SwiperSlider}`, {
      slidesPerView: 1,
      slidesPerGroup: 1,

      navigation: {
        nextEl: `${NextBtn}`,
        prevEl: `${PrevBtn}`,
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
      grabCursor: true,
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
              <SwiperBtnPrev />
              <SwiperBtnNext />
            </SwiperBtnWrap>
          </SwiperNav>
        </SwiperHeadWrap>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <SwiperSlide
              img={slideImg1}
              bigImg={slideImg1ret}
              title={slideData.one.title}
              text={slideData.one.text}
              date={slideData.one.date}
            />
          </div>
          <div className="swiper-slide">
            <SwiperSlide
              img={slideImg2}
              bigImg={slideImg2ret}
              title={slideData.two.title}
              text={slideData.two.text}
              date={slideData.two.date}
            />
          </div>
          <div className="swiper-slide">
            <SwiperSlide
              img={slideImg3}
              bigImg={slideImg3ret}
              title={slideData.three.title}
              text={slideData.three.text}
              date={slideData.three.date}
            />
          </div>
          <div className="swiper-slide">
            <SwiperSlide
              img={slideImg4}
              bigImg={slideImg4ret}
              title={slideData.four.title}
              text={slideData.four.text}
              date={slideData.four.date}
            />
          </div>
          <div className="swiper-slide">
            <SwiperSlide
              img={slideImg5}
              bigImg={slideImg5ret}
              title={slideData.five.title}
              text={slideData.five.text}
              date={slideData.five.date}
            />
          </div>
        </div>

        <div className="swiper-scrollbar"></div>
      </SwiperSlider>
    </Container>
  );
};

export default Cases;
