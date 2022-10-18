import React from 'react';
import { IApp } from '../App';
import Menu from './Menu';
import AppName from './AppName';
import AppLogo from './AppLogo';

function Header({ appName }: IApp) {
  return (
    <div className="Header">
      <Menu/>
      <AppName appName={ appName }/>
      <AppLogo/>
    </div>
  );
}

export default Header;