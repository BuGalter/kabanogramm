import React from 'react';
import Menu from './Menu';
import AppName from './AppName';
import AppLogo from './AppLogo';

function Header(props: any) {
  return (
    <div className="Header">
      <Menu/>
      <AppName appName={ props.appName }/>
      <AppLogo/>
    </div>
  );
}

export default Header;