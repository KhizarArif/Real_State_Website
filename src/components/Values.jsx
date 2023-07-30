import React, { useState } from "react";
import { styled } from "styled-components";
// import value from "/value.png";/
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../utils/accordion";

const Values = () => {
  return (
    <ValuesMainContaienr>
      <div className="innerWidth paddings flexCenter valueWrapper">
        <div className="valuesImageContainer values-left-container">
          <img src="/value.png" alt="" className="valuesImage" />
        </div>

        <div className="flexColStart values-right-container">
          <span className="orangeText"> Our Value </span>
          <span className="primaryText"> Value We Give to You </span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you.
            <br />
            We Believe a good blace to live can make your life better
          </span>

          <Accordion
            className="accordion-container"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, index) => {
              const [className, setClassName] = useState(null);
              const handleAccordionButtonClick = () => {
                setClassName((prevClassName) =>
                  prevClassName === "expanded" ? "collapsed" : "expanded"
                );
              };

              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  key={index}
                  uuid={index}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className="flexCenter accordionButton"
                      onClick={handleAccordionButtonClick}
                    >
                      {/* <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>

                      <div className="flexCenter icon"> {item.icon} </div>
                      <span className="primaryText"> {item.heading} </span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div> */}

                      <AccordionItemState>
                        {({ expanded }) => (
                          <>
                            <div className="flexCenter icon">{item.icon}</div>
                            <span className="primaryText">{item.heading}</span>
                            <div className="flexCenter icon">
                              <MdOutlineArrowDropDown size={20} />
                            </div>
                          </>
                        )}
                      </AccordionItemState>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText"> {item.detail} </p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </ValuesMainContaienr>
  );
};

export default Values;

const ValuesMainContaienr = styled.div`
  .valueWrapper {
    display: flex;
    justify-content: space-between;
  }

  .valueWrapper .valuesImage {
    border: 8px solid rgb(232 232 232);
  }

  .valuesImageContainer {
    width: 25rem;
    height: 30rem;
  }

  .valuesImage {
    width: 100%;
    height: 100%;
    border-radius: 15rem 15rem 0 0;
  }

  .values-right-container {
    width: 55%;
  }

  .accordion-container {
    margin-top: 2rem;
    border: none;
  }

  .accordionItem {
    background: #fff;
    border: 0.8px solid rgba(128, 128, 128, 0.143);
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 20px;
  }

  .accordionItem.expanded {
    box-shadow: var(--shadow);
    border-radius: 6px;
  }

  .accordionButton {
    background: #fff;
    padding: 1rem;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
  }

  .icon {
    padding: 10px;
    background: #eeeeff;
    border-radius: 5px;
  }

  .icon svg {
    fill: var(--blue);
  }

  .accordionButton .primaryText {
    font-size: 1.1rem;
  }

  @media (max-width: 1024px) {
    .valueWrapper {
      flex-direction: column; 
      padding: 0;
    }

    .accordionButton .primaryText {
      font-size: 0.8rem;
    }

    /* .accordion-container{
      width: 100%;
      border: 1px solid red;
    } */
  }

  @media (max-width: 768px) {

    .valueWrapper{
      width: 100%;
      padding: 0;
    }

    .accordionButton .primaryText {
      font-size: 0.8rem;
    }

  }

  @media (max-width: 640px) {
    .valueWrapper{
      padding: 0;
      width: 100%;
    }
    .valuesImageContainer {
      width: 15rem;
      height: 15rem;
    }

    .values-left-container{
      width: 17rem;
      height: 17rem;
    }

    .valuesImage{
      width: 100%;
      height: 100%7
    }

    .values-right-container{
      width: 80%;
      margin: 0 auto;
    }

  }

  @media (min-width: 1024px) {
    .valueWrapper {
      flex-direction: row;
      justify-content: space-between; 
    }
 
    .values-left-container{
      width: 40%;
    }

    .valuesImage{
      height: 25rem;
    }

    .values-right-container {
      width: 55%;
      margin-left: 0.1rem; 
    }
  }
`;
