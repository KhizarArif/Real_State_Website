import React from "react";
import { styled } from "styled-components";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <ContactWrapper>
      <div className="contactContainer">
        <div className="flexColStart contactLeft">
          <span className="orangeText"> Our Values </span>
          <span className="primaryText"> Easy to Contact Us </span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you. We
            believe a good blace to live can make your life better.
          </span>

          <div className="flexCenter contactModesContainer">
            {/* First MOde */}
            <div className="contactModes">
              <div className="flexCenter mode">
                <span className="flexCenter icon">
                  <MdCall size={25} />
                </span>
                <div className="flexColStart detail">
                  <span className="primaryText"> Call </span>
                  <span className="secondaryText"> 021 123 145 14 </span>
                </div>
                <div className="flexColCenter button">Call Now</div>
              </div>
            </div>

            {/* Second  */}
            <div className="contactModes">
              <div className="flexCenter mode">
                <span className="flexCenter icon">
                  <BsFillChatDotsFill size={25} />
                </span>
                <div className="flexColStart detail">
                  <span className="primaryText"> Chat </span>
                  <span className="secondaryText"> 021 123 145 14 </span>
                </div>
                <div className="flexColCenter button">Chat Now</div>
              </div>
            </div>

            {/* Third */}
            <div className="contactModes">
              <div className="flexCenter mode">
                <span className="flexCenter icon">
                  <BsFillChatDotsFill size={25} />
                </span>
                <div className="flexColStart detail">
                  <span className="primaryText"> Video Call </span>
                  <span className="secondaryText"> 021 123 145 14 </span>
                </div>
                <div className="flexColCenter button">Video Call Now</div>
              </div>
            </div>

            {/* Fourth  */}
            <div className="contactModes">
              <div className="flexCenter mode">
                <span className="flexCenter icon">
                  <HiChatBubbleBottomCenter size={25} />
                </span>
                <div className="flexColStart detail">
                  <span className="primaryText"> Message </span>
                  <span className="secondaryText"> 021 123 145 14 </span>
                </div>
                <div className="flexColCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>

        <div className="contactRight">
          <div className="imageContainer">
            <img src="/contact.jpg" alt="Contact" className="contactImage" />
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
};

export default Contact;

const ContactWrapper = styled.div`

  margin: 3rem; 
  
  .contactContainer {
    display: flex; 
    width: 80%;
    margin: 0 auto;
    align-items: center;
  }

  .contactLeft,
  .contactRight {
    flex: 1;
  }

  .imageContainer {
    width: 25rem;
    height: 25rem; 
    overflow: hidden;
    border-radius: 15rem 15rem 0 0;
    border: 8px solid rgba(255, 255, 255, 0.13);
  }

  .contactImage {
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
  }

  .contactLeft {
    gap: 0.5rem;
  }

  .contactRight {
    width: 50%;  
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .icon {
    padding: 5px 0;
    background: #eeeeff;
    border-radius: 5px;
    width: 3rem;
  }

  .icon svg {
    fill: var(--blue);
  }

  .contactModesContainer {
    margin-top: 2rem;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .contactModes {
    border: 1px solid #eeeeff; 
    width: 45%;
  }

  .detail .primaryText {
    font-size: 1.1rem;
  }

  .detail {
    width: 70%;
  }

  .mode {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }

  .contactModes:hover {
    scale: 1.1;
    box-shadow: var(--shadow);
  }

  .button {
    background: var(--lightBlue);
    width: 100%;
    color: var(--blue);
    text-align: center;
  }

  .button:hover {
    background: var(--blue);
    color: white;
    scale: 0.8;
  }

  @media (max-width: 1024px) {
    .contactContainer{
      flex-direction: column;
      justify-content: center; 
    }

    .contactRight{
      margin-top: 2rem;
    }
  }


  @media (max-width: 640px){
    .contactContainer{
      flex-direction: column;
      justify-content: center; 
    }

    .contactModes{
      width: 100%;
    }

    .contactRight{
      width: 100%;
    }

    .imageContainer{
      width: 25rem;
      height: 25rem;
    }

    .contactImage{
      width: 100%;
      height: 100%;
    }

  }
`;
