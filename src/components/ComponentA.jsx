import { useCallback, useEffect, useState } from "react";
import getData from "../storage/localStorage/getData";
import Button from "./Button";
import setData from "../storage/localStorage/setData";

const ComponentA = () => {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const data = getData("user1");
    setBalance(parseInt(data));
  }, []);

  useEffect(() => {
    setData("user1", balance);
  }, [balance]);

  const _depositHandler = () => {
    if (!amount) {
      return;
    }
    const amo = parseInt(amount);
    const newBalance = balance + amo;
    setBalance(newBalance);
  };

  const _withdrawlHandler = () => {
    if (!amount) {
      return;
    }
    const amo = parseInt(amount);
    if (balance - amo < 0) {
      return;
    }
    const newBalance = balance - amo;
    setBalance(newBalance);
  };

  const _validateInputValue = (value) => {
    if (!value) {
      return true;
    }
    const reg = /^[0-9]+$/;
    const result = reg.test(value);
    return result;
  };

  const _onInputFieldChangeHandler = (e) => {
    if (!e || !e?.target) {
      return;
    }
    const { value } = e.target;
    if (!_validateInputValue(value)) {
      return;
    }
    setAmount(value);
  };

  return (
    <>
      <h3>Banking App</h3>
      <div>Total Balance: {balance}</div>
      <input
        type="text"
        placeholder="Enter Amnount"
        onChange={_onInputFieldChangeHandler}
        value={amount}
      />
      <Button label={"Deposit"} handler={_depositHandler}></Button>
      <Button label={"Withdrawl"} handler={_withdrawlHandler}></Button>
    </>
  );
};

export default ComponentA;
