import React from 'react';

function MenuButton({ text }: any) {
  return (
    <button className='btn btn-warning' type='button'>
      { text }
    </button>
  );
}

export default MenuButton;
