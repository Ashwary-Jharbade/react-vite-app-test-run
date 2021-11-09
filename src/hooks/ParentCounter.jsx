import { createContext, useState } from "react";
import Counter from "./Counter";

export const context = createContext(0);

const ParentCounter = () => {
  const [pcount, setPCount] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setPCount(pcount + 1);
        }}
      >
        Parent Button {pcount}
      </button>
      <context.Provider value={pcount}>
        <Counter></Counter>
      </context.Provider>
    </>
  );
};

export default ParentCounter;
