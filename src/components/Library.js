import React from 'react';
import LibrarySong from './LibrarySong';
import { useStateContext } from '../contexts/StateMusics';
const Library = ({ audioRef }) => {
  // Context
  const { songs, libraryStatus } = useStateContext();
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            audioRef={audioRef}
            id={song.id}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
