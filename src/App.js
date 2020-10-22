import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Photo from './Components/photoComponent'
import "./App.css";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-10-20")
    .then(( response => {
      setData(response.data)
      console.log(response)
    }))
  }, [])
  return (
    <div className="App">
      
      <Photo title={data.title} hdurl={data.hdurl}/>
    </div>
  );
}

export default App;