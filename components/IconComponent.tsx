import React from 'react';
import { IconContext } from "react-icons";
import * as Icons from 'react-icons/fa';

const IconComponent = ({ icon, size, color }) => {
  const iconSize = size || 32; // Default size is 32px
  const iconColor = color || 'black'; // Default color is black

  const SelectedIcon = Icons[icon] || Icons['FaCoffee']; // Default to FaCoffee if the icon is not found

  return (
      <IconContext.Provider value={{ size: iconSize + 'px', color: iconColor }}>
        <SelectedIcon />
      </IconContext.Provider>
  );
};

export default IconComponent;