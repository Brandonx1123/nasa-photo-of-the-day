import React, {useState, useEffect} from "react";
import axios from "axios"
import "./App.css";
import Header from './components/Header'
import NasaPara from './components/NasaPara'
import Footer from './components/Footer'
import Body from "./components/Body";
import styled from "styled-components";

const API_KEY = 'GyOnpgjUezHmQRBckQcDPUFaU1ZmgRpykvriuPqH';
const API_URL ='https://api.nasa.gov/planetary';

const WrapperDiv=styled.div`

background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80');
background-size: cover;
/* height: 500px; */

`

function App() {

const [photo, setPhoto] = useState([]);

useEffect ( () => {
  const FetchAPI = () => {
    axios.get (`${API_URL}/apod?api_key=${API_KEY}`) 
    .then(res =>{
      setPhoto(res.data)
    })
    .catch(err => {
      console.log ('error', err)
    })
  }
  FetchAPI() //invoked my function inside useeffect 
}, [])

  return (
    <WrapperDiv className="App">
      <Header />
      <Body title={photo.title} date={photo.date} video={photo.url} />
      <NasaPara explanation= {photo.explanation} />
      <Footer />
    </WrapperDiv>
  );
}

export default App;

