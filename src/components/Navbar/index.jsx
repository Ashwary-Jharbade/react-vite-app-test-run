import { useState } from "react";

const Navbar = ({ themeToggler, theme }) => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="brand">React Forest</div>
          <div>
            <div onClick={themeToggler} className="toggleContainer">
              <div>
                {theme === "light" ? (
                  <div className="toggleSwitch"></div>
                ) : null}
              </div>
              <div>
                {theme === "dark" ? <div className="toggleSwitch"></div> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
