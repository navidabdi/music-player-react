import React from 'react';
import { useStateContext } from '../contexts/StateMusics';

const DarkModeSwitch = () => {
  const { darkMode, setDarkMode } = useStateContext();
  if (darkMode) {
    document.body.classList.add('dark');
    document.body.classList.add('switching');
    setTimeout(() => {
      document.body.classList.remove('switching');
    }, 200);
    if (document.querySelector('.dark-mode-switch')) {
      document.querySelector('.dark-mode-switch').classList.add('dark');
    }
  } else {
    document.body.classList.remove('dark');
    if (document.querySelector('.dark-mode-switch')) {
      document.querySelector('.dark-mode-switch').classList.remove('dark');
    }
  }
  return (
    <div onClick={() => setDarkMode(!darkMode)} className="dark-mode-switch">
      <div className="inner">
        <div className="bg"></div>
        <div className="circle"></div>
      </div>
      <div className="rays">
        <div className="ray"></div>
        <div className="ray"></div>
        <div className="ray"></div>
        <div className="ray"></div>
        <div className="ray"></div>
        <div className="ray"></div>
        <div className="ray"></div>
        <div className="ray"></div>
      </div>
    </div>
  );
};

export default DarkModeSwitch;
