const Input = ({ type, name, handler, value, placeholder }) => {
  return (
    <>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={handler}
      />
    </>
  );
};

export default Input;
