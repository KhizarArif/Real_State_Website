import React from "react";
import { styled } from "styled-components";

const GetStarted = () => {
  return (
    <GetStartedContainer>
      <div className="paddings innerWidth flexColCenter getStartedInner">
        <h1 className="primaryText"> Get Started with Homyz </h1>
        <span>
          Subscribe and Find super attractive price quotes from us. Find Your
          residence soon
        </span>
        <button className="button"> Get Started </button>
      </div>
    </GetStartedContainer>
  );
};

export default GetStarted;

const GetStartedContainer = styled.div`
  color: white;
  margin-top: 5rem;

  .getStartedInner {
    width: 80%;
    margin: 0 auto;
    background: #4161df;
    border: 6px solid #5d77d6;
    border-radius: 10px;
  }

  .getStartedInner span {
    font-size: 1rem;
    text-align: center;
    margin: 1rem 0;
  }

  .primaryText {
    color: white;
    font-weight: 600;
    text-align: center;
  }

  .getStartedInner .button {
    background: transparent;
    border: 3px solid white;
    border-radius: 10px;
  }
`;
