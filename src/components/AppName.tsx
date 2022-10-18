import React from 'react';
import { IApp } from '../App';

function AppName({ appName }: IApp) {
  return (
    <div>
      <h3>{ appName }</h3>
    </div>
  );
}

export default AppName;