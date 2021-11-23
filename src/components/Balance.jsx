import Text from "./Text";
import Button from "./Button";
import { balanceContext } from "./Banking";
import { useState, useContext } from "react";

const Balance = () => {
  const [balanceVisibility, setBalanceVisibility] = useState(false);
  const balance = useContext(balanceContext);

  const _showBalanceHandler = (e) => {
    if (!e || !e?.target) {
      return;
    }
    setBalanceVisibility(true);
    setTimeout(() => {
      setBalanceVisibility(false);
    }, 5000);
  };

  return (
    <>
      <Text label={"Balance"}></Text>
      {balanceVisibility ? (
        <div>
          <div>Current balance: {balance} </div>
          <br />
        </div>
      ) : null}
      <Button label={"Show Balance"} handler={_showBalanceHandler}></Button>
    </>
  );
};

export default Balance;
