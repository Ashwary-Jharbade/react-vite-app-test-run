import { useState } from "react";
import TextView from "./components/TextView";
import AddTwoNum from "./components/AddTwoNum";
import CompA from "./components/CompA";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>App Component</h1>
      <TextView label="Hi there"></TextView>
      <TextView label="Hola"></TextView>
      <TextView label="What's up"></TextView>
      <TextView label="Hello"></TextView>
      <AddTwoNum></AddTwoNum>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Button {count}
      </button>

      <CompA></CompA>
    </>
  );
}

export default App;
