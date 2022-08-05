import * as React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import {  useState,useEffect} from "react";

interface IRegisterProps {
}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
  
  const [token, setToken] = useState({});
   const url = "https://reqres.in/api/register"
  const [data, setData] = useState(
      {
  
        cemail: "",
        cpass: "",
      }
    );
      
    
   async function submit(e) {
        
     
        e.preventDefault();
        axios.post(url, {
    
          email:data.cemail,
          password:data.cpass,
         
        }).then (res => {
          console.log(res);
           var id=res.data.id;
          window.alert("Registration successful");
          console.log("token",res);
          window.location.href= "/";
        }).catch(function(error) {
            console.log(error);
            window.alert(error.message);
          })
       
      }
   
      
     
      function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata);
        console.log(newdata)
      }
   
  return(
    
    <Table responsive>
    <Card style={{ margin:40 }} className="myForm">
         
    <Card.Body>
      <Card.Title style={{color:'#fc562b',textDecoration:''}}className="blink_me">Welcome Dear Customer</Card.Title>
      <img />
      <Form onSubmit={(e) => submit(e)}>
      <Form.Group className="mb-3 "  controlId="formBasicEmail" >
       
        <Form.Label style={{color:'white'}} >EMAIL</Form.Label>
          <input className="form-control"  type="email" placeholder='Email' name="cemail" id='cemail' value={data.cemail} onChange={(e) => handle(e)} required />
        <Form.Label  style={{color:'white'}}>Password</Form.Label>
        <input className="form-control" type="password" placeholder="input Password" data-toggle="password" accept='/^[ A-Za-z0-9_@./#&+-]*$/' name="cpass"  id='cpass'onChange={(e) =>handle(e)}/>
      </Form.Group>
      <button type="submit" className="btn btn-primary" style={{backgroundColor:'#fc562b'}}>Register</button>  
      
    </Form>
      
    </Card.Body>
  </Card>
  <hr/>
  </Table>  
  ) ;
};

export default Register;
