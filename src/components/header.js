import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Nav,Navbar} from 'react-bootstrap';
import Logo from '../images/sunLogo.png';
import GitHub from '../images/GitHub-Mark-64px.png'


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <Navbar className='navbar' >
        <Navbar.Brand >
            <img src={Logo} alt='' className='logo' />
        </Navbar.Brand>
        {siteTitle}
        
         <Nav className="ml-auto linkage">
            <Nav.Link href="https://github.com/geertza" variant="secondary">
                <img alt='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQh8L2IT3WGVeUE0hrTFceDFd3AFVcwMdwf5A&usqp=CAU'          src={GitHub} className='icon' />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/andygeertz/">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUmOtGailQUMJcuv37p9s1JVhJw59ZC0Fb6A&usqp=CAU'alt='https://www.freepnglogos.com/images/linkedin-logo-png-1837.html' className='icon' />
            </Nav.Link>
          </Nav> 
      </Navbar>
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
