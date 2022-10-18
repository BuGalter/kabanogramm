import React from 'react';
import MenuButton from './MenuButton';

function Menu() {
  const menuButtons = [
    { id: 1, text: 'Поиск' },
    { id: 2, text: 'Группа' },
    { id: 3, text: 'Настройки' },
  ];

  return (
    <div className='dropdown'>
      <button
        className='btn btn-warning dropdown-toggle'
        type='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        Dropdown
      </button>
      <ul className='dropdown-menu'>
        {menuButtons.map((button) => (
          <li key={ button.id }>
            <MenuButton text={button.text} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
