import { useLocation } from "react-router";

const CompC = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      <h4>CompC</h4>
    </>
  );
};

export default CompC;
