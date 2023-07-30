import React from "react";
import { styled } from "styled-components";

const Footer = () => {
  return (
    <FooterMainCotainer>
      <div className="innerWidth footerContainer">
        <div className="footerLeft">
          <div className="primaryText footerHeading">Homyz </div>
          <div className="orange-circle " />
          <span className="secondaryText"> 
            Our mision is to make all people the best place to live for them.{" "}
          </span>
        </div>
        <div className="footerRight">
            <div className="primaryText"> Information  </div>
            <span className="secondaryText"> 145 New York, FL 5467, USA </span>

            <div className="flexStart footerMenu">
                <span> Property </span>
                <span> Services </span>
                <span> Product </span>
                <span> About Us </span>
            </div>
        </div>
      </div>
    </FooterMainCotainer>
  );
};

export default Footer;

const FooterMainCotainer = styled.div`
  width: 100%;  
  margin: 4rem 0;

  .footerContainer {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: auto;
  }

  .orange-circle {
    height: 1.5rem;
    width: 1.5rem;
    background: var(--orange-gradient);
    border-radius: 100%;
    position: absolute; 
    left: 33%;
    top: 0%;
    z-index: -1;
  }
 

  .footerLeft {
    width: 30%;
    position: relative;

  }

  .footerMenu{
    justify-content: space-between; 
    width: 100%;
    gap: 1.5rem;
    margin-top: 1rem;
    flex-wrap: wrap;
  } 
 

  @media (max-width: 640px){
    .footerContainer{
      flex-direction: column; 
    }

    .footerLeft,
    .footerRight{
      width: 100%; 
    }

    .footerRight{
      margin-top: 2rem;
    }
  }

`;
