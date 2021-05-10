export default function Input(props) {
  function handleChangeHue(event) {
    props.setUserHue(event.currentTarget.value);
  }

  function handleChangeLuminosity(event) {
    props.setUserLuminosity(event.currentTarget.value);
  }

  function handleChangeBoxWidth(event) {
    props.setUserBoxWidth(event.currentTarget.value);
  }

  function handleChangeBoxLength(event) {
    props.setUserBoxLength(event.currentTarget.value);
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
      <label htmlFor="boxWidth">Enter Box Width</label>
      <input
        type="number"
        id="boxWidth"
        placeholder="30"
        value={props.userBoxWidth}
        onChange={handleChangeBoxWidth}
      />
      <label htmlFor="boxLength">Enter Box Width</label>
      <input
        type="number"
        id="boxLength"
        placeholder="30"
        value={props.userBoxLength}
        onChange={handleChangeBoxLength}
      />
    </div>
  );
}
