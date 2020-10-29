import React, { useEffect, useState } from 'react';
import './App.css';

import Login from "./components/Login"
import Player from './components/Player'

import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';

import { useDataLayerValue } from "./DataLayer"

const spotify = new SpotifyWebApi()


function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();
  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    // Security purpose 
    window.location.hash= "";
    const _token = hash.access_token;
    
    if(_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      // place token into API
      spotify.setAccessToken(_token);
      // get call that returns user info
      spotify.getMe()
        .then(user => {
          // pops the user right in the data layer
          dispatch({
            type: 'SET_USER',
            user: user,
          })
        })
    }
    console.log("I HAVE A TOKEN", hash)
  }, []);

  console.log("USER", user)
  console.log("Token is here", token)

  return (
    <div className="app">
    {
      token ? (
        <Player />
      ) : (
        <Login />
      )
    }
    </div>
  );
}

export default App;
