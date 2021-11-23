import { memo, useState } from "react";
import Text from "./Text";
import Button from "./Button";

const Interest = ({ amount, handler }) => {
  const [visibility, setVisibility] = useState(false);

  const _visibilityHandler = (e) => {
    if (!e || !e?.target) {
      return;
    }
    handler();
    setVisibility(true);
    setTimeout(() => {
      setVisibility(false);
    }, 5000);
  };

  return (
    <>
      <Text label={"Interest"}></Text>
      {visibility ? (
        <div>
          <div>Real time interest is Rs {amount}</div>
          <br />
        </div>
      ) : null}
      <Button
        label={"Calculate Interest"}
        handler={_visibilityHandler}
      ></Button>
    </>
  );
};

export default memo(Interest);
