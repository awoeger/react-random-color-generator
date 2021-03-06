import './App.css';
import { css } from '@emotion/react';
import randomColor from 'randomcolor';
import { useState } from 'react';
import Button from './Button.js';
import Input from './Input.js';

const heading = css`
  text-align: center;
  margin: 100px;
  font-size: 50px;
`;

function App() {
  // Adding all the variables that I need in my children components into my parent component
  const [userHue, setUserHue] = useState('');
  const [userLuminosity, setUserLuminosity] = useState('');
  const [userBoxWidth, setUserBoxWidth] = useState(400);
  const [userBoxLength, setUserBoxLength] = useState(310);
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
  };

  // Returning the Input and the Button Component
  return (
    <>
      <h1 css={heading}>Random Color Generator</h1>
      <div className="container">
        <Input
          setUserHue={setUserHue}
          setUserLuminosity={setUserLuminosity}
          userHue={userHue}
          userLuminosity={userLuminosity}
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
