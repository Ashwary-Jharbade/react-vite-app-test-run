import { useEffect, useRef } from "react";

const AutoFocus = () => {
  const inputRef = useRef({});

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <input ref={inputRef} placeholder="Auto focus field" type="text" />
    </>
  );
};

export default AutoFocus;
