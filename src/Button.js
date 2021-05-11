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
          transition: 'all .5s ease',
          WebkitTransition: 'all .5s ease',
          MozTransition: 'all .5s ease',
        }}
      >
        <h2>{props.color}</h2>
      </div>
    </div>
  );
}
