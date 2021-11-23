import { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Home from "../Home";

const App = () => {
  const [theme, setTheme] = useState("light");

  const _themeColorToggler = (e) => {
    if (!e || !e?.target) {
      return;
    }
    if (theme === "light") {
      setTheme("dark");
      return;
    }
    setTheme("light");
  };

  return (
    <>
      <div className={theme}>
        <Navbar themeToggler={_themeColorToggler} theme={theme}></Navbar>
        <Home></Home>
        <Footer></Footer>
      </div>
    </>
  );
};

export default App;
