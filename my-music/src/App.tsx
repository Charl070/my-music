import './App.css';
import { getTokenFromResponse } from './helpers/spotify/spotify';

import { useEffect, useState } from 'react';

import Login from './components/login/login';

import SpotifyWebApi from 'spotify-web-api-js'


 const spotify = new SpotifyWebApi()
function App() {

  const [token, setToken] = useState(null)

 

  useEffect(() => {
    const hash = getTokenFromResponse()
    window.location.hash = '';

    const _token = hash.access_token

    if (_token) {
      setToken(_token)
      spotify.setAccessToken(_token)
    }

  }, [])
  
  return (
    <div className="App">
      
      {token ?
        (
        <h1>dhdhd</h1>
        )
        : <Login />
      }
    </div>
  );
}

export default App;
