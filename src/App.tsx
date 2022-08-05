import React from 'react';
import  Header from './components/Header';
import  Footer from './components/Footer';
import  MyAccount from './components/MyAccount';
import  EditDetails from './components/EditDetails';
import  DeleteDetails from './components/DeleteDetails';
import './App.css';
import  {BrowserRouter as Router,Route,Routes}from 'react-router-dom';   
import Login from './components/Login';
import HomePage from './components/HomePage';
import Register from './Register';

export const MyContext = React.createContext({});
function App() {
  const [value, setvalue] = React.useState(null);
  return (
    <div className="App">
      <MyContext.Provider value={{value, setvalue}}>
      <Router>
      <Header/>
      
      <Routes>
      < Route  path ="/"  element={<Login/>}/>
    < Route  path ="/MyAccount"  element={<MyAccount/>}/>
    < Route  path ="/HomePage/:id"  element={<HomePage/>}/>
    < Route path="/EditDetails"  element={<EditDetails/>}/>
    < Route path="/DeleteDetails"  element={<DeleteDetails/>}/>
    < Route path="/Register"  element={<Register/>}/>

    </Routes>
    <Footer/>
    </Router>
    </MyContext.Provider>
    </div>
  );
}

export default App;
