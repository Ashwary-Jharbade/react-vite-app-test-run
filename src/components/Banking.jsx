import { createContext, useCallback, useEffect, useState } from "react";
import getData from "../storage/localStorage/getData";
import setData from "../storage/localStorage/setData";
import Withdrawl from "./Widthdrawl";
import Deposit from "./Deposit";
import Text from "./Text";
import Others from "./Others";
import Interest from "./Interest";
import Button from "./Button";

const balanceContext = createContext(0);

const Banking = () => {
  const [balance, setBalance] = useState(0);
  const [interest, setInterest] = useState(8);
  const [interestAmount, setInterestAmount] = useState(0);

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

  const _calculateRealTimeInterest = useCallback(() => {
    const res = balance * interest * 0.01;
    setInterestAmount(res);
  }, [balance, interest]);

  const _increaseInterestRateHandler = () => {
    const rate = interest + 1;
    setInterest(rate);
  };

  const _decreaseInterestRateHandler = () => {
    const rate = interest - 1;
    if (!rate) {
      return;
    }
    setInterest(rate);
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
      <Interest
        amount={interestAmount}
        handler={_calculateRealTimeInterest}
      ></Interest>
      <balanceContext.Provider value={balance}>
        <Others></Others>
      </balanceContext.Provider>
      <Text label={"Interest Rate"}></Text>
      <div>Current interest rate {interest} %</div>
      <br />
      <div>
        <Button
          label={"Increase Interest Rate"}
          handler={_increaseInterestRateHandler}
        ></Button>
        <Button
          label={"Decrease Interest Rate"}
          handler={_decreaseInterestRateHandler}
        ></Button>
      </div>
    </>
  );
};

export { Banking, balanceContext };
