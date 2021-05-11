import './App.css';
import { css, jsx } from '@emotion/react';
import randomColor from 'randomcolor';
import React, { useState } from 'react';
import Button from './Button.js';
import Input from './Input.js';

function App() {
  // Adding all the variables that I need in my children components into my parent component
  const [userHue, setUserHue] = useState('');
  const [userLuminosity, setUserLuminosity] = useState('');
  const [userBoxWidth, setUserBoxWidth] = useState(400);
  const [userBoxLength, setUserBoxLength] = useState(252);
  const [color, setColor] = useState('#eeeeee');

  // Adding my Event Handler Function to my parent component
  /* This sets the random color to the user inputs and the length and width to the user input*/
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

  // Returning the Input and the Button Component
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
