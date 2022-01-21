// modules
import axios from 'axios';
import { useState, useEffect } from 'react';
// components
import PageHeading from "./components/PageHeading.js";
import DisplayPhotos from './components/DisplayPhotos.js';
import Button from './components/Button.js';
// // styling
import './styles/sass/App.scss';

function App() {

  // useState objects
  const [message, setMessage] = useState("");
  const [author, setAuthor] = useState("");
  const [allPhotos, setAllPhotos] = useState([]);
  const [randomizer, setRandomizer] = useState(false);

  // a function to trigger a button submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setRandomizer(!randomizer);
  }
  
  // a function to get a min an max value between two numbers
  const getRandomInt = ((min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
    // the maximum is exclusive and the minimum is inclusive
  })

  // fetch json data from the stoic quotes api
  // https://stoicquotesapi.com/
  useEffect(() => {
    fetch(`https://stoicquotesapi.com/v1/api/quotes/random`)
      .then(res => res.json())
      .then((jsonRes) => {
        // console.log(jsonRes);
        setMessage(jsonRes.body);
        setAuthor(jsonRes.author);
      }).catch((error) => {
        console.log(error);
      })
  }, [randomizer])

  // fetch json data from the unsplash api
  // https://api.unsplash.com/search/photos/
  useEffect(() => {
    axios({
      url: `https://api.unsplash.com/search/photos/`,
      method: "GET",
      dataResponse: "json",
      params: {
        collections: "",
        query: "galaxy",
        per_page: 30,
        orientation: "landscape",
        client_id: "TKIetucrCKUutruuIA61j3V6l3Zxra12cwMPYIEuJ_4",
      },
    }).then((response) => {
      // console.log(response);
      const photos = response.data.results;
      
      // creates a random integer between 0 and 30 (0 being inclusive, 30 being exclusive) and assigns it to index
      // randomPhotoArray then stores the randomly selected photo in the array
      let index = getRandomInt(0, 30);
      const randomPhotoArray = [photos[index]];

      setAllPhotos(randomPhotoArray);
     
    }).catch((error) => {
      console.log(error);
    })
  }, [randomizer])

  // populate fetched data on to the screen
  return (
    <div className="App">
      <PageHeading />
      <DisplayPhotos allPhotos={allPhotos} />
      <Button handlerFunction={handleSubmit} buttonText={`Get New Quote`} />
      <h2>"{message}"</h2>
      <h3>-{author}</h3>
    </div>
  );
}

export default App;




