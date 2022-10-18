import React from 'react';
import imgLogo from '../assets/logo.svg';

function AppLogo() {
  const logoProps = {
    imgLogo,
    altLogo: 'Logo',
    logoStyle: {
      height: '40px',
      width: '40px',
    },
  };

  return (
    <div>
      <img
        src={logoProps.imgLogo}
        className='App-logo'
        style={logoProps.logoStyle}
        alt={logoProps.altLogo}
      />
    </div>
  );
}

export default AppLogo;
