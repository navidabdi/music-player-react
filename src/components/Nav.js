import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { useStateContext } from '../contexts/StateMusics';
import DarkModeIcon from './DarkModeIcon';
const Nav = () => {
  // Context
  const { libraryStatus, setLibraryStatus } = useStateContext();
  return (
    <nav>
      <a href="/">
        <h1>Waves</h1>
      </a>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
      <DarkModeIcon />
    </nav>
  );
};

export default Nav;
