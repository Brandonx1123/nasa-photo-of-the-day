import React, {useState, useEffect} from "react";
import axios from "axios"
import "./App.css";
import Header from './components/Header'
import NasaPara from './components/NasaPara'

const API_KEY = 'GyOnpgjUezHmQRBckQcDPUFaU1ZmgRpykvriuPqH';
const API_URL ='https://api.nasa.gov/planetary';

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
    <div className="App">
      <Header title={photo.title} date={photo.date} video={photo.url} />
      <NasaPara explanation= {photo.explanation} />
    </div>
  );
}

export default App;
