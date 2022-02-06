import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { useStateContext } from '../contexts/StateMusics';
import DarkModeIcon from './DarkModeIcon';
import logo from '../img/logo.png';
const Nav = () => {
  // Context
  const { libraryStatus, setLibraryStatus } = useStateContext();
  return (
    <nav>
      <a className="logo" href="/">
        <img src={logo} alt="" />
        <h1>Waves Player</h1>
      </a>
      <div className="buttons">
        <DarkModeIcon />
        <button onClick={() => setLibraryStatus(!libraryStatus)}>
          Library
          <FontAwesomeIcon className="library-icon" icon={faMusic} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
