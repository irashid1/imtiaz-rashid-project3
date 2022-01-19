// modules
import axios from 'axios';
import { useState, useEffect } from 'react';
// components
import PageHeading from "./PageHeading.js";
// styling
import './App.css';

function App() {

  const [message, setMessage] = useState("");
  const [author, setAuthor] = useState("");

  const [allPhotos, setAllPhotos] = useState([]);

  const handleSubmit = (event) => {
    // event.preventDefault();
    window.location.reload();
  }

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
  }, [])

  // fetch json data from the unsplash api
  // https://api.unsplash.com/search/photos/

  useEffect(() => {
    axios({
      url: `https://api.unsplash.com/search/photos/`,
      method: "GET",
      dataResponse: "json",
      params: {
        collections: "",
        query: "space",
        per_page: 1,
        client_id: "TKIetucrCKUutruuIA61j3V6l3Zxra12cwMPYIEuJ_4",
      },
    }).then((response) => {
      // console.log(response);
      const photos = response.data.results;
      setAllPhotos(photos);
    }).catch((error) => {
      console.log(error);
    })
  }, [])

  // populate fetched data on to the screen

  return (
    <div className="App">
      <PageHeading />
      {
        // looping through the photos and dynamically rendering them to the screen
        allPhotos.map((photo) => {
          return (
            <div key={photo.id}>
              <img
                alt={photo.alt_description}
                src={photo.urls.small}
              />
            </div>
          )
        })
      }
      <h2>"{message}"</h2>
      <h3>-{author}</h3>
      {/* maybe place a button component here */}
      <button type="submit" onClick={handleSubmit}>Get New Quote</button>

    </div>
  );
}

export default App;
