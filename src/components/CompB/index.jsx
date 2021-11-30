import { useLocation } from "react-router";
import { Link } from "react-router-dom";
const CompB = () => {
  const value = {
    message: "Message from Comp B to C",
  };
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h4>CompB</h4>
      <Link to="/CompC" state={value}>
        Pass data to C{" "}
      </Link>
    </>
  );
};

export default CompB;
