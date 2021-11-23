import { memo } from "react";

const Text = ({ label }) => {
  return (
    <>
      <p>
        <b>{label}</b>
      </p>
    </>
  );
};

export default memo(Text);
