import React, { useState } from 'react';

export default function Input(props) {
  function handleChangeHue(event) {
    props.setUserHue(event.currentTarget.value);
  }

  function handleChangeLuminosity(event) {
    props.setUserLuminosity(event.currentTarget.value);
  }

  return (
    <div className="input-box">
      <label htmlFor="hue">Enter hue</label>
      <input
        type="text"
        id="hue"
        placeholder="blue"
        value={props.userHue}
        onChange={handleChangeHue}
      />
      <label htmlFor="luminosity">Enter luminosity</label>
      <input
        type="text"
        id="luminosity"
        placeholder="dark"
        value={props.userLuminosity}
        onChange={handleChangeLuminosity}
      />
    </div>
  );
}
