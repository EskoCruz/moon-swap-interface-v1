import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import Flex from "../../components/Box/Flex";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./components/Logo";
import UserBlock from "./components/UserBlock";
import { NavProps } from "./types";
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

// const StyledNav = styled.nav<{ showMenu: boolean }>`
//   position: fixed;
//   top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
//   left: 0;
//   transition: top 0.2s;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding-left: 8px;
//   padding-right: 16px;
//   width: 100%;
//   height: ${MENU_HEIGHT}px;
//   background-color: ${({ theme }) => theme.nav.background};
//   border-bottom: solid 2px rgba(133, 133, 133, 0.1);
//   z-index: 20;
//   transform: translate3d(0, 0, 0);
// `;

const StyledNav = {
  Fun: styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: translate3d(0, 0, 0);
  `,
};

const NavBar = styled.ul<{ isPushed: boolean }>`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.nav} {
    -ms-flex-direction: row;
    flex-direction: row;
  }
  // -ms-flex-direction: column;
  // flex-direction: column;
  // margin-left: auto!important;

  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  li {
    padding: 0 4px;
    &:before {
      content: "";
    }
    a {
      padding-right: .5rem;
      padding-left: .5rem;
      color: #1B3F7B;
      //font-weight: 600;
    }
  }
  
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
  }
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  links,
  children,
}) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");
  const li = [
    {
      link: "https://moontoken.io/",
      text:"HOME"
    },
    {
      link: "https://moontoken.io/our-vision",
      text:"OUR VISION"
    },
    {
      link: "https://moontoken.io/donate",
      text:"DONATE"
    },
    {
      link: "https://moontoken.shop/password",
      text:"MERCH"
    }
  ];
  return (
    <Wrapper>
      <StyledNav.Fun showMenu={showMenu}>
        <Logo
          isPushed={isPushed}
          togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
          isDark={isDark}
          href={homeLink?.href ?? "/"}
        />
        <NavBar isPushed={isPushed}>
          {
            li.map((objLink) => {
              return ( <li><a href={objLink.link}>{objLink.text}</a></li> )
            })
          }
        </NavBar>
        <Flex>
          <UserBlock account={account} login={login} logout={logout} />
        </Flex>
      </StyledNav.Fun>
      <BodyWrapper>

        <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
