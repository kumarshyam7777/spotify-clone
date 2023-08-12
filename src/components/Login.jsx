import React from 'react';
import styled from 'styled-components';

export default function Login() {
  const handleClick = () => {
    const clientId = '26b82bd8572942da910ec3aed732cbc2';
    const rediretURL = 'http://localhost:3000/';
    const apiUrl = 'https://accounts.spotify.com/authorize';
    const scope = [
      'user-read-email',
      'user-read-private',
      'user-modify-playback-state',
      'user-read-playback-state',
      'user-read-currently-playing',
      'user-read-recently-played',
      'user-read-playback-position',
      'user-top-read',
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${rediretURL}&scope=${scope.join(
      ' '
    )}&response_type=token&show_dialouge=true`;
  };
  return (
    <Container>
      <img
        src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png'
        alt='spotify'
      />
      <button onClick={handleClick}>Connect Spotify</button>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5rem;
  img {
    height: 20vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: black;
    color: #49f585;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;
