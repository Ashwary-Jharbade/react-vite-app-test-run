const Button = ({ label, handler }) => {
  console.log("Rendered", label);
  return (
    <>
      <button onClick={handler}>{label}</button>
    </>
  );
};

export default Button;