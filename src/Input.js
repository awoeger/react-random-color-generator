import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function Input() {
  const [color, setColor] = useState('#000000');
  const [userHue, setUserHue] = useState('');
  const [userLuminosity, setUserLuminosity] = useState('');

  const handleRandomizeClick = () => {
    setColor(
      randomColor({
        luminosity: setUserLuminosity(userLuminosity),
        hue: setUserHue(userHue),
      }),
    );
  };

  return (
    <>
      <label htmlFor="hue">Enter hue</label>
      <input type="text" id="hue" placeholder="blue" />
      <label htmlFor="luminosity">Enter luminosity</label>
      <input type="text" id="luminosity" placeholder="dark" />
      <button onClick={handleRandomizeClick}>Create random color</button>
      <div
        style={{
          backgroundColor: color,
          width: '300px',
          height: '300px',
        }}
      >
        <h2>{color}</h2>
      </div>
    </>
  );
}
