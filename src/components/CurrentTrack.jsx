import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStateProvider } from './../utils/StateProvider';
import { reducerCases } from './../utils/Constants';
import axios from 'axios';

export default function CurrentTrack() {
  const [{ token, currentlyPlaying }, dispatch] = useStateProvider();

  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        'https://api.spotify.com/v1/me/player/currently-playing',
        {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.data !== '') {
        const { item } = response.data;
        const currentlyPlaying = {
          id: item.id,
          name: item.name,
          artists: item.artists.map((artist) => artist.name),
          image: item.album.image[2].url,
        };
        dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
      }
    };

    getCurrentTrack();
  }, [token, dispatch]);

  return (
    <Container>
      {currentlyPlaying && (
        <div className='track'>
          <div className='track__image'>
            {' '}
            <img src={currentlyPlaying.image} alt='currentlyPlayingImage' />
          </div>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div``;
