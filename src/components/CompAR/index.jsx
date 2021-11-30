import { useParams } from "react-router";
const CompAR = () => {
  const { id } = useParams();
  return (
    <>
      <h4>CompAR {id}</h4>
    </>
  );
};

export default CompAR;
