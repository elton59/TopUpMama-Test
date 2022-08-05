import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return(
    <Navbar bg="myBlack"  variant="dark">
        
       
   
          <Navbar.Brand   className="navbar-brand mx-auto">
          <a className="nav-brand" href="#">
        <img className="img-responsive" src="https://uploads-ssl.webflow.com/627fe5b025b65eae56f6f9b6/6284acc35a5cac46a97b0f47_1652852015961.png" width="55" height="55" alt="logo"></img>
    </a>
            TopUp MaMa</Navbar.Brand>
          
        
      </Navbar>
          ) ;
};

export default Header;
