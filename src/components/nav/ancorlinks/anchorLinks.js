import React from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links";
export default () => (
    <>
     <AnchorLink
    to="/#intro"
    title="↑↑↑"
    className="stripped"
    stripHash
    />
    <AnchorLink
      to="/#contact"
      title="Contact"
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
