import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, isPlaying, audioRef, setSongs,libraryStatus }) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library': ''}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            setCurrentSong={setCurrentSong}
            isPlaying={isPlaying}
            songs={songs}
            song={song}
            audioRef={audioRef}
            setSongs={setSongs}
            id={song.id}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
