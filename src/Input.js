export default function Input(props) {
  // Adding the onChange Event Handlers for the input fields and getting the input values
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
  // Creating the input and label fields
  return (
    <div className="input-box">
      <label htmlFor="hue">Enter hue</label>
      <input
        id="hue"
        placeholder="blue"
        value={props.userHue}
        onChange={handleChangeHue}
      />
      <label htmlFor="luminosity">Enter luminosity</label>
      <input
        id="luminosity"
        placeholder="dark"
        value={props.userLuminosity}
        onChange={handleChangeLuminosity}
      />
      <label htmlFor="boxWidth">Enter box width</label>
      <input
        type="number"
        id="boxWidth"
        placeholder="30"
        value={props.userBoxWidth}
        onChange={handleChangeBoxWidth}
      />
      <label htmlFor="boxLength">Enter box height</label>
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
