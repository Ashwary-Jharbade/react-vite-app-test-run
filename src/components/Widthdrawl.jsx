import Button from "./Button";
import { useState } from "react";
import Input from "./Input";

const Withdrawl = ({ handler, balance }) => {
  const [amount, setAmount] = useState("");

  const _withdrawlHandler = () => {
    if (!amount) {
      return;
    }
    const amo = parseInt(amount);
    if (balance - amo < 0) {
      return;
    }
    const newBalance = balance - amo;
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
        <Button label={"Withdrawl"} handler={_withdrawlHandler}></Button>
      </div>
    </>
  );
};

export default Withdrawl;
