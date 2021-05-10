import React from 'react';

export default function Button(props) {
  return (
    <>
      <button className="btn first" onClick={props.handleRandomizeClick}>
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
    </>
  );
}
