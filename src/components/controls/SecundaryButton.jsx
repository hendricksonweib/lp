import React from 'react';

const ButtonNav = (props) => {
  const handleClick = () => {
    const targetElement = document.getElementById(props.targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  };

  return (
    <button className='ButtonNav' onClick={handleClick}>{props.texto}</button>
  );
};

export default ButtonNav;