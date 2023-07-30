import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../utils/slider.json";
import { styled } from "styled-components";
import { sliderSettings } from "../utils/common";

export const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="residenseButtons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

const Residencies = () => {
  return (
    <ResidenceWrapper>
      <div className="innerWidth paddings residense-container">
        <div className="flexColStart residense-head">
          <span className="orangeText">Best Choices </span>
          <span className="primaryText"> Popular Residences </span>
        </div> 
          <Swiper {...sliderSettings}>
            <SliderButtons />
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flexColStart residence-card">
                  <img src={item.image} alt="Home" />
                  <span className="secondaryText residence-price">
                    <span style={{ color: "orange" }}> $ </span>
                    <span> {item.price} </span>
                  </span>
                  <span className="primaryText"> {item.name} </span>
                  <span className="secondaryText"> {item.detail} </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> 
    </ResidenceWrapper>
  );
};

export default Residencies;

const ResidenceWrapper = styled.section` 
  .residense-container {
    overflow: hidden;  
  }
 

  .residense-head {
    margin-bottom: 1rem;
  }

  .residence-card {
    gap: 0.6rem;
    padding: 1rem;
    margin: auto;
    border-radius: 10px;
    max-width: max-content;
    transition: all 300ms ease-in;
    overflow: hidden;
  }

  .residence-card img {
    width: 100%;
    max-width: 15rem;
  }

  .residence-card :nth-child(2) {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .residence-card :nth-child(3) {
    font-size: 1.2rem;
  }

  .residence-card :nth-child(4) {
    font-size: 0.7rem;
    width: 13rem;
  }

  .residence-card:hover {
    scale: 1.025;
    cursor: pointer;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(136, 160, 255, 0.46) 217.19%
    );
    box-shadow: 0px 72px 49px -51px rgba(136 160, 255, 0.21);
  }

  .swiper-horizontal {
    overflow: hidden; 
  }
 
  .residenseButtons { 
    margin-bottom: 10px;
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: center;
  }

  .residenseButtons :nth-child(1) {
    background: #eeeeff;
  }

  .residenseButtons :nth-child(2) {
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
  }

  .residenseButtons button {
    background-color: #fff;
    color: blue;
    border-radius: 5px;
    padding: 0.2rem 0.8rem;
    border: none;
    font-size: 1.5rem;
    /* margin-left: 20px; */
    cursor: pointer;
  }

  @media (max-width: 640px) {
    .residense-head {
      align-items: center;
    }

    .residenseButtons {
      position: initial;
    }
  }
`;
