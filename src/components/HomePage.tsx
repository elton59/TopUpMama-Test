import * as React from 'react';
import Table from 'react-bootstrap/Table';
import { useCurrentPosition } from 'react-use-geolocation';
import  LeftBar from './LeftBar';
import useCountDown from "react-countdown-hook";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import {  useState,useEffect } from "react";
import { useParams } from 'react-router-dom';
interface IHomePageProps {
 
}


const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {

  const [position, error] = useCurrentPosition();
  const [page,setPage]=useState({});
  const [user,setUser]=useState({});
  const [userl,setUserl]=useState({});
  const [timeLeft, actions] = useCountDown(600000, 1000);
  
  const params=useParams();

  useEffect(()=>{
   
    console.log("props",props); 
    const url = "https://reqres.in/api/users/"+params.id;

    axios.get(url).then (res => {
      console.log(res);
        setUser(res.data.data.first_name);
        setUserl(res.data.data.last_name);
       console.log("user info",user)
    
    }).catch(function(error) {
        console.log(error);
       
      })},[]) 
      useEffect(()=>{
     
    const url2 = "https://reqres.in/api/users?page=2";
    
    axios.get(url2).then (res => {
     
      setPage(res.data.page);
        console.log("this is page",page);
    }).catch(function(error) {
        console.log(error);
        
      })
    console.log("params",params.id);    
  },[]) 
 
  React.useEffect(() => {
    const countdown=() => actions.start();
    countdown();
  }, []);

  if (!position && !error) {
    return <p>Waiting...</p>;
  }
 
  if (error) {
    return <p>{error.message}</p>;
  } 
  return(
    <div><LeftBar/>
    <Table responsive>
    <Card style={{ margin:40 }}>
         
  
      <Card.Title style={{color:'#fc562b',textDecoration:''}}className="blink_me">Welcome Dear Customer</Card.Title> 
    <hr/>
      <Card.Header>
      <div>
      <p>
        Page Number: {JSON.stringify(page)}
      </p>
      <p>
        Firstname: {JSON.stringify(user)}
      </p>
      <p>
        Lastname: {JSON.stringify(userl)}
      </p>
     
    </div>   
      <p>Bearer Token:QpwL5tke4Pnpja7X4</p>
      <p>Your Token Expires in:{(timeLeft / 60000).toFixed(2)}</p>
      <Button onClick={() => actions.start()} style={{backgroundColor:'#fc562b'}}>
        Restart Token
      </Button>
      </Card.Header>
      <Card.Body>
      My Geo-Location Details
     
   
    <div>
      <p>
        Latitude: {position.coords.latitude}
      </p>
      <p>
        Longitude: {position.coords.longitude}
      </p>
    </div>
    </Card.Body>
  </Card>
  <Card.Footer>:)</Card.Footer>
  <hr/>
  </Table> 
  </div> 
  ) ;
};

export default HomePage;
