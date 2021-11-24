import { useRef, useState } from "react";

const InputSubmit = () => {
  const [name, setName] = useState("");
  const fieldRef = useRef(null);
  const _onInputFieldSubmitHandler = (e) => {
    if (!e) {
      return;
    }
    setName(fieldRef.current.value);
  };
  return (
    <>
      <div>
        <input ref={fieldRef} placeholder="Enter name" type="text" />
      </div>
      <br />
      <div>
        <button onClick={_onInputFieldSubmitHandler}>Submit</button>
      </div>
      <br />
      <div>Submitted name : {name}</div>
    </>
  );
};

export default InputSubmit;
