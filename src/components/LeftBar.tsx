import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav,Navbar} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom'
interface ILeftBarProps {
}

const LeftBar: React.FunctionComponent<ILeftBarProps> = (props) => {
  return(
    <div>
        
   <Navbar bg='myBlack' variant='dark' expand="sm" >
   <Container>
<Navbar.Toggle/>
</Container>
   <Navbar.Collapse>
   <Nav>
   <Link style={{color:'white',padding:'10px',textDecoration:'none'}} to="/MyAccount">
           
            
My Account
</Link>
<Link to="/DeleteDetails"  style={{color:'white',padding:'10px',textDecoration:'none'}}>
Users
</Link>
   </Nav>
  
   </Navbar.Collapse>
   </Navbar>
    </div>
  ) ;
};

export default LeftBar;
