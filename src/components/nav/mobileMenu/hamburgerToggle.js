import React from 'react';
import styled from 'styled-components';
import ham from '../../../images/toggle.png'
const StyledLabel = styled.label`
position: relative;
top: 100px;
width: 36px;
height: auto;
border: none;
cursor: pointer;
background-color: transparent;
background-image: ${ham};
background-size: 100%;
`;

const HamburgerToggler = ({ menuOpened, toggleChange }) => {
  return (
    <StyledLabel>
      <input type="checkbox" checked={menuOpened} onChange={toggleChange} />
      <div className="bar-wrapper">
        <div className="bar top-bar" />
        <div className="bar middle-bar" />
        <div className="bar bottom-bar" />
      </div>
    
    </StyledLabel>
  );
};

export default HamburgerToggler;
