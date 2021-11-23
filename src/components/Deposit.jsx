import Button from "./Button";
import { useState } from "react";
import Input from "./Input";

const Deposit = ({ handler, balance }) => {
  const [amount, setAmount] = useState("");

  const _depositHandler = () => {
    if (!amount) {
      return;
    }
    const amo = parseInt(amount);
    const newBalance = balance + amo;
    handler(newBalance);
    setAmount("");
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
      <div>
        <Input
          type="text"
          placeholder="Enter Amount"
          handler={_onInputFieldChangeHandler}
          value={amount}
        ></Input>
      </div>
      <br />
      <div>
        <Button label={"Deposit"} handler={_depositHandler}></Button> &nbsp;
      </div>
    </>
  );
};

export default Deposit;
