import './App.css';
import randomColor from 'randomcolor';
import React, { useState } from 'react';
import Button from './Button.js';
import Input from './Input.js';

function App() {
  const [userHue, setUserHue] = useState('');
  const [userLuminosity, setUserLuminosity] = useState('');
  const [userBoxWidth, setUserBoxWidth] = useState(400);
  const [userBoxLength, setUserBoxLength] = useState(252);
  const [color, setColor] = useState('#eeeeee');

  const handleRandomizeClick = () => {
    setColor(
      randomColor({
        luminosity: userLuminosity,
        hue: userHue,
      }),
    );
    setUserBoxWidth(userBoxWidth);
    setUserBoxLength(userBoxLength);
  };
  return (
    <>
      <h1>Random Color Generator</h1>
      <div className="container">
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
      </div>
    </>
  );
}

export default App;
