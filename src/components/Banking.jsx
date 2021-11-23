import { createContext, useEffect, useState } from "react";
import getData from "../storage/localStorage/getData";
import setData from "../storage/localStorage/setData";
import Withdrawl from "./Widthdrawl";
import Deposit from "./Deposit";
import Text from "./Text";
import Others from "./Others";

const balanceContext = createContext(0);

const Banking = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const data = getData("user1");
    setBalance(parseInt(data));
  }, []);

  useEffect(() => {
    setData("user1", balance);
  }, [balance]);

  const _updateBalanceHandler = (param) => {
    setBalance(param);
  };

  console.log("Rendered Banking Component");
  return (
    <>
      <Text label={"ATM"}></Text>
      <Text label={"Withdrawl"}></Text>
      <Withdrawl handler={_updateBalanceHandler} balance={balance}></Withdrawl>
      <br />
      <Text label={"Deposit"}></Text>
      <Deposit handler={_updateBalanceHandler} balance={balance}></Deposit>
      <br />

      <balanceContext.Provider value={balance}>
        <Others></Others>
      </balanceContext.Provider>
    </>
  );
};

export { Banking, balanceContext };
