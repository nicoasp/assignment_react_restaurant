import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ items }) => {
  const menuItems = items.map((item) => (
  	<MenuItem item={item} key={item.name} />
  ))

  return (
    <div id="menu">
      <h3 className="text-center">Menu</h3>
    	{menuItems}
    </div>
  );
};

export default Menu;
