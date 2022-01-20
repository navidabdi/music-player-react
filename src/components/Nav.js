import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { useStateContext } from '../contexts/StateMusics';

const Nav = () => {
  // Context
  const { libraryStatus, setLibraryStatus } = useStateContext();
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
