export default Screen = (props) => {
  const styling = {
    margin: "20px",
    fontSize: "40px",
    backgroundColor: "rgb(198 198 198)",
  };

  const paraStyle = {
    textAlign: "right",
  };

  return (
    <>
      <div style={styling}>
        <p style={paraStyle}>{props.expression}</p>
      </div>
    </>
  );
};
