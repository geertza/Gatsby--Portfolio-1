import React from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links";
export default () => (
    <>
     <AnchorLink
    to="/#intro"
    title="Top"
    className="stripped"
    stripHash
    />
    <AnchorLink
      to="/#contact"
      title="Get In Touch"
      className="stripped"
      stripHash
    />
    <AnchorLink
    to="/#skills"
    title="Skills"
    className="stripped"
    stripHash
    />
       <AnchorLink
    to="/#projects"
    title="Examples"
    className="stripped"
    stripHash
    />
    
    </>
    
  );
