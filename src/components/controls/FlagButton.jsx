import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FlagBR from '../../../public/flags/BRflag.svg';
import FlagEUA from '../../../public/flags/EUAflag.svg';
import FlagES from '../../../public/flags/ESflag.svg';

const flags = [
  { src: FlagBR, alt: 'Tradução PT-br', path: '/' },
  { src: FlagEUA, alt: 'Tradução EN', path: '/en' },
  { src: FlagES, alt: 'Tradução ES', path: '/es' }
];

function FlagButton() {
  const [selectedFlag, setSelectedFlag] = useState(flags[0]);
  const navigate = useNavigate();

  const handleFlagChange = (flag) => {
    setSelectedFlag(flag);
    navigate(flag.path);
  };

  return (
    <div className="flag-select">
      <button className="flag-button">
        <img className="imgflags" src={selectedFlag.src} alt={selectedFlag.alt} />
      </button>
      <ul className="flag-options">
        {flags.map((flag, index) => (
          <li key={index} onClick={() => handleFlagChange(flag)}>
            <img className="imgflags" src={flag.src} alt={flag.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FlagButton;
