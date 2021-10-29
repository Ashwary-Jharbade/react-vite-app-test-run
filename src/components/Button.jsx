const CalButton = (props) => {
  const styling = {
    flex: "3",
    padding: "20px",
    margin: "10px",
    fontSize: "30px",
    cursor: "pointer",
    backgroundColor: "rgb(75 75 75)",
    color: "white",
    borderRadius: "10px",
  };
  return (
    <>
      <button onClick={props.updateValue} style={styling}>
        {props.char}
      </button>
    </>
  );
};

export default CalButton;
