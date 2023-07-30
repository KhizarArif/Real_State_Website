import React, { useState } from "react";
import { styled } from "styled-components";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const getMenuStyled = (isMenuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !isMenuOpened && "-100%" };
    }
  };

  return (
    <HeaderWrapper>
      <div className="flexCenter paddings innerWidth header-container">
        <img src="./logo.png" alt="logo" width={100} />
        <div
          className="menu-icon"
          onClick={() => setIsMenuOpened(!isMenuOpened)}
        >
          <BiMenuAltRight size={30} />
        </div>

        <OutsideClickHandler onOutsideClick={() => setIsMenuOpened(false)}>
          <div
            className="flexCenter header-menu"
            style={getMenuStyled(isMenuOpened)}
          >
            <a href="#">Residencies</a>
            <a href="#">Our Value</a>
            <a href="#">Contact Us</a>
            <a href="#">Get Started</a>
            <button className="button">
              <a href="#">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>
      </div>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.section`
  background-color: var(--black);
  color: white;

  .header-container {
    justify-content: space-between;
    padding: 0 10rem;
    color: var(--secondary);
  }

  .header-menu {
    gap: 2rem;
  }

  .header-menu > *:hover {
    cursor: pointer;
  }

  .menu-icon {
    display: none;
  }

  @media (max-width: 768px) {
    .menu-icon {
      display: block;
      position: absolute;
      right: 5%;
    }

    .header-menu {
      background: #fff;
      gap: 2rem;
      padding: 3rem;
      align-items: flex-start;
      color: var(--black);
      flex-direction: column;
      position: absolute;
      top: 3rem;
      right: 3rem;
      z-index: 10;
      border-radius: 10px;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
      transition: all 300ms ease-in;
    }

    .header-container {
      padding: 1rem;
      align-items: center;
    }
  }
`;
