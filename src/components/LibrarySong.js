import React from 'react';
import { useStateContext } from '../contexts/StateMusics';
const LibrarySong = ({ song, id, audioRef }) => {
  const { songs, setSongs, setCurrentSong, isPlaying } = useStateContext();
  const songSelectHandler = async () => {
    await setCurrentSong(song);

    //  Add Active State
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? 'selected' : ''}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
