import { createContext, useState } from "react";
import Home from "./components/home";
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = createContext(themes.light);
function App() {
  const [th, setTh] = useState(themes.dark);
  const updateTh = (value) => {
    setTh({
      ...th,
      foreground: value,
    });
  };
  return (
    <>
      <h1>Main Component</h1>
      <ThemeContext.Provider value={{ th, updateTh }}>
        <Home></Home>
      </ThemeContext.Provider>
    </>
  );
}
export { ThemeContext };
export default App;
