import axios from 'axios';
import { useState, useEffect } from 'react';
import PageHeading from "./PageHeading.js";
import './App.css';

function App() {

  const [message, setMessage] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
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
      })
  }, []);
  // populate fetched data on to the screen

  return (
    <div className="App">
      <PageHeading />
      <h2>"{message}"</h2>
      <h3>-{author}</h3>
      {/* maybe place a button component here */}
      <button type="submit" onClick={handleSubmit}>Get New Quote</button>
    </div>
  );
}

export default App;
