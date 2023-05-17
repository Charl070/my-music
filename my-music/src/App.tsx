import './App.css';
import { getTokenFromResponse } from './helpers/spotify/spotify';

import { useEffect, useState } from 'react';

import Login from './components/login/login';
import PlayerPad from './pages/player_pad/player.pad';

import SpotifyWebApi from 'spotify-web-api-js'

import { useStateProviderValue } from './state/StateProvider';


const spotify = new SpotifyWebApi()
function App() {

  const [{ user, token }, dispatch] = useStateProviderValue();



  useEffect(() => {
    const hash = getTokenFromResponse()
    window.location.hash = '';

    const _token = hash.access_token

   

    if (_token) {

      dispatch(
        {
          type: 'SET_TOKEN',
          token: _token
        }
      )
      spotify.setAccessToken(_token)

      spotify.getMe().then((user) => {

        dispatch(
          {
            type: 'SET_USER',
            user
          }
        )
      })

      spotify.getUserPlaylists().then((playlists) =>
      dispatch(
        {
          type: 'SET_PLAYLISTS',
          playlists
        }
      )
      )


    }

  }, [])

  return (
    <div className="App">

      {token ?
        (
          <PlayerPad spotify={ spotify} />
        )
        : <Login />
      }
    </div>
  );
}

export default App;
