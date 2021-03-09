import React, { useState}  from 'react';
import { useTransition, config } from 'react-spring';

// import HamburgerToggler from './hamburgerToggle';
import SideDrawer from './sideDrawer';
import styled from 'styled-components';
const Toggle = styled.input`
position: relative;
  width: 4em;
  height: 4em;
  border: none;
  cursor: pointer;
  background-color: transparent;
  background-image: url("https://ljc-dev.github.io/testing0/ham.svg");
  background-size: cover;
  margin: 0 20px;
`;

const MobileMenu = ({linkData}) => {
  const [menuOpened, setMenuOpened] = useState(false);
  // Animation for the side drawer
  const SideDrawerTransition = useTransition(menuOpened, null, {
    config: config.stiff,
    from: { opacity: 0, transform: 'translateX(-50%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(50%)' },
  });
  // If on 404 page, dont render menu, because menu links are from react-scroll, won't work there. Logo is prepared to be clicked and will work
  return (
    <div  >
      {/* <Toggle
      type='button'
       onClick={() => setMenuOpened(!menuOpened)}
      /> */}
      
      {SideDrawerTransition.map(
        ({ item, key, props }) =>
          item && (
            <SideDrawer
              key={key}
              style={{margin:'0'}}
              setMenuOpened={() => setMenuOpened(false)}
              linkData={linkData}
            />
          )
      )}
    </div>
  );
};

export default MobileMenu;
