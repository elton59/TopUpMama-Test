import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return(
    <Navbar bg="myBlack"   className="main-footer d-flex justify-content-center navbarContainer"
    fixed="bottom" variant="dark">
        
       
       
          <Navbar.Brand   className="navbar-brand mx-auto">
          😋
          <a className="nav-brand" href="#">
        <img className="img-responsive" src="https://uploads-ssl.webflow.com/627fe5b025b65eae56f6f9b6/6284acc35a5cac46a97b0f47_1652852015961.png" width="55" height="55" alt="logo"></img>
        😋
    </a>
    </Navbar.Brand>
          
        
      </Navbar>
          ) ;
};

export default Footer;
