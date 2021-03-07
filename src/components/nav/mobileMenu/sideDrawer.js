import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

import NavItems from '../ancorlinks/anchorLinks';
// import DarkModeToggle from '../../UI/darkModeToggle';
import useLockBodyScroll from './useLockScroll';

const BackgroundWrapper = styled(animated.div)`
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  background: grey;
  width: auto;
  max-width: 30vw;
  max-height: 30vh;
  height: auto;
  display: flex;
  transition: background 0.2s ease-out;
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: auto;
  margin-top: 6rem;
  padding: 2rem 1rem;
`;

const SideDrawer = ({ setMenuOpened, linkData , ...rest }) => {
  useLockBodyScroll();
  return (
    <BackgroundWrapper {...rest}>
      <Wrapper>
        <NavItems linkData={linkData} />
        {/* <DarkModeToggle mobile /> */}
      </Wrapper>
    </BackgroundWrapper>
  );
};

export default SideDrawer;
