import React from "react";
import { styled } from "styled-components";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
 
const Hero = () => {
  return (
    <HeroWrapper>
      <div className="paddings innerWidth flexCenter hero-Container">
        <div className="flexColStart  hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{y: "2rem", opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{
              duration: 3,
              type: "spring"
            }}
            >
              Discover <br /> Most Suitable <br /> Property
            </motion.h1>
          </div>

          <div className="flexColStart hero-desc">
            <span>
              Find a variety of properties that suite you very easilty
            </span>
            <span>Forget all difficulties in finding a residence for you.</span>
          </div>

          <div className="flexStart search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" className="search-bar-input-field" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">

            <div className="flexColCenter stat">
              <span>
                <CountUp start={800} end={9000} duration={4} />
                <span> + </span>
              </span>
              <span className="secondaryText"> Premium Product </span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={200} end={2000} duration={4} />
                <span> + </span>
              </span>
              <span className="secondaryText"> Happy Customer  </span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={28} duration={4} />
                <span> + </span>
              </span>
              <span className="secondaryText"> Awards Winning </span> 
            </div>

          </div>
        </div>

        <div className="hero-right">
          <motion.div 
          initial={{x: "7rem", opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{
            duration: 3,
            type: "spring"
          }}
          className="imageContainer">
            <img
              src="./hero-image.png"
              alt="Hero Image"
              className="heroImage"
            />
          </motion.div>
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;

const HeroWrapper = styled.div`
  color: white;
  position: relative;
  padding-bottom: 2rem;  
  background: var(--black); 


  .hero-Container {
    justify-content: space-around;
    align-items: flex-start;
  }

  .imageContainer {
    width: 25rem;
    height: 30rem;
    overflow: hidden;
    border-radius: 15rem 15rem 0 0;
    border: 8px solid rgba(255, 255, 255, 0.13);
  }

  .heroImage {
    width: 100%;
    height: 100%;
  }

  .hero-left {
    gap: 3rem; 
  }

  .hero-title {
    position: relative;
    z-index: 1;
  }

  .hero-title h1 {
    font-weight: 600;
    font-size: 3.8rem;
    line-height: 4rem;
  }

  .orange-circle {
    height: 4rem;
    width: 4rem;
    background: var(--orange-gradient);
    border-radius: 100%;
    position: absolute;
    left: 55%;
    top: -10%;
    z-index: -1;
  }

  .search-bar {
    background-color: #fff;
    border: 2px solid rgba(120, 120, 120, 0.374);
    border-radius: 5px;
    padding: 0.5rem 1rem;
    justify-content: space-between;
    width: 100%;
  }

  .search-bar-input-field {
    width: 100%;
    outline: none;
    border: none;
    margin: 0 10px;
  }


  .stats{
    justify-content: space-between;
    width: 100%; 
  }
 
  .stat :nth-child(1){
    font-size: 2rem;
  }

  .stat :nth-child(1) :last-child{
    color: orange;
  }


  @media (max-width: 640px){
    .hero-left{
        margin-top: 3rem;
    }

    .hero-title h1{
      font-size: 3rem; 
      line-height: 3rem;
    }

    .imageContainer{
      height: 25rem;
      margin: 0 auto;
      width: 95%;
    }

    .stats{
      justify-content: center;
      gap: 2rem;
    }

  }


`;
