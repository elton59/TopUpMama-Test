import * as React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import  LeftBar from './LeftBar';
import {  useState,useEffect} from "react";
import axios from 'axios';
interface IEditDetailsProps {
}

const EditDetails: React.FunctionComponent<IEditDetailsProps> = (props) => {
  const url = "https://reqres.in/api/users";
  const [name,setName]=useState({});
  const [job,setJob]=useState({});
    const [data] = useState(
      {
  
        cemail: "morpheus",
        cpass: "zion resident",
      });
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
      async function submit(e) {
        
     
        e.preventDefault();
        axios.put(url, {
    
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
  return(
    <div>
      <LeftBar/>
      <Table responsive>
    <Card style={{ margin:40 }} >
         
    <Card.Body>
      <Card.Title style={{color:'#fc562b',textDecoration:''}}>Update Details</Card.Title>
      <img />
      <Form>
      <Form.Group className="mb-3 "  controlId="formBasicEmail" >
       
        <Form.Label style={{color:'black'}} >Name</Form.Label>
          <input className="form-control"  type="text" readOnly  value={JSON.stringify(name)}required />
        <Form.Label  style={{color:'black'}}>Job Title</Form.Label>
        <input className="form-control" value={JSON.stringify(job)}type="text" readOnly  />
       <br/>
       <Button style={{backgroundColor:'#fc562b'}}onClick={(e) => submit(e)}>update</Button>
      </Form.Group>
     
    </Form>
      
    </Card.Body>
  </Card>
  <hr/>
  </Table>  


  </div>
  ) ;
};

export default EditDetails;
