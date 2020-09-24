import React, { useEffect, useState } from 'react';
import './App.css';

import Login from "./components/Login"
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();


function App() {
  const [token, setToken] = useState(null)
  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    // Securtiy purpose 
    window.location.hash= "";
    const _token = hash.access_token;

    if(token) {
      setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        console.log(user)
      })
    }
  }, []);


  return (
    <div className="app">
    {
      token ? (
        <h1>I am logged in</h1>
      ) : (
        <Login />
      )
    }
    </div>
  );
}

export default App;
