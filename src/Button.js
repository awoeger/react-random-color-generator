export default function Button(props) {
  return (
    <div className="button-box">
      <button
        style={{ borderColor: props.color, borderWidth: '2px' }}
        className="button"
        onClick={props.handleRandomizeClick}
      >
        Create random color
      </button>
      <div
        className="color-box"
        style={{
          backgroundColor: props.color,
          width: props.userBoxWidth + 'px',
          height: props.userBoxLength + 'px',
          transition: 'all .5s ease',
        }}
      >
        <h2>{props.color}</h2>
      </div>
    </div>
  );
}
