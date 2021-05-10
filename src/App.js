import './App.css';
import randomColor from 'randomcolor';
import React, { useState } from 'react';
import Button from './Button.js';
import Input from './Input.js';

function App() {
  const [userHue, setUserHue] = useState('');
  const [userLuminosity, setUserLuminosity] = useState('');
  const [userBoxWidth, setUserBoxWidth] = useState(300);
  const [userBoxLength, setUserBoxLength] = useState(300);
  const [color, setColor] = useState('#000000');

  const handleRandomizeClick = () => {
    setColor(
      randomColor({
        luminosity: userLuminosity,
        hue: userHue,
      }),
    );
    setUserBoxWidth(userBoxWidth + 1);
    setUserBoxLength(userBoxLength + 1);
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
        userBoxWidth={userBoxWidth}
        userBoxLength={userBoxLength}
        setUserBoxLength={setUserBoxLength}
        setUserBoxWidth={setUserBoxWidth}
      />
      <Button
        handleRandomizeClick={handleRandomizeClick}
        color={color}
        userBoxWidth={userBoxWidth}
        userBoxLength={userBoxLength}
      />
    </>
  );
}

export default App;
