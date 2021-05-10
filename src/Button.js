import React from 'react';

export default function Button(props) {
  return (
    <div className="button-box">
      <button className="button" onClick={props.handleRandomizeClick}>
        Create random color
      </button>
      <div
        className="color-box"
        style={{
          backgroundColor: props.color,
          width: props.userBoxWidth + 'px',
          height: props.userBoxLength + 'px',
        }}
      >
        <h2>{props.color}</h2>
      </div>
    </div>
  );
}
