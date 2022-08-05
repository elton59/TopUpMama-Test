import * as React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import LeftBar from './LeftBar';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {  useState,useEffect} from "react";
import axios from 'axios';

interface IDeleteDetailsProps {
}

const DeleteDetails: React.FunctionComponent<IDeleteDetailsProps> = (props) => {
  const url = "https://reqres.in/api/users";
  const [name,setName]=useState({});
  const [job,setJob]=useState({});
    const [data] = useState(
      {
  
        cemail: "morpheus",
        cpass: "zion resident",
      });

      async function submit(e) {
        
     
        e.preventDefault();
        axios.post(url, {
    
          name:data.cemail,
          job:data.cpass,
         
        }).then (res => {
          console.log(res);
           var id=res.data.id;
          window.alert("delete successful");
          console.log("response",res);
          
        }).catch(function(error) {
            console.log(error);
            window.alert(error.message);
          })
       
      }
 
  useEffect(()=>{
   
        axios.post(url, {
    
          name:data.cemail,
          job:data.cpass,
         
        }).then (res => {
     
          setName(res.data.name);
            console.log("this is name",name);
            setJob(res.data.job);
            console.log("this is job",job);
        }).catch(function(error) {
            console.log(error);
            
          })
       
      },[])
  
  return(
    <div>
      <LeftBar/>
   
    <Table responsive>
    <Card style={{ margin:40 }}>
         
    <Card.Body>
      <Card.Title>Users</Card.Title>
      <img />
      <Table striped bordered hover>
      <thead>
        <tr>
         
          <th>Name</th>
          <th>Job</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        
        <tr>
          
          <td>{JSON.stringify(name)}</td>
          <td>{JSON.stringify(job)}</td>
         
          
          <td><Link to="/EditDetails"><Button style={{backgroundColor:'#fc562b'}}>Edit</Button></Link>&nbsp;   
          <Button style={{backgroundColor:'#fc562b'}}onClick={(e) => submit(e)}>Delete</Button></td>
        </tr>
        
      </tbody>
    </Table>

      
    </Card.Body>
  </Card>
  <hr/>
  </Table>  </div> ) ;
  
};

export default DeleteDetails;
