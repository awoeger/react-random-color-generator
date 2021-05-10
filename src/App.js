import './App.css';
import randomColor from 'randomcolor';
import React, { useState } from 'react';
import Button from './Button.js';
import Input from './Input.js';

function App() {
  const [userHue, setUserHue] = useState('');
  const [userLuminosity, setUserLuminosity] = useState('');
  const [color, setColor] = useState('#000000');

  const handleRandomizeClick = () => {
    setColor(
      randomColor({
        luminosity: userLuminosity,
        hue: userHue,
      }),
    );
  };
  return (
    <>
      <h1>Random Color Generator</h1>
      <Input
        setUserHue={setUserHue}
        setUserLuminosity={setUserLuminosity}
        userHue={userHue}
        userLuminosity={userLuminosity}
        handleRandomizeClick={handleRandomizeClick}
        color={color}
      />
      <Button handleRandomizeClick={handleRandomizeClick} color={color} />
    </>
  );
}

export default App;
