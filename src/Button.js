import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function Button() {
  const [color, setColor] = useState('#ffffff');

  const handleRandomizeClick = () => {
    setColor(randomColor());
  };

  return (
    <>
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
