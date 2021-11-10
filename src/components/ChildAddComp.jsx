import { useCallback, useState } from "react";

const ChildAddComp = (props) => {
  const [num, setNum] = useState({
    num1: 0,
    num2: 0,
  });

  const setNumbers = (e) => {
    if (!e && !e?.target?.name) {
      throw new Error("Error");
    }
    const { name, value } = e.target;
    setNum({
      ...num,
      [name]: value,
    });
  };

  const memoized = useCallback(() => {
    props.func(num.num1, num.num2);
  }, [num]);

  return (
    <>
      <input type="text" name="num1" value={num.num1} onChange={setNumbers} />
      <input type="text" name="num2" value={num.num2} onChange={setNumbers} />
      <button onClick={memoized}>Add</button>
    </>
  );
};

export default ChildAddComp;
