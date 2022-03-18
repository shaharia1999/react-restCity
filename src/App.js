import logo from './logo.svg';
import './App.css';
import React, {  useEffect, useState } from 'react';
import City from './conpunant/City/City';



function App() {
  return (
    <div className="App">
       <City></City>
      <LoadData></LoadData>
      <Country></Country>
      
   
      
      
    </div>
  );
}
function LoadData(){
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[])
return(
  <div>
    <h1> Rest countries With React App</h1>
    <h2>Resut Countries:{countries.length}</h2>
    {
      countries.map(country=> <Country name ={country.name.common}flag={country.flags.png}></Country>)
      
    }
  </div>
)
}
function Country(props){
  return(
    <div style={{border: " 2px solid red",borderRadius:"20px",backgroundColor:"black" ,color:'white',marginTop:"20px"}}>
      <h2> Name :{props.name}</h2>
      <img src={props.flag} alt="" />
    </div>
  )
}
export default App;
