import { useState, useEffect } from 'react';
import './App.css';

function App() {
  
  const [message, setMessage] = useState("");
  const [author, setAuthor] = useState("");
  
  // fetch json data from the stoic quotes api
  // https://stoicquotesapi.com/
  useEffect(() => {
    fetch(`https://stoicquotesapi.com/v1/api/quotes/random`)
      .then(res => res.json())
      .then((jsonRes) => {
        console.log(jsonRes);
        setMessage(jsonRes.body);
        setAuthor(jsonRes.author)
      })
  }, []);
  // populate fetched data on to the screen

  return (
    <div className="App">
      <h1>Daily Stoic Quotes</h1>
      <p>"{message}"</p>
      <p>-{author}</p>
    </div>
  );
}

export default App;
