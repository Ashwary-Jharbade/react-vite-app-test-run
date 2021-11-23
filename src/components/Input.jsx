const Input = ({ type, placeholder, handler, value }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handler}
      />
    </>
  );
};

export default Input;
