const Counter = (props) => {
  console.log(props);
  const { counter, increment, decrement } = props;
  return (
    <>
      <h3>Counter App</h3>
      <h4>Counter Value '{counter}'</h4>
      <button
        onClick={(e) => {
          increment();
        }}
      >
        Increment by 1
      </button>
      <button
        onClick={(e) => {
          decrement();
        }}
      >
        Decrement by 1
      </button>
    </>
  );
};

export default Counter;
