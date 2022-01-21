import React, { useState, createContext, useContext } from 'react';
import data from '../data';

const StateContext = createContext();

export const StateMusics = ({ children }) => {
  // Dark Mode State
  const [darkMode, setDarkMode] = useState(false);

  // States
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <StateContext.Provider
      value={{
        songs,
        setSongs,
        currentSong,
        setCurrentSong,
        isPlaying,
        setIsPlaying,
        songInfo,
        setSongInfo,
        libraryStatus,
        setLibraryStatus,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
