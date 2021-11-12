import Todo from "./components/Todo";
import Button from "./components/Button";
import { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  const [visibility, setVisibility] = useState(false);
  const _toggleTodoAppHandler = () => {
    setVisibility(!visibility);
  };
  return (
    <>
      <ErrorBoundary>
        <Button
          btnAction={_toggleTodoAppHandler}
          btnLabel="Toggle Todo App"
        ></Button>
        {visibility ? <Todo /> : <div>Click toggle button</div>}
      </ErrorBoundary>
    </>
  );
}

export default App;
