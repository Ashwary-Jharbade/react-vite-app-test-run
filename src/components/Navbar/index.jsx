import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>Navbar</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ marginLeft: "10px" }}>
            <Link to="/">Home</Link>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <Link to="/compA">CompA</Link>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <Link to="/compB">CompB</Link>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <Link to="/compC">CompC</Link>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <button onClick={(e) => setCounter(counter + 1)}>
              Button {counter}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
