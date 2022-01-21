import React from 'react';
import { useStateContext } from '../contexts/StateMusics';
const Song = () => {
  // Context
  const { currentSong, isPlaying } = useStateContext();
  return (
    <div className="song-container">
      <img
        className={isPlaying ? 'play' : 'puse'}
        id="#img"
        src={currentSong.cover}
        alt={currentSong.name}
      />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
