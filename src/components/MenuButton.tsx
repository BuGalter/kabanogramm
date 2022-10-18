import React from 'react';

function MenuButton(props: any) {
  return (
    <button className='btn btn-warning' type='button'>
      { props.text }
    </button>
  );
}

export default MenuButton;
