import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ items }) => {
  const menuItems = items.map((item) => (
  	<MenuItem item={item} key={item.name} />
  ))

  return (
    <div className="Menu">
    	{menuItems}
    </div>
  );
};

export default Menu;